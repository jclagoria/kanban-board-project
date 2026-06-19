package com.kanban.core.domain.service;

import com.kanban.core.domain.model.RefreshToken;
import com.kanban.core.domain.vo.UserId;
import com.kanban.core.port.output.RefreshTokenRepository;
import com.kanban.core.port.output.TokenBlacklist;
import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Mono;

import java.time.Duration;
import java.time.Instant;
import java.util.UUID;

@NullMarked
public class TokenRotationService {

    private final RefreshTokenRepository refreshTokenRepository;
    private final TokenBlacklist tokenBlacklist;
    private static final Duration GRACE_PERIOD = Duration.ofSeconds(5);
    private static final Duration REFRESH_TTL = Duration.ofDays(7);

    public TokenRotationService(RefreshTokenRepository refreshTokenRepository,
                                 TokenBlacklist tokenBlacklist) {
        this.refreshTokenRepository = refreshTokenRepository;
        this.tokenBlacklist = tokenBlacklist;
    }

    public Mono<RotationResult> verifyAndRotate(UserId userId, UUID jti,
                                                  Instant issuedAt, String tokenHash,
                                                  String rawRefreshToken) {
        return tokenBlacklist.isBlacklisted(tokenHash)
            .flatMap(isBlacklisted -> {
                if (isBlacklisted) {
                    return Mono.just(RotationResult.REPLAY_DETECTED);
                }

                return refreshTokenRepository.findAllValidByUser(userId)
                    .collectList()
                    .flatMap(tokens -> {
                        var latestIssued = tokens.stream()
                            .map(RefreshToken::issuedAt)
                            .max(Instant::compareTo);

                        if (latestIssued.isEmpty()) {
                            return Mono.just(RotationResult.OK);
                        }

                        if (issuedAt.isBefore(latestIssued.get())) {
                            var age = Duration.between(issuedAt, Instant.now());
                            if (age.compareTo(GRACE_PERIOD) <= 0) {
                                return Mono.just(RotationResult.RACE_CONDITION_GRACE);
                            }
                            return Mono.just(RotationResult.REPLAY_DETECTED);
                        }

                        var remaining = Duration.between(Instant.now(),
                            issuedAt.plus(REFRESH_TTL));
                        return tokenBlacklist.blacklist(tokenHash, remaining)
                            .thenReturn(RotationResult.OK);
                    });
            });
    }
}

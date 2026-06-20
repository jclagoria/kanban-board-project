package com.kanban.core.port.output;

import com.kanban.core.domain.model.RefreshToken;
import com.kanban.core.domain.vo.UserId;
import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.Instant;

@NullMarked
public interface RefreshTokenRepository {
    Mono<RefreshToken> save(RefreshToken token);
    Mono<RefreshToken> findByTokenHash(String tokenHash);
    Mono<Void> revokeByUser(UserId userId);
    Mono<Void> revokeByUserBefore(UserId userId, Instant before);
    Flux<RefreshToken> findAllValidByUser(UserId userId);
}

package com.kanban.core.port.output;

import com.kanban.core.domain.vo.UserId;
import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Mono;

import java.time.Duration;

@NullMarked
public interface TokenBlacklist {
    Mono<Void> blacklist(String refreshTokenHash, Duration ttl);
    Mono<Boolean> isBlacklisted(String refreshTokenHash);
    Mono<Void> blacklistAllForUser(UserId userId);
}

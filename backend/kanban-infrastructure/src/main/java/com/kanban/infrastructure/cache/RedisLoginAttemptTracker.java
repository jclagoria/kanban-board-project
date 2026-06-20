package com.kanban.infrastructure.cache;

import com.kanban.core.domain.vo.Email;
import com.kanban.core.port.output.LoginAttemptTracker;
import org.jspecify.annotations.NullMarked;
import org.springframework.data.redis.core.ReactiveRedisTemplate;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import java.time.Duration;
import java.time.Instant;

@Component
@NullMarked
public class RedisLoginAttemptTracker implements LoginAttemptTracker {

    private static final String PREFIX = "auth:login-attempts:";
    private static final long MAX_ATTEMPTS = 3;
    private static final Duration LOCKOUT_DURATION = Duration.ofMinutes(15);

    private final ReactiveRedisTemplate<String, String> redis;

    public RedisLoginAttemptTracker(ReactiveRedisTemplate<String, String> redis) {
        this.redis = redis;
    }

    @Override
    public Mono<Long> recordFailedAttempt(Email email) {
        var key = PREFIX + email.value();
        return redis.opsForValue().increment(key)
            .flatMap(count -> {
                if (count >= MAX_ATTEMPTS) {
                    return redis.expire(key, LOCKOUT_DURATION).thenReturn(count);
                }
                return redis.expire(key, LOCKOUT_DURATION).thenReturn(count);
            });
    }

    @Override
    public Mono<Void> resetAttempts(Email email) {
        var key = PREFIX + email.value();
        return redis.delete(key).then();
    }

    @Override
    public Mono<Boolean> isLocked(Email email) {
        var key = PREFIX + email.value();
        return redis.opsForValue().get(key)
            .map(v -> {
                try {
                    return Long.parseLong(v) >= MAX_ATTEMPTS;
                } catch (NumberFormatException e) {
                    return false;
                }
            })
            .defaultIfEmpty(false);
    }

    @Override
    public Mono<Duration> getRemainingLockout(Email email) {
        var key = PREFIX + email.value();
        return redis.getExpire(key)
            .defaultIfEmpty(Duration.ZERO);
    }
}

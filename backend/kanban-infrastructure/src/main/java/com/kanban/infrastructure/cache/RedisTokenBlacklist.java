package com.kanban.infrastructure.cache;

import com.kanban.core.domain.vo.UserId;
import com.kanban.core.port.output.TokenBlacklist;
import org.jspecify.annotations.NullMarked;
import org.springframework.data.redis.core.ReactiveRedisTemplate;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.Duration;
import java.util.HexFormat;

@Component
@NullMarked
public class RedisTokenBlacklist implements TokenBlacklist {

    private static final String REFRESH_PREFIX = "auth:refresh-token:blacklist:";
    private static final String USER_PREFIX = "auth:user-blacklist:";

    private final ReactiveRedisTemplate<String, String> redis;

    public RedisTokenBlacklist(ReactiveRedisTemplate<String, String> redis) {
        this.redis = redis;
    }

    @Override
    public Mono<Void> blacklist(String refreshTokenHash, Duration ttl) {
        var key = REFRESH_PREFIX + sha256(refreshTokenHash);
        if (ttl.isNegative()) {
            return Mono.empty();
        }
        return redis.opsForValue().set(key, "1", ttl).then();
    }

    @Override
    public Mono<Boolean> isBlacklisted(String refreshTokenHash) {
        var key = REFRESH_PREFIX + sha256(refreshTokenHash);
        return redis.hasKey(key);
    }

    @Override
    public Mono<Void> blacklistAllForUser(UserId userId) {
        var key = USER_PREFIX + userId.value().toString();
        return redis.opsForValue().set(key, "1", Duration.ofDays(30)).then();
    }

    private static String sha256(String value) {
        try {
            var digest = MessageDigest.getInstance("SHA-256");
            var hash = digest.digest(value.getBytes(StandardCharsets.UTF_8));
            return HexFormat.of().formatHex(hash);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("SHA-256 not available", e);
        }
    }
}

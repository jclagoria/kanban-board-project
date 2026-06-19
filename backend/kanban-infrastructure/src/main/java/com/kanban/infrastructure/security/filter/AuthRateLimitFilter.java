package com.kanban.infrastructure.security.filter;

import org.jspecify.annotations.NullMarked;
import org.springframework.core.annotation.Order;
import org.springframework.data.redis.core.ReactiveRedisTemplate;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

import java.net.InetSocketAddress;
import java.time.Duration;
import java.time.Instant;
import java.util.Map;

@Component
@Order(-90)
@NullMarked
public class AuthRateLimitFilter implements WebFilter {

    private static final Map<String, RateLimitConfig> LIMITS = Map.of(
        "POST:/v1/auth/login", new RateLimitConfig(10, Duration.ofMinutes(1)),
        "POST:/v1/auth/register", new RateLimitConfig(5, Duration.ofHours(1)),
        "POST:/v1/auth/forgot-password", new RateLimitConfig(3, Duration.ofHours(1)),
        "POST:/v1/auth/refresh", new RateLimitConfig(30, Duration.ofMinutes(1))
    );

    private static final RateLimitConfig DEFAULT_LIMIT = new RateLimitConfig(1000, Duration.ofMinutes(1));

    private static final String PREFIX = "ratelimit:auth:";

    private final ReactiveRedisTemplate<String, String> redis;

    public AuthRateLimitFilter(ReactiveRedisTemplate<String, String> redis) {
        this.redis = redis;
    }

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
        var request = exchange.getRequest();
        var routeKey = request.getMethod() + ":" + request.getURI().getPath();
        var config = LIMITS.getOrDefault(routeKey, DEFAULT_LIMIT);
        var clientIp = resolveClientIp(request.getRemoteAddress());

        var redisKey = PREFIX + clientIp + ":" + routeKey;

        return redis.opsForValue().increment(redisKey)
            .flatMap(current -> {
                if (current == 1) {
                    return redis.expire(redisKey, config.window()).thenReturn(current);
                }
                return Mono.just(current);
            })
            .flatMap(current -> {
                var response = exchange.getResponse();
                response.getHeaders().set("X-RateLimit-Limit", String.valueOf(config.maxRequests()));
                response.getHeaders().set("X-RateLimit-Remaining", String.valueOf(Math.max(0, config.maxRequests() - current)));

                return redis.getExpire(redisKey)
                    .flatMap(ttl -> {
                        response.getHeaders().set("X-RateLimit-Reset", String.valueOf(Instant.now().plus(ttl).getEpochSecond()));
                        if (current > config.maxRequests()) {
                            response.setStatusCode(HttpStatus.TOO_MANY_REQUESTS);
                            response.getHeaders().set(HttpHeaders.CONTENT_TYPE, "application/json");
                            var body = "{\"code\":\"RATE_LIMIT_EXCEEDED\",\"message\":\"Too many requests. Try again later.\"}";
                            var buffer = response.bufferFactory().wrap(body.getBytes());
                            return response.writeWith(Mono.just(buffer));
                        }
                        return chain.filter(exchange);
                    });
            });
    }

    private static String resolveClientIp(InetSocketAddress remoteAddress) {
        if (remoteAddress == null) {
            return "unknown";
        }
        return remoteAddress.getAddress().getHostAddress();
    }

    private record RateLimitConfig(int maxRequests, Duration window) {}
}

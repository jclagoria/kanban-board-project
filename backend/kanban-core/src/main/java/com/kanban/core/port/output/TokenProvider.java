package com.kanban.core.port.output;

import com.kanban.core.domain.model.User;
import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Mono;

import java.time.Instant;

@NullMarked
public interface TokenProvider {
    String generateAccessToken(User user);
    String generateRefreshToken(User user);
    Mono<JwtClaims> validateAccessToken(String token);
    Mono<JwtClaims> validateRefreshToken(String token);
    JwtClaims decodeRefreshToken(String token);

    @NullMarked
    record JwtClaims(
        String userId,
        String email,
        String name,
        String plan,
        Instant expiresAt,
        Instant issuedAt,
        String jti
    ) {}
}

package com.kanban.infrastructure.security.jwt;

import com.kanban.core.domain.model.User;
import com.kanban.core.port.output.TokenProvider;
import com.kanban.core.shared.error.TokenExpiredException;
import com.kanban.core.shared.error.TokenInvalidException;
import com.kanban.infrastructure.security.config.TokenProperties;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import org.jspecify.annotations.NullMarked;
import org.jspecify.annotations.Nullable;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import java.security.KeyFactory;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.time.Duration;
import java.time.Instant;
import java.util.Base64;
import java.util.Date;
import java.util.UUID;

@NullMarked
@Component
public class JwtTokenProvider implements TokenProvider {

    private final PrivateKey privateKey;
    private final PublicKey publicKey;
    private final @Nullable String keyId;
    private final Duration accessTokenTtl;
    private final Duration refreshTokenTtl;

    public JwtTokenProvider(TokenProperties properties) {
        try {
            var keyFactory = KeyFactory.getInstance("RSA");
            var privKeySpec = new PKCS8EncodedKeySpec(
                Base64.getDecoder().decode(properties.getPrivateKeyBase64()));
            this.privateKey = keyFactory.generatePrivate(privKeySpec);
            var pubKeySpec = new X509EncodedKeySpec(
                Base64.getDecoder().decode(properties.getPublicKeyBase64()));
            this.publicKey = keyFactory.generatePublic(pubKeySpec);
        } catch (Exception e) {
            throw new RuntimeException("Failed to load JWT RSA keys", e);
        }
        this.keyId = properties.getKeyId();
        this.accessTokenTtl = properties.getAccessToken().expiration();
        this.refreshTokenTtl = properties.getRefreshToken().expiration();
    }

    @Override
    public String generateAccessToken(User user) {
        var now = Instant.now();
        var builder = Jwts.builder()
            .issuer("kanban-multivista")
            .subject(user.id().value().toString())
            .claim("email", user.email().value())
            .claim("name", user.displayName())
            .claim("plan", user.plan())
            .issuedAt(Date.from(now))
            .expiration(Date.from(now.plus(accessTokenTtl)))
            .signWith(privateKey, Jwts.SIG.RS256);
        if (keyId != null) {
            builder.header().keyId(keyId);
        }
        return builder.compact();
    }

    @Override
    public String generateRefreshToken(User user) {
        var now = Instant.now();
        var builder = Jwts.builder()
            .issuer("kanban-multivista")
            .subject(user.id().value().toString())
            .id(UUID.randomUUID().toString())
            .claim("type", "refresh")
            .issuedAt(Date.from(now))
            .expiration(Date.from(now.plus(refreshTokenTtl)))
            .signWith(privateKey, Jwts.SIG.RS256);
        if (keyId != null) {
            builder.header().keyId(keyId);
        }
        return builder.compact();
    }

    @Override
    public Mono<TokenProvider.JwtClaims> validateAccessToken(String token) {
        return Mono.fromCallable(() -> parseClaims(token, null))
            .onErrorMap(ExpiredJwtException.class, ex -> new TokenExpiredException())
            .onErrorMap(JwtException.class, ex -> new TokenInvalidException(ex.getMessage()));
    }

    @Override
    public Mono<TokenProvider.JwtClaims> validateRefreshToken(String token) {
        return Mono.fromCallable(() -> parseClaims(token, "refresh"))
            .onErrorMap(ExpiredJwtException.class, ex -> new TokenExpiredException())
            .onErrorMap(JwtException.class, ex -> new TokenInvalidException(ex.getMessage()));
    }

    @Override
    public TokenProvider.JwtClaims decodeRefreshToken(String token) {
        return parseClaims(token, "refresh");
    }

    private TokenProvider.JwtClaims parseClaims(String token, @Nullable String requiredType) {
        var parserBuilder = Jwts.parser()
            .verifyWith(publicKey)
            .requireIssuer("kanban-multivista");
        if (requiredType != null) {
            parserBuilder = parserBuilder.require("type", requiredType);
        }
        var claims = parserBuilder.build()
            .parseSignedClaims(token)
            .getPayload();

        return new TokenProvider.JwtClaims(
            claims.getSubject(),
            claims.get("email", String.class),
            claims.get("name", String.class),
            claims.get("plan", String.class),
            claims.getExpiration().toInstant(),
            claims.getIssuedAt().toInstant(),
            claims.getId()
        );
    }
}

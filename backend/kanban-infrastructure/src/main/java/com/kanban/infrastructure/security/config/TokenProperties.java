package com.kanban.infrastructure.security.config;

import org.jspecify.annotations.NullMarked;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.bind.ConstructorBinding;
import org.springframework.boot.context.properties.bind.DefaultValue;

import java.time.Duration;

@NullMarked
@ConfigurationProperties(prefix = "jwt")
public class TokenProperties {

    private final String keyId;
    private final String privateKeyBase64;
    private final String publicKeyBase64;
    private final TokenConfig accessToken;
    private final TokenConfig refreshToken;

    @ConstructorBinding
    public TokenProperties(String keyId, String privateKeyBase64, String publicKeyBase64,
                            @DefaultValue TokenConfig accessToken,
                            @DefaultValue TokenConfig refreshToken) {
        this.keyId = keyId;
        this.privateKeyBase64 = privateKeyBase64;
        this.publicKeyBase64 = publicKeyBase64;
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }

    public String getKeyId() { return keyId; }
    public String getPrivateKeyBase64() { return privateKeyBase64; }
    public String getPublicKeyBase64() { return publicKeyBase64; }
    public TokenConfig getAccessToken() { return accessToken; }
    public TokenConfig getRefreshToken() { return refreshToken; }

    @NullMarked
    public record TokenConfig(Duration expiration) {}
}

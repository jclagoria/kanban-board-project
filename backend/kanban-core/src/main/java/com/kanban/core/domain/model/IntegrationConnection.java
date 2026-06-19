package com.kanban.core.domain.model;

import com.kanban.core.domain.vo.UserId;
import org.jspecify.annotations.NullMarked;
import org.jspecify.annotations.Nullable;
import java.time.Instant;
import java.util.Objects;
import java.util.UUID;

@NullMarked
public class IntegrationConnection {

    private final UUID id;
    private final UserId userId;
    private final String provider;
    private final String accessToken;
    private final @Nullable String refreshToken;
    private final @Nullable Instant tokenExpiresAt;
    private final @Nullable String providerUserId;
    private final @Nullable String providerMetadata;
    private final Instant createdAt;
    private final Instant updatedAt;

    public IntegrationConnection(UUID id, UserId userId, String provider, String accessToken,
                                 @Nullable String refreshToken, @Nullable Instant tokenExpiresAt,
                                 @Nullable String providerUserId, @Nullable String providerMetadata,
                                 Instant createdAt, Instant updatedAt) {
        this.id = Objects.requireNonNull(id, "id must not be null");
        this.userId = Objects.requireNonNull(userId, "userId must not be null");
        this.provider = Objects.requireNonNull(provider, "provider must not be null");
        this.accessToken = Objects.requireNonNull(accessToken, "accessToken must not be null");
        this.refreshToken = refreshToken;
        this.tokenExpiresAt = tokenExpiresAt;
        this.providerUserId = providerUserId;
        this.providerMetadata = providerMetadata;
        this.createdAt = Objects.requireNonNull(createdAt, "createdAt must not be null");
        this.updatedAt = Objects.requireNonNull(updatedAt, "updatedAt must not be null");
    }

    public UUID id() { return id; }
    public UserId userId() { return userId; }
    public String provider() { return provider; }
    public String accessToken() { return accessToken; }
    public @Nullable String refreshToken() { return refreshToken; }
    public @Nullable Instant tokenExpiresAt() { return tokenExpiresAt; }
    public @Nullable String providerUserId() { return providerUserId; }
    public @Nullable String providerMetadata() { return providerMetadata; }
    public Instant createdAt() { return createdAt; }
    public Instant updatedAt() { return updatedAt; }
}

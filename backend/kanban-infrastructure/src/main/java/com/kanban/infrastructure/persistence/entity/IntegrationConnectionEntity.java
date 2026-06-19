package com.kanban.infrastructure.persistence.entity;

import com.fasterxml.jackson.databind.JsonNode;
import org.jspecify.annotations.NullMarked;
import org.jspecify.annotations.Nullable;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.time.Instant;
import java.util.Objects;
import java.util.UUID;

@NullMarked
@Table("integration_connections")
public record IntegrationConnectionEntity(
        @Id @Nullable UUID id,
        @Column("user_id") UUID userId,
        @Column("provider") String provider,
        @Column("access_token") String accessToken,
        @Column("refresh_token") @Nullable String refreshToken,
        @Column("token_expires_at") @Nullable Instant tokenExpiresAt,
        @Column("provider_user_id") @Nullable String providerUserId,
        @Column("provider_metadata") @Nullable JsonNode providerMetadata,
        @Column("created_at") Instant createdAt,
        @Column("updated_at") Instant updatedAt
) {
    public IntegrationConnectionEntity {
        Objects.requireNonNull(userId, "userId must not be null");
        Objects.requireNonNull(provider, "provider must not be null");
        Objects.requireNonNull(accessToken, "accessToken must not be null");
        Objects.requireNonNull(createdAt, "createdAt must not be null");
        Objects.requireNonNull(updatedAt, "updatedAt must not be null");
    }
}

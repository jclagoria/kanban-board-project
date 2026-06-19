package com.kanban.infrastructure.persistence.entity;

import org.jspecify.annotations.NullMarked;
import org.jspecify.annotations.Nullable;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.time.Instant;
import java.util.Objects;
import java.util.UUID;

@NullMarked
@Table("refresh_tokens")
public record RefreshTokenEntity(
        @Id @Nullable UUID id,
        @Column("user_id") UUID userId,
        @Column("token_hash") String tokenHash,
        @Column("expires_at") Instant expiresAt,
        @Column("revoked") boolean revoked,
        @Column("created_at") Instant createdAt
) {
    public RefreshTokenEntity {
        Objects.requireNonNull(userId, "userId must not be null");
        Objects.requireNonNull(tokenHash, "tokenHash must not be null");
        Objects.requireNonNull(expiresAt, "expiresAt must not be null");
        Objects.requireNonNull(createdAt, "createdAt must not be null");
    }
}

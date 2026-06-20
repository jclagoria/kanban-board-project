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
@Table("users")
public record UserEntity(
        @Id @Nullable UUID id,
        @Column("email") String email,
        @Column("password_hash") String passwordHash,
        @Column("display_name") String displayName,
        @Column("avatar_url") @Nullable String avatarUrl,
        @Column("two_factor_enabled") boolean twoFactorEnabled,
        @Column("two_factor_secret") @Nullable String twoFactorSecret,
        @Column("plan") String plan,
        @Column("storage_used_bytes") long storageUsedBytes,
        @Column("email_verified") boolean emailVerified,
        @Column("email_verified_at") @Nullable Instant emailVerifiedAt,
        @Column("issued_before") Instant issuedBefore,
        @Column("created_at") Instant createdAt,
        @Column("updated_at") Instant updatedAt
) {
    public UserEntity {
        Objects.requireNonNull(email, "email must not be null");
        Objects.requireNonNull(passwordHash, "passwordHash must not be null");
        Objects.requireNonNull(displayName, "displayName must not be null");
        Objects.requireNonNull(plan, "plan must not be null");
        Objects.requireNonNull(issuedBefore, "issuedBefore must not be null");
        Objects.requireNonNull(createdAt, "createdAt must not be null");
        Objects.requireNonNull(updatedAt, "updatedAt must not be null");
    }
}

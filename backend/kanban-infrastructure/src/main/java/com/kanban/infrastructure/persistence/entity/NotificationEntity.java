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
@Table("notifications")
public record NotificationEntity(
        @Id @Nullable UUID id,
        @Column("user_id") UUID userId,
        @Column("type") String type,
        @Column("title") String title,
        @Column("body") @Nullable String body,
        @Column("data") @Nullable JsonNode data,
        @Column("read") boolean read,
        @Column("email_sent") boolean emailSent,
        @Column("created_at") Instant createdAt
) {
    public NotificationEntity {
        Objects.requireNonNull(userId, "userId must not be null");
        Objects.requireNonNull(type, "type must not be null");
        Objects.requireNonNull(title, "title must not be null");
        Objects.requireNonNull(createdAt, "createdAt must not be null");
    }
}

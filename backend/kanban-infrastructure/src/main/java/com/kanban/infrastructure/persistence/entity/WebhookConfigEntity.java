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
@Table("webhook_configs")
public record WebhookConfigEntity(
        @Id @Nullable UUID id,
        @Column("board_id") UUID boardId,
        @Column("url") String url,
        @Column("events") String[] events,
        @Column("secret") @Nullable String secret,
        @Column("enabled") boolean enabled,
        @Column("created_at") Instant createdAt
) {
    public WebhookConfigEntity {
        Objects.requireNonNull(boardId, "boardId must not be null");
        Objects.requireNonNull(url, "url must not be null");
        Objects.requireNonNull(events, "events must not be null");
        Objects.requireNonNull(createdAt, "createdAt must not be null");
    }
}

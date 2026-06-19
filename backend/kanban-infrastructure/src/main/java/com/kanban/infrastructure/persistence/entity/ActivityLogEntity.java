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
@Table("activity_log")
public record ActivityLogEntity(
        @Id @Nullable UUID id,
        @Column("board_id") UUID boardId,
        @Column("user_id") UUID userId,
        @Column("action") String action,
        @Column("entity_type") String entityType,
        @Column("entity_id") @Nullable UUID entityId,
        @Column("data") @Nullable JsonNode data,
        @Column("created_at") Instant createdAt
) {
    public ActivityLogEntity {
        Objects.requireNonNull(boardId, "boardId must not be null");
        Objects.requireNonNull(userId, "userId must not be null");
        Objects.requireNonNull(action, "action must not be null");
        Objects.requireNonNull(entityType, "entityType must not be null");
        Objects.requireNonNull(createdAt, "createdAt must not be null");
    }
}

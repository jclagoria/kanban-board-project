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
@Table("board_lists")
public record BoardListEntity(
        @Id @Nullable UUID id,
        @Column("board_id") UUID boardId,
        @Column("name") String name,
        @Column("position") double position,
        @Column("archived") boolean archived,
        @Column("created_at") Instant createdAt,
        @Column("updated_at") Instant updatedAt
) {
    public BoardListEntity {
        Objects.requireNonNull(boardId, "boardId must not be null");
        Objects.requireNonNull(name, "name must not be null");
        Objects.requireNonNull(createdAt, "createdAt must not be null");
        Objects.requireNonNull(updatedAt, "updatedAt must not be null");
    }
}

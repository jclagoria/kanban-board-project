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
@Table("cards")
public record CardEntity(
        @Id @Nullable UUID id,
        @Column("list_id") UUID listId,
        @Column("title") String title,
        @Column("description") @Nullable String description,
        @Column("position") double position,
        @Column("due_date") @Nullable Instant dueDate,
        @Column("start_date") @Nullable Instant startDate,
        @Column("cover_color") @Nullable String coverColor,
        @Column("archived") boolean archived,
        @Column("created_by") UUID createdBy,
        @Column("created_at") Instant createdAt,
        @Column("updated_at") Instant updatedAt
) {
    public CardEntity {
        Objects.requireNonNull(listId, "listId must not be null");
        Objects.requireNonNull(title, "title must not be null");
        Objects.requireNonNull(createdBy, "createdBy must not be null");
        Objects.requireNonNull(createdAt, "createdAt must not be null");
        Objects.requireNonNull(updatedAt, "updatedAt must not be null");
    }
}

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
@Table("card_checklist_items")
public record CardChecklistItemEntity(
        @Id @Nullable UUID id,
        @Column("card_id") UUID cardId,
        @Column("title") String title,
        @Column("completed") boolean completed,
        @Column("position") double position,
        @Column("created_at") Instant createdAt
) {
    public CardChecklistItemEntity {
        Objects.requireNonNull(cardId, "cardId must not be null");
        Objects.requireNonNull(title, "title must not be null");
        Objects.requireNonNull(createdAt, "createdAt must not be null");
    }
}

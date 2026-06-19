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
@Table("card_labels")
public record CardLabelEntity(
        @Id @Nullable UUID id,
        @Column("card_id") UUID cardId,
        @Column("name") String name,
        @Column("color") String color,
        @Column("created_at") Instant createdAt
) {
    public CardLabelEntity {
        Objects.requireNonNull(cardId, "cardId must not be null");
        Objects.requireNonNull(name, "name must not be null");
        Objects.requireNonNull(color, "color must not be null");
        Objects.requireNonNull(createdAt, "createdAt must not be null");
    }
}

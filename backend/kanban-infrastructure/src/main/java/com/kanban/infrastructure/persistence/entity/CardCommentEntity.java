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
@Table("card_comments")
public record CardCommentEntity(
        @Id @Nullable UUID id,
        @Column("card_id") UUID cardId,
        @Column("author_id") UUID authorId,
        @Column("body") String body,
        @Column("created_at") Instant createdAt,
        @Column("updated_at") Instant updatedAt
) {
    public CardCommentEntity {
        Objects.requireNonNull(cardId, "cardId must not be null");
        Objects.requireNonNull(authorId, "authorId must not be null");
        Objects.requireNonNull(body, "body must not be null");
        Objects.requireNonNull(createdAt, "createdAt must not be null");
        Objects.requireNonNull(updatedAt, "updatedAt must not be null");
    }
}

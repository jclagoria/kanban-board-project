package com.kanban.infrastructure.persistence.entity;

import org.jspecify.annotations.NullMarked;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.time.Instant;
import java.util.Objects;
import java.util.UUID;

@NullMarked
@Table("card_members")
public record CardMemberEntity(
        @Column("card_id") UUID cardId,
        @Column("user_id") UUID userId,
        @Column("assigned_at") Instant assignedAt
) {
    public CardMemberEntity {
        Objects.requireNonNull(cardId, "cardId must not be null");
        Objects.requireNonNull(userId, "userId must not be null");
        Objects.requireNonNull(assignedAt, "assignedAt must not be null");
    }
}

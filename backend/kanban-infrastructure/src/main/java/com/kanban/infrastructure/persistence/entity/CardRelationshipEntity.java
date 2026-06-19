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
@Table("card_relationships")
public record CardRelationshipEntity(
        @Id @Nullable UUID id,
        @Column("source_card_id") UUID sourceCardId,
        @Column("target_card_id") UUID targetCardId,
        @Column("relationship_type") String relationshipType,
        @Column("created_at") Instant createdAt
) {
    public CardRelationshipEntity {
        Objects.requireNonNull(sourceCardId, "sourceCardId must not be null");
        Objects.requireNonNull(targetCardId, "targetCardId must not be null");
        Objects.requireNonNull(relationshipType, "relationshipType must not be null");
        Objects.requireNonNull(createdAt, "createdAt must not be null");
    }
}

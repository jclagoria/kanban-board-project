package com.kanban.core.domain.model;

import com.kanban.core.domain.vo.CardId;
import org.jspecify.annotations.NullMarked;
import java.time.Instant;
import java.util.Objects;
import java.util.UUID;

@NullMarked
public class CardRelationship {

    private final UUID id;
    private final CardId sourceCardId;
    private final CardId targetCardId;
    private final RelationshipType type;
    private final Instant createdAt;

    public enum RelationshipType {
        BLOCKS, RELATES_TO, DUPLICATE_OF
    }

    public CardRelationship(UUID id, CardId sourceCardId, CardId targetCardId,
                            RelationshipType type, Instant createdAt) {
        this.id = Objects.requireNonNull(id, "id must not be null");
        this.sourceCardId = Objects.requireNonNull(sourceCardId, "sourceCardId must not be null");
        this.targetCardId = Objects.requireNonNull(targetCardId, "targetCardId must not be null");
        this.type = Objects.requireNonNull(type, "type must not be null");
        this.createdAt = Objects.requireNonNull(createdAt, "createdAt must not be null");
    }

    public UUID id() { return id; }
    public CardId sourceCardId() { return sourceCardId; }
    public CardId targetCardId() { return targetCardId; }
    public RelationshipType type() { return type; }
    public Instant createdAt() { return createdAt; }
}

package com.kanban.core.domain.model;

import com.kanban.core.domain.vo.CardId;
import org.jspecify.annotations.NullMarked;
import java.time.Instant;
import java.util.Objects;
import java.util.UUID;

@NullMarked
public class CardLabel {

    private final UUID id;
    private final CardId cardId;
    private final String name;
    private final String color;
    private final Instant createdAt;

    public CardLabel(UUID id, CardId cardId, String name, String color, Instant createdAt) {
        this.id = Objects.requireNonNull(id, "id must not be null");
        this.cardId = Objects.requireNonNull(cardId, "cardId must not be null");
        this.name = Objects.requireNonNull(name, "name must not be null");
        this.color = Objects.requireNonNull(color, "color must not be null");
        this.createdAt = Objects.requireNonNull(createdAt, "createdAt must not be null");
    }

    public UUID id() { return id; }
    public CardId cardId() { return cardId; }
    public String name() { return name; }
    public String color() { return color; }
    public Instant createdAt() { return createdAt; }
}

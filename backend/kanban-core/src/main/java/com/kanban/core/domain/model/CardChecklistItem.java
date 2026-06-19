package com.kanban.core.domain.model;

import com.kanban.core.domain.vo.CardId;
import org.jspecify.annotations.NullMarked;
import java.time.Instant;
import java.util.Objects;
import java.util.UUID;

@NullMarked
public class CardChecklistItem {

    private final UUID id;
    private final CardId cardId;
    private final String title;
    private final boolean completed;
    private final double position;
    private final Instant createdAt;

    public CardChecklistItem(UUID id, CardId cardId, String title, boolean completed,
                             double position, Instant createdAt) {
        this.id = Objects.requireNonNull(id, "id must not be null");
        this.cardId = Objects.requireNonNull(cardId, "cardId must not be null");
        this.title = Objects.requireNonNull(title, "title must not be null");
        this.completed = completed;
        this.position = position;
        this.createdAt = Objects.requireNonNull(createdAt, "createdAt must not be null");
    }

    public CardChecklistItem withCompleted(boolean completed) {
        return new CardChecklistItem(this.id, this.cardId, this.title, completed, this.position, this.createdAt);
    }

    public UUID id() { return id; }
    public CardId cardId() { return cardId; }
    public String title() { return title; }
    public boolean completed() { return completed; }
    public double position() { return position; }
    public Instant createdAt() { return createdAt; }
}

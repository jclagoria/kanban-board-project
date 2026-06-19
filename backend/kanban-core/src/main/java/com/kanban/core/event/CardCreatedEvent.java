package com.kanban.core.event;

import org.jspecify.annotations.NullMarked;
import java.time.Instant;
import java.util.UUID;

@NullMarked
public record CardCreatedEvent(
    UUID cardId,
    UUID boardId,
    UUID listId,
    UUID createdBy,
    String title,
    Instant occurredAt
) implements DomainEvent {
    @Override public UUID aggregateId() { return cardId; }
}

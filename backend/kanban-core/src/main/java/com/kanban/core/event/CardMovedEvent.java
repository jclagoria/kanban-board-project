package com.kanban.core.event;

import org.jspecify.annotations.NullMarked;
import java.time.Instant;
import java.util.UUID;

@NullMarked
public record CardMovedEvent(
    UUID cardId,
    UUID boardId,
    UUID fromListId,
    UUID toListId,
    double fromPosition,
    double toPosition,
    UUID movedBy,
    Instant occurredAt
) implements DomainEvent {
    @Override public UUID aggregateId() { return cardId; }
}

package com.kanban.core.event;

import org.jspecify.annotations.NullMarked;
import java.time.Instant;
import java.util.UUID;

@NullMarked
public record CardAssignedEvent(
    UUID cardId,
    UUID boardId,
    UUID assignedTo,
    UUID assignedBy,
    Instant occurredAt
) implements DomainEvent {
    @Override public UUID aggregateId() { return cardId; }
}

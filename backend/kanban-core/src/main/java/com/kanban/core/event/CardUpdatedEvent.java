package com.kanban.core.event;

import org.jspecify.annotations.NullMarked;
import java.time.Instant;
import java.util.UUID;

@NullMarked
public record CardUpdatedEvent(
    UUID cardId,
    UUID boardId,
    UUID updatedBy,
    String changes,
    Instant occurredAt
) implements DomainEvent {
    @Override public UUID aggregateId() { return cardId; }
}

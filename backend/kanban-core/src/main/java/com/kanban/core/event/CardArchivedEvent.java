package com.kanban.core.event;

import org.jspecify.annotations.NullMarked;
import java.time.Instant;
import java.util.UUID;

@NullMarked
public record CardArchivedEvent(
    UUID cardId,
    UUID boardId,
    UUID archivedBy,
    Instant occurredAt
) implements DomainEvent {
    @Override public UUID aggregateId() { return cardId; }
}

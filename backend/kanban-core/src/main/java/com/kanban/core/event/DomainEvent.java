package com.kanban.core.event;

import org.jspecify.annotations.NullMarked;
import java.time.Instant;
import java.util.UUID;

@NullMarked
public sealed interface DomainEvent permits
    CardCreatedEvent, CardMovedEvent, CardUpdatedEvent,
    CardArchivedEvent, BoardMemberAddedEvent, CardAssignedEvent {
    UUID aggregateId();
    Instant occurredAt();
}

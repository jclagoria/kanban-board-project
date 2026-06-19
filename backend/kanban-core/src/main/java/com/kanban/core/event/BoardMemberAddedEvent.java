package com.kanban.core.event;

import org.jspecify.annotations.NullMarked;
import java.time.Instant;
import java.util.UUID;

@NullMarked
public record BoardMemberAddedEvent(
    UUID boardId,
    UUID memberId,
    UUID addedBy,
    String role,
    Instant occurredAt
) implements DomainEvent {
    @Override public UUID aggregateId() { return boardId; }
}

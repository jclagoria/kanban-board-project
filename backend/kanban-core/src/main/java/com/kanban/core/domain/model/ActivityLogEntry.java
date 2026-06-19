package com.kanban.core.domain.model;

import com.kanban.core.domain.vo.BoardId;
import com.kanban.core.domain.vo.UserId;
import org.jspecify.annotations.NullMarked;
import org.jspecify.annotations.Nullable;
import java.time.Instant;
import java.util.Objects;
import java.util.UUID;

@NullMarked
public class ActivityLogEntry {

    private final UUID id;
    private final BoardId boardId;
    private final UserId userId;
    private final String action;
    private final String entityType;
    private final @Nullable UUID entityId;
    private final @Nullable String data;
    private final Instant createdAt;

    public ActivityLogEntry(UUID id, BoardId boardId, UserId userId, String action,
                            String entityType, @Nullable UUID entityId,
                            @Nullable String data, Instant createdAt) {
        this.id = Objects.requireNonNull(id, "id must not be null");
        this.boardId = Objects.requireNonNull(boardId, "boardId must not be null");
        this.userId = Objects.requireNonNull(userId, "userId must not be null");
        this.action = Objects.requireNonNull(action, "action must not be null");
        this.entityType = Objects.requireNonNull(entityType, "entityType must not be null");
        this.entityId = entityId;
        this.data = data;
        this.createdAt = Objects.requireNonNull(createdAt, "createdAt must not be null");
    }

    public UUID id() { return id; }
    public BoardId boardId() { return boardId; }
    public UserId userId() { return userId; }
    public String action() { return action; }
    public String entityType() { return entityType; }
    public @Nullable UUID entityId() { return entityId; }
    public @Nullable String data() { return data; }
    public Instant createdAt() { return createdAt; }
}

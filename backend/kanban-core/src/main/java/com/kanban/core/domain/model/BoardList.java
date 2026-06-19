package com.kanban.core.domain.model;

import com.kanban.core.domain.vo.BoardId;
import com.kanban.core.domain.vo.BoardListId;
import org.jspecify.annotations.NullMarked;
import java.time.Instant;
import java.util.Objects;

@NullMarked
public class BoardList {

    private final BoardListId id;
    private final BoardId boardId;
    private final String name;
    private final double position;
    private final boolean archived;
    private final Instant createdAt;
    private final Instant updatedAt;

    private BoardList(BoardListId id, BoardId boardId, String name, double position,
                      boolean archived, Instant createdAt, Instant updatedAt) {
        this.id = Objects.requireNonNull(id, "id must not be null");
        this.boardId = Objects.requireNonNull(boardId, "boardId must not be null");
        this.name = Objects.requireNonNull(name, "name must not be null");
        this.position = position;
        this.archived = archived;
        this.createdAt = Objects.requireNonNull(createdAt, "createdAt must not be null");
        this.updatedAt = Objects.requireNonNull(updatedAt, "updatedAt must not be null");
    }

    public static BoardList create(BoardId boardId, String name, double position) {
        var tempId = new BoardListId(java.util.UUID.randomUUID());
        var now = Instant.now();
        return new BoardList(tempId, boardId, name, position, false, now, now);
    }

    public static BoardList reconstitute(BoardListId id, BoardId boardId, String name,
                                         double position, boolean archived,
                                         Instant createdAt, Instant updatedAt) {
        return new BoardList(id, boardId, name, position, archived, createdAt, updatedAt);
    }

    public BoardList withId(BoardListId newId) {
        return new BoardList(newId, this.boardId, this.name, this.position,
            this.archived, this.createdAt, this.updatedAt);
    }

    public BoardList rename(String newName) {
        return new BoardList(this.id, this.boardId, newName, this.position,
            this.archived, this.createdAt, Instant.now());
    }

    public BoardList move(double newPosition) {
        return new BoardList(this.id, this.boardId, this.name, newPosition,
            this.archived, this.createdAt, Instant.now());
    }

    public BoardList archive() {
        return new BoardList(this.id, this.boardId, this.name, this.position,
            true, this.createdAt, Instant.now());
    }

    public BoardListId id() { return id; }
    public BoardId boardId() { return boardId; }
    public String name() { return name; }
    public double position() { return position; }
    public boolean archived() { return archived; }
    public Instant createdAt() { return createdAt; }
    public Instant updatedAt() { return updatedAt; }
}

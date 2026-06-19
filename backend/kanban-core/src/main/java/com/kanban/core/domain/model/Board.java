package com.kanban.core.domain.model;

import com.kanban.core.domain.vo.BoardId;
import com.kanban.core.domain.vo.UserId;
import org.jspecify.annotations.NullMarked;
import org.jspecify.annotations.Nullable;
import java.time.Instant;
import java.util.Objects;

@NullMarked
public class Board {

    private final BoardId id;
    private final String name;
    private final @Nullable String description;
    private final @Nullable String coverColor;
    private final String visibility;
    private final UserId createdBy;
    private final boolean archived;
    private final Instant createdAt;
    private final Instant updatedAt;

    private Board(BoardId id, String name, @Nullable String description,
                  @Nullable String coverColor, String visibility, UserId createdBy,
                  boolean archived, Instant createdAt, Instant updatedAt) {
        this.id = Objects.requireNonNull(id, "id must not be null");
        this.name = Objects.requireNonNull(name, "name must not be null");
        this.description = description;
        this.coverColor = coverColor;
        this.visibility = Objects.requireNonNull(visibility, "visibility must not be null");
        this.createdBy = Objects.requireNonNull(createdBy, "createdBy must not be null");
        this.archived = archived;
        this.createdAt = Objects.requireNonNull(createdAt, "createdAt must not be null");
        this.updatedAt = Objects.requireNonNull(updatedAt, "updatedAt must not be null");
    }

    public static Board create(String name, UserId createdBy) {
        var tempId = new BoardId(java.util.UUID.randomUUID());
        var now = Instant.now();
        return new Board(tempId, name, null, null, "private", createdBy, false, now, now);
    }

    public static Board reconstitute(BoardId id, String name, @Nullable String description,
                                      @Nullable String coverColor, String visibility,
                                      UserId createdBy, boolean archived,
                                      Instant createdAt, Instant updatedAt) {
        return new Board(id, name, description, coverColor, visibility, createdBy, archived, createdAt, updatedAt);
    }

    public Board withId(BoardId newId) {
        return new Board(newId, this.name, this.description, this.coverColor,
            this.visibility, this.createdBy, this.archived, this.createdAt, this.updatedAt);
    }

    public Board update(String name, @Nullable String description, @Nullable String coverColor) {
        return new Board(this.id, name, description, coverColor, this.visibility,
            this.createdBy, this.archived, this.createdAt, Instant.now());
    }

    public Board changeVisibility(String visibility) {
        return new Board(this.id, this.name, this.description, this.coverColor,
            visibility, this.createdBy, this.archived, this.createdAt, Instant.now());
    }

    public Board archive() {
        return new Board(this.id, this.name, this.description, this.coverColor,
            this.visibility, this.createdBy, true, this.createdAt, Instant.now());
    }

    public BoardId id() { return id; }
    public String name() { return name; }
    public @Nullable String description() { return description; }
    public @Nullable String coverColor() { return coverColor; }
    public String visibility() { return visibility; }
    public UserId createdBy() { return createdBy; }
    public boolean archived() { return archived; }
    public Instant createdAt() { return createdAt; }
    public Instant updatedAt() { return updatedAt; }
}

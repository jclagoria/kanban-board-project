package com.kanban.core.domain.model;

import com.kanban.core.domain.vo.BoardId;
import com.kanban.core.domain.vo.FieldDefinitionId;
import org.jspecify.annotations.NullMarked;
import java.time.Instant;
import java.util.Objects;

@NullMarked
public class FieldDefinition {

    private final FieldDefinitionId id;
    private final BoardId boardId;
    private final String name;
    private final FieldType fieldType;
    private final String config;
    private final boolean required;
    private final int position;
    private final Instant createdAt;

    public enum FieldType {
        TEXT, NUMBER, DATE, EMAIL, CHECKBOX, URL, DROPDOWN
    }

    public FieldDefinition(FieldDefinitionId id, BoardId boardId, String name, FieldType fieldType,
                           String config, boolean required, int position, Instant createdAt) {
        this.id = Objects.requireNonNull(id, "id must not be null");
        this.boardId = Objects.requireNonNull(boardId, "boardId must not be null");
        this.name = Objects.requireNonNull(name, "name must not be null");
        this.fieldType = Objects.requireNonNull(fieldType, "fieldType must not be null");
        this.config = Objects.requireNonNull(config, "config must not be null");
        this.required = required;
        this.position = position;
        this.createdAt = Objects.requireNonNull(createdAt, "createdAt must not be null");
    }

    public FieldDefinitionId id() { return id; }
    public BoardId boardId() { return boardId; }
    public String name() { return name; }
    public FieldType fieldType() { return fieldType; }
    public String config() { return config; }
    public boolean required() { return required; }
    public int position() { return position; }
    public Instant createdAt() { return createdAt; }
}

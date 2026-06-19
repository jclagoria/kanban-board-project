package com.kanban.infrastructure.persistence.entity;

import com.fasterxml.jackson.databind.JsonNode;
import org.jspecify.annotations.NullMarked;
import org.jspecify.annotations.Nullable;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.time.Instant;
import java.util.Objects;
import java.util.UUID;

@NullMarked
@Table("field_definitions")
public record FieldDefinitionEntity(
        @Id @Nullable UUID id,
        @Column("board_id") UUID boardId,
        @Column("name") String name,
        @Column("field_type") String fieldType,
        @Column("config") JsonNode config,
        @Column("required") boolean required,
        @Column("position") int position,
        @Column("created_at") Instant createdAt
) {
    public FieldDefinitionEntity {
        Objects.requireNonNull(boardId, "boardId must not be null");
        Objects.requireNonNull(name, "name must not be null");
        Objects.requireNonNull(fieldType, "fieldType must not be null");
        Objects.requireNonNull(config, "config must not be null");
        Objects.requireNonNull(createdAt, "createdAt must not be null");
    }
}

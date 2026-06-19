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
@Table("board_templates")
public record BoardTemplateEntity(
        @Id @Nullable UUID id,
        @Column("name") String name,
        @Column("description") @Nullable String description,
        @Column("board_data") JsonNode boardData,
        @Column("category") String category,
        @Column("is_predefined") boolean isPredefined,
        @Column("created_at") Instant createdAt
) {
    public BoardTemplateEntity {
        Objects.requireNonNull(name, "name must not be null");
        Objects.requireNonNull(boardData, "boardData must not be null");
        Objects.requireNonNull(category, "category must not be null");
        Objects.requireNonNull(createdAt, "createdAt must not be null");
    }
}

package com.kanban.infrastructure.persistence.entity;

import org.jspecify.annotations.NullMarked;
import org.jspecify.annotations.Nullable;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.time.Instant;
import java.util.Objects;
import java.util.UUID;

@NullMarked
@Table("boards")
public record BoardEntity(
        @Id @Nullable UUID id,
        @Column("name") String name,
        @Column("description") @Nullable String description,
        @Column("cover_color") @Nullable String coverColor,
        @Column("visibility") String visibility,
        @Column("created_by") UUID createdBy,
        @Column("archived") boolean archived,
        @Column("created_at") Instant createdAt,
        @Column("updated_at") Instant updatedAt
) {
    public BoardEntity {
        Objects.requireNonNull(name, "name must not be null");
        Objects.requireNonNull(visibility, "visibility must not be null");
        Objects.requireNonNull(createdBy, "createdBy must not be null");
        Objects.requireNonNull(createdAt, "createdAt must not be null");
        Objects.requireNonNull(updatedAt, "updatedAt must not be null");
    }
}

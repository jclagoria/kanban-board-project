package com.kanban.core.domain.vo;

import org.jspecify.annotations.NullMarked;
import java.util.Objects;
import java.util.UUID;

@NullMarked
public record FieldDefinitionId(UUID value) {
    public FieldDefinitionId {
        Objects.requireNonNull(value, "FieldDefinitionId must not be null");
    }
}

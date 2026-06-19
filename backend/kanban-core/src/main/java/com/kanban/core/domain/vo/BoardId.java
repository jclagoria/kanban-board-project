package com.kanban.core.domain.vo;

import org.jspecify.annotations.NullMarked;
import java.util.Objects;
import java.util.UUID;

@NullMarked
public record BoardId(UUID value) {
    public BoardId {
        Objects.requireNonNull(value, "BoardId must not be null");
    }
}

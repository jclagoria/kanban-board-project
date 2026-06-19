package com.kanban.core.domain.vo;

import org.jspecify.annotations.NullMarked;
import java.util.Objects;
import java.util.UUID;

@NullMarked
public record BoardListId(UUID value) {
    public BoardListId {
        Objects.requireNonNull(value, "BoardListId must not be null");
    }
}

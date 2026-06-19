package com.kanban.core.domain.vo;

import org.jspecify.annotations.NullMarked;
import java.util.Objects;
import java.util.UUID;

@NullMarked
public record CommentId(UUID value) {
    public CommentId {
        Objects.requireNonNull(value, "CommentId must not be null");
    }
}

package com.kanban.core.domain.vo;

import org.jspecify.annotations.NullMarked;
import java.util.Objects;
import java.util.UUID;

@NullMarked
public record UserId(UUID value) {
    public UserId {
        Objects.requireNonNull(value, "UserId must not be null");
    }
}

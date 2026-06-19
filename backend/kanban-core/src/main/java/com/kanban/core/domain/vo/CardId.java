package com.kanban.core.domain.vo;

import org.jspecify.annotations.NullMarked;
import java.util.Objects;
import java.util.UUID;

@NullMarked
public record CardId(UUID value) {
    public CardId {
        Objects.requireNonNull(value, "CardId must not be null");
    }
}

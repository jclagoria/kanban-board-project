package com.kanban.interfaces.rest.dto.response;

import org.jspecify.annotations.NullMarked;
import org.jspecify.annotations.Nullable;

@NullMarked
public record ErrorCodeResponse(
    String errorCode,
    String message,
    String action,
    @Nullable Long retryAfterSeconds
) {
    public ErrorCodeResponse(String errorCode, String message, String action) {
        this(errorCode, message, action, null);
    }
}

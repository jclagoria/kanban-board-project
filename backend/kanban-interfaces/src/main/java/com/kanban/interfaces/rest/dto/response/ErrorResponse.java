package com.kanban.interfaces.rest.dto.response;

import org.jspecify.annotations.NullMarked;

import java.util.Map;

@NullMarked
public record ErrorResponse(
    String code,
    String message,
    Map<String, Object> details
) {
    public ErrorResponse(String code, String message) {
        this(code, message, Map.of());
    }
}

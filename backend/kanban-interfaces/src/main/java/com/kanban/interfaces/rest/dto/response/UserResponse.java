package com.kanban.interfaces.rest.dto.response;

import org.jspecify.annotations.NullMarked;

import java.util.UUID;

@NullMarked
public record UserResponse(
    UUID id,
    String email,
    String displayName,
    String plan,
    boolean emailVerified
) {}

package com.kanban.interfaces.rest.dto.response;

import org.jspecify.annotations.NullMarked;

@NullMarked
public record AuthResponse(
    String accessToken,
    String refreshToken,
    UserResponse user
) {}

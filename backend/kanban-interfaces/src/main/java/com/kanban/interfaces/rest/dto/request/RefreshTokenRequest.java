package com.kanban.interfaces.rest.dto.request;

import jakarta.validation.constraints.NotBlank;
import org.jspecify.annotations.NullMarked;

@NullMarked
public record RefreshTokenRequest(
    @NotBlank String refreshToken
) {}

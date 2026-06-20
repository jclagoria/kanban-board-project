package com.kanban.interfaces.rest.dto.request;

import jakarta.validation.constraints.NotBlank;
import org.jspecify.annotations.NullMarked;

@NullMarked
public record LogoutRequest(
    @NotBlank String refreshToken
) {}

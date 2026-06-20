package com.kanban.interfaces.rest.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.jspecify.annotations.NullMarked;

@NullMarked
public record ResetPasswordRequest(
    @NotBlank String token,
    @NotBlank @Size(min = 10) String newPassword
) {}

package com.kanban.interfaces.rest.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.jspecify.annotations.NullMarked;

@NullMarked
public record ChangePasswordRequest(
    @NotBlank String currentPassword,
    @NotBlank @Size(min = 10) String newPassword
) {}

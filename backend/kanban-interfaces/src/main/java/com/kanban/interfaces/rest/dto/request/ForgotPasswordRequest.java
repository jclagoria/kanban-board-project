package com.kanban.interfaces.rest.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.jspecify.annotations.NullMarked;

@NullMarked
public record ForgotPasswordRequest(
    @NotBlank @Email String email
) {}

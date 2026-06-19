package com.kanban.interfaces.rest.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.jspecify.annotations.NullMarked;

@NullMarked
public record RegisterRequest(
    @NotBlank @Email String email,
    @NotBlank String displayName,
    @NotBlank @Size(min = 10) String password
) {}

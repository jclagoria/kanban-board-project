package com.kanban.core.shared.error;

import org.jspecify.annotations.NullMarked;
import org.springframework.http.HttpStatus;

@NullMarked
public final class AuthenticationFailedException extends DomainException {
    public AuthenticationFailedException() {
        super("AUTH_FAILED", HttpStatus.UNAUTHORIZED, "Invalid email or password");
    }
}

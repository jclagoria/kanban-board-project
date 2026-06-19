package com.kanban.core.shared.error;

import org.jspecify.annotations.NullMarked;
import org.springframework.http.HttpStatus;

@NullMarked
public final class TokenInvalidException extends DomainException {
    public TokenInvalidException() {
        super("TOKEN_INVALID", HttpStatus.UNAUTHORIZED, "Token is invalid");
    }

    public TokenInvalidException(String message) {
        super("TOKEN_INVALID", HttpStatus.UNAUTHORIZED, message);
    }
}

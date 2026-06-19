package com.kanban.core.shared.error;

import org.jspecify.annotations.NullMarked;
import org.springframework.http.HttpStatus;

@NullMarked
public final class TokenRevokedException extends DomainException {
    public TokenRevokedException() {
        super("TOKEN_REVOKED", HttpStatus.UNAUTHORIZED, "Token has been revoked");
    }
}

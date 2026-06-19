package com.kanban.core.shared.error;

import org.jspecify.annotations.NullMarked;
import org.springframework.http.HttpStatus;

@NullMarked
public final class TokenExpiredException extends DomainException {
    public TokenExpiredException() {
        super("TOKEN_EXPIRED", HttpStatus.UNAUTHORIZED, "Access token has expired");
    }
}

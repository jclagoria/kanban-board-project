package com.kanban.core.shared.error;

import org.jspecify.annotations.NullMarked;
import org.springframework.http.HttpStatus;

@NullMarked
public final class TwoFactorInvalidException extends DomainException {
    public TwoFactorInvalidException() {
        super("2FA_INVALID", HttpStatus.UNAUTHORIZED, "Invalid two-factor authentication code");
    }
}

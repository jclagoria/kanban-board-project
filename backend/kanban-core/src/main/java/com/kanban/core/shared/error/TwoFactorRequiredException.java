package com.kanban.core.shared.error;

import org.jspecify.annotations.NullMarked;
import org.springframework.http.HttpStatus;

@NullMarked
public final class TwoFactorRequiredException extends DomainException {
    public TwoFactorRequiredException() {
        super("2FA_REQUIRED", HttpStatus.OK, "Two-factor authentication code required");
    }
}

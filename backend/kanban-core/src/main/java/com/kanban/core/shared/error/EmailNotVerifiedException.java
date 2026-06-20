package com.kanban.core.shared.error;

import org.jspecify.annotations.NullMarked;
import org.springframework.http.HttpStatus;

@NullMarked
public final class EmailNotVerifiedException extends DomainException {
    public EmailNotVerifiedException() {
        super("EMAIL_NOT_VERIFIED", HttpStatus.FORBIDDEN,
            "Email verification required");
    }
}

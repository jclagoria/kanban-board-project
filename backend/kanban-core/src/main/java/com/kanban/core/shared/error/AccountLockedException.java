package com.kanban.core.shared.error;

import org.jspecify.annotations.NullMarked;
import org.springframework.http.HttpStatus;
import java.time.Duration;
import java.util.Map;

@NullMarked
public final class AccountLockedException extends DomainException {
    private final Duration retryAfter;

    public AccountLockedException(Duration retryAfter) {
        super("ACCOUNT_LOCKED", HttpStatus.TOO_MANY_REQUESTS,
            "Account temporarily locked due to too many failed attempts",
            Map.of("retryAfterSeconds", retryAfter.toSeconds()));
        this.retryAfter = retryAfter;
    }

    public Duration retryAfter() { return retryAfter; }
}

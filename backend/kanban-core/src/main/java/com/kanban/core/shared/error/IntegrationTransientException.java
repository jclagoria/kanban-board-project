package com.kanban.core.shared.error;

import org.jspecify.annotations.NullMarked;

@NullMarked
public final class IntegrationTransientException extends RuntimeException {
    public IntegrationTransientException() {
        super("Temporary integration error, retryable");
    }

    public IntegrationTransientException(String message) {
        super(message);
    }

    public IntegrationTransientException(String message, Throwable cause) {
        super(message, cause);
    }
}

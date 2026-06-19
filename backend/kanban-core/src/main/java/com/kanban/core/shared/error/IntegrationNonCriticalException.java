package com.kanban.core.shared.error;

import org.jspecify.annotations.NullMarked;

@NullMarked
public class IntegrationNonCriticalException extends RuntimeException {
    private final String provider;

    public IntegrationNonCriticalException(String provider, String message, Throwable cause) {
        super(message, cause);
        this.provider = provider;
    }

    public String provider() { return provider; }
}

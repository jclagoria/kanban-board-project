package com.kanban.core.shared.error;

import org.jspecify.annotations.NullMarked;
import java.time.Duration;

@NullMarked
public final class RateLimitExceededException extends RuntimeException {
    private final Duration retryAfter;
    private final String provider;

    public RateLimitExceededException(String provider, Duration retryAfter) {
        super("Rate limit exceeded: " + provider);
        this.provider = provider;
        this.retryAfter = retryAfter;
    }

    public Duration retryAfter() { return retryAfter; }
    public String provider() { return provider; }
}

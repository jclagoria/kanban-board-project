package com.kanban.core.port.output;

import com.kanban.core.domain.vo.Email;
import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Mono;

import java.time.Duration;

@NullMarked
public interface LoginAttemptTracker {
    Mono<Long> recordFailedAttempt(Email email);
    Mono<Boolean> isLocked(Email email);
    Mono<Void> resetAttempts(Email email);
    Mono<Duration> getRemainingLockout(Email email);
}

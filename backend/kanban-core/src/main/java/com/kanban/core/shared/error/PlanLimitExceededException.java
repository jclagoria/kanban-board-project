package com.kanban.core.shared.error;

import org.jspecify.annotations.NullMarked;
import org.springframework.http.HttpStatus;
import java.util.Map;

@NullMarked
public final class PlanLimitExceededException extends DomainException {
    public PlanLimitExceededException(String limitType, int current, int max) {
        super("PLAN_LIMIT_EXCEEDED", HttpStatus.FORBIDDEN,
            "Plan limit exceeded",
            Map.of("limitType", limitType, "current", current, "max", max));
    }
}

package com.kanban.core.shared.error;

import org.jspecify.annotations.NullMarked;
import org.springframework.http.HttpStatus;
import java.util.List;
import java.util.Map;

@NullMarked
public final class FieldValidationException extends DomainException {
    private final List<FieldViolation> violations;

    public FieldValidationException(List<FieldViolation> violations) {
        super("FIELD_VALIDATION_ERROR", HttpStatus.UNPROCESSABLE_ENTITY,
            "Custom field validation failed",
            Map.of("violationCount", violations.size()));
        this.violations = violations;
    }

    public List<FieldViolation> violations() { return violations; }

    public record FieldViolation(String fieldName, String code, String message) {}
}

package com.kanban.core.shared.error;

import org.jspecify.annotations.NullMarked;
import org.springframework.http.HttpStatus;
import java.util.Map;

@NullMarked
public abstract class DomainException extends RuntimeException {

    private final String code;
    private final HttpStatus httpStatus;
    private final Map<String, Object> context;

    protected DomainException(String code, HttpStatus httpStatus, String message) {
        this(code, httpStatus, message, Map.of());
    }

    protected DomainException(String code, HttpStatus httpStatus, String message,
                              Map<String, Object> context) {
        super(message);
        this.code = code;
        this.httpStatus = httpStatus;
        this.context = Map.copyOf(context);
    }

    protected DomainException(String code, HttpStatus httpStatus, String message,
                              Throwable cause) {
        super(message, cause);
        this.code = code;
        this.httpStatus = httpStatus;
        this.context = Map.of();
    }

    public String getCode() { return code; }
    public HttpStatus getHttpStatus() { return httpStatus; }
    public Map<String, Object> getContext() { return context; }
}

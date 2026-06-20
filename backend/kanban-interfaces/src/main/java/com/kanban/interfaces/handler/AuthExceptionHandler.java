package com.kanban.interfaces.handler;

import com.kanban.core.shared.error.AccountLockedException;
import com.kanban.core.shared.error.AuthenticationFailedException;
import com.kanban.core.shared.error.EmailAlreadyRegisteredException;
import com.kanban.core.shared.error.TokenExpiredException;
import com.kanban.core.shared.error.TokenInvalidException;
import com.kanban.core.shared.error.TokenRevokedException;
import com.kanban.interfaces.rest.dto.response.ErrorCodeResponse;
import com.kanban.interfaces.rest.dto.response.ErrorResponse;
import org.jspecify.annotations.NullMarked;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import reactor.core.publisher.Mono;

import java.util.Map;

@NullMarked
@RestControllerAdvice
public class AuthExceptionHandler {

    @ExceptionHandler(AccountLockedException.class)
    public Mono<ResponseEntity<ErrorCodeResponse>> handleAccountLocked(AccountLockedException ex) {
        return Mono.just(ResponseEntity.status(HttpStatus.UNAUTHORIZED)
            .body(new ErrorCodeResponse("ACCOUNT_LOCKED", ex.getMessage(), "wait",
                ex.retryAfter().toSeconds())));
    }

    @ExceptionHandler(TokenExpiredException.class)
    public Mono<ResponseEntity<ErrorCodeResponse>> handleTokenExpired(TokenExpiredException ex) {
        return Mono.just(ResponseEntity.status(HttpStatus.UNAUTHORIZED)
            .body(new ErrorCodeResponse("TOKEN_EXPIRED", ex.getMessage(), "refresh")));
    }

    @ExceptionHandler(TokenRevokedException.class)
    public Mono<ResponseEntity<ErrorCodeResponse>> handleTokenRevoked(TokenRevokedException ex) {
        return Mono.just(ResponseEntity.status(HttpStatus.UNAUTHORIZED)
            .body(new ErrorCodeResponse("TOKEN_REVOKED", ex.getMessage(), "reauthenticate")));
    }

    @ExceptionHandler(TokenInvalidException.class)
    public Mono<ResponseEntity<ErrorCodeResponse>> handleTokenInvalid(TokenInvalidException ex) {
        return Mono.just(ResponseEntity.status(HttpStatus.UNAUTHORIZED)
            .body(new ErrorCodeResponse("TOKEN_INVALID", ex.getMessage(), "reauthenticate")));
    }

    @ExceptionHandler(AuthenticationFailedException.class)
    public Mono<ResponseEntity<ErrorCodeResponse>> handleAuthFailed(AuthenticationFailedException ex) {
        return Mono.just(ResponseEntity.status(HttpStatus.UNAUTHORIZED)
            .body(new ErrorCodeResponse("INVALID_CREDENTIALS", ex.getMessage(), "retry")));
    }

    @ExceptionHandler(EmailAlreadyRegisteredException.class)
    public Mono<ResponseEntity<ErrorResponse>> handleEmailAlreadyRegistered(EmailAlreadyRegisteredException ex) {
        return Mono.just(ResponseEntity.status(HttpStatus.CONFLICT)
            .body(new ErrorResponse(ex.getCode(), ex.getMessage())));
    }

    @ExceptionHandler(Exception.class)
    public Mono<ResponseEntity<ErrorResponse>> handleUnexpected(Exception ex) {
        return Mono.just(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(new ErrorResponse("INTERNAL_ERROR", "An unexpected error occurred",
                Map.of("detail", ex.getMessage() != null ? ex.getMessage() : ""))));
    }
}

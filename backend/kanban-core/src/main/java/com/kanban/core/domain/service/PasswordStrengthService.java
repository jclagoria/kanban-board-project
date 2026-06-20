package com.kanban.core.domain.service;

import com.kanban.core.port.output.CommonPasswordChecker;
import com.kanban.core.shared.error.FieldValidationException;
import com.kanban.core.shared.error.FieldValidationException.FieldViolation;
import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Mono;

import java.util.List;

@NullMarked
public class PasswordStrengthService {

    private static final int MIN_LENGTH = 10;
    private final CommonPasswordChecker commonPasswordChecker;

    public PasswordStrengthService(CommonPasswordChecker commonPasswordChecker) {
        this.commonPasswordChecker = commonPasswordChecker;
    }

    public Mono<Void> validate(String password) {
        if (password == null || password.length() < MIN_LENGTH) {
            return Mono.error(new FieldValidationException(List.of(
                new FieldViolation("password", "PASSWORD_TOO_SHORT",
                    "Password must be at least " + MIN_LENGTH + " characters")
            )));
        }

        return commonPasswordChecker.isCommon(password)
            .flatMap(isCommon -> {
                if (isCommon) {
                    return Mono.error(new FieldValidationException(List.of(
                        new FieldViolation("password", "PASSWORD_TOO_COMMON",
                            "This password is too common. Choose a more secure one.")
                    )));
                }
                return Mono.empty();
            });
    }
}

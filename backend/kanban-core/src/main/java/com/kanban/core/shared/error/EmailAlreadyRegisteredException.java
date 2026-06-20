package com.kanban.core.shared.error;

import com.kanban.core.domain.vo.Email;
import org.jspecify.annotations.NullMarked;
import org.springframework.http.HttpStatus;

@NullMarked
public final class EmailAlreadyRegisteredException extends DomainException {
    public EmailAlreadyRegisteredException(Email email) {
        super("EMAIL_ALREADY_REGISTERED", HttpStatus.CONFLICT,
            "This email is already registered");
    }
}

package com.kanban.core.shared.error;

import com.kanban.core.domain.vo.UserId;
import org.jspecify.annotations.NullMarked;
import org.springframework.http.HttpStatus;

@NullMarked
public final class UserNotFoundException extends DomainException {
    public UserNotFoundException(UserId userId) {
        super("USER_NOT_FOUND", HttpStatus.NOT_FOUND,
            "User not found with id: " + userId.value());
    }
}

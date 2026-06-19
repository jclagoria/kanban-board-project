package com.kanban.core.shared.error;

import org.jspecify.annotations.NullMarked;
import org.springframework.http.HttpStatus;

@NullMarked
public final class InvalidCardMoveException extends DomainException {
    public InvalidCardMoveException(String reason) {
        super("INVALID_CARD_MOVE", HttpStatus.UNPROCESSABLE_ENTITY, reason);
    }
}

package com.kanban.core.shared.error;

import com.kanban.core.domain.vo.CardId;
import org.jspecify.annotations.NullMarked;
import org.springframework.http.HttpStatus;
import java.util.Map;

@NullMarked
public final class CardNotFoundException extends DomainException {
    public CardNotFoundException(CardId id) {
        super("CARD_NOT_FOUND", HttpStatus.NOT_FOUND, "Card not found",
            Map.of("cardId", id.value()));
    }
}

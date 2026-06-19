package com.kanban.core.domain.service;

import com.kanban.core.domain.model.Card;
import com.kanban.core.domain.vo.BoardListId;
import com.kanban.core.domain.vo.Position;
import org.jspecify.annotations.NullMarked;

@NullMarked
public class CardMoveService {

    public Card moveCard(Card card, BoardListId targetList, Position newPosition) {
        return card.moveTo(targetList, newPosition);
    }
}

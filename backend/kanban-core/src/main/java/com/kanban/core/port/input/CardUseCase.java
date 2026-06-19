package com.kanban.core.port.input;

import com.kanban.core.domain.model.Card;
import com.kanban.core.domain.vo.*;
import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@NullMarked
public interface CardUseCase {
    Mono<Card> createCard(BoardListId listId, String title, UserId createdBy);
    Mono<Card> getCard(CardId id);
    Flux<Card> getBoardCards(BoardId boardId);
    Mono<Card> moveCard(CardId id, BoardListId targetList, Position newPosition, UserId movedBy);
    Mono<Card> updateCard(CardId id, String title, String description,
                          java.time.Instant dueDate, java.time.Instant startDate, UserId updatedBy);
    Mono<Void> archiveCard(CardId id, UserId archivedBy);
    Mono<Card> addComment(CardId id, String body, UserId authorId);
}

package com.kanban.core.port.output;

import com.kanban.core.domain.model.Card;
import com.kanban.core.domain.vo.BoardId;
import com.kanban.core.domain.vo.BoardListId;
import com.kanban.core.domain.vo.CardId;
import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@NullMarked
public interface CardRepository {
    Mono<Card> findById(CardId id);
    Flux<Card> findByListId(BoardListId listId);
    Flux<Card> findByBoardId(BoardId boardId);
    Mono<Card> insert(Card card);
    Mono<Card> update(Card card);
    Mono<Void> delete(CardId id);
    Mono<Void> archive(CardId id);
}

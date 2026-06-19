package com.kanban.core.port.input;

import com.kanban.core.domain.model.BoardList;
import com.kanban.core.domain.vo.BoardId;
import com.kanban.core.domain.vo.BoardListId;
import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@NullMarked
public interface ListUseCase {
    Mono<BoardList> createList(BoardId boardId, String name, double position);
    Mono<BoardList> getList(BoardListId id);
    Flux<BoardList> getBoardLists(BoardId boardId);
    Mono<BoardList> updateList(BoardListId id, String name);
    Mono<BoardList> reorderList(BoardListId id, double newPosition);
    Mono<Void> archiveList(BoardListId id);
}

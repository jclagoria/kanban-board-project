package com.kanban.core.port.output;

import com.kanban.core.domain.model.BoardList;
import com.kanban.core.domain.vo.BoardId;
import com.kanban.core.domain.vo.BoardListId;
import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@NullMarked
public interface BoardListRepository {
    Mono<BoardList> findById(BoardListId id);
    Flux<BoardList> findByBoardId(BoardId boardId);
    Mono<BoardList> insert(BoardList list);
    Mono<BoardList> update(BoardList list);
    Mono<Void> archive(BoardListId id);
}

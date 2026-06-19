package com.kanban.core.port.output;

import com.kanban.core.domain.model.Board;
import com.kanban.core.domain.vo.BoardId;
import com.kanban.core.domain.vo.UserId;
import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@NullMarked
public interface BoardRepository {
    Mono<Board> findById(BoardId id);
    Flux<Board> findByUserId(UserId userId);
    Mono<Board> insert(Board board);
    Mono<Board> update(Board board);
    Mono<Void> archive(BoardId id);
    Mono<Void> delete(BoardId id);
}

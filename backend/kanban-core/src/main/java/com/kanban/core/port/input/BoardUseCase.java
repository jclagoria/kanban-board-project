package com.kanban.core.port.input;

import com.kanban.core.domain.model.Board;
import com.kanban.core.domain.vo.BoardId;
import com.kanban.core.domain.vo.UserId;
import org.jspecify.annotations.NullMarked;
import org.jspecify.annotations.Nullable;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@NullMarked
public interface BoardUseCase {
    Mono<Board> createBoard(String name, @Nullable String description, UserId createdBy);
    Mono<Board> getBoard(BoardId id, UserId userId);
    Flux<Board> getUserBoards(UserId userId);
    Mono<Board> updateBoard(BoardId id, String name, @Nullable String description, @Nullable String coverColor, UserId userId);
    Mono<Void> archiveBoard(BoardId id, UserId userId);
    Mono<Void> addMember(BoardId boardId, UserId memberId, UserId addedBy);
    Mono<Void> removeMember(BoardId boardId, UserId memberId, UserId removedBy);
}

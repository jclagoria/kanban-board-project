package com.kanban.core.shared.error;

import com.kanban.core.domain.vo.BoardId;
import org.jspecify.annotations.NullMarked;
import org.springframework.http.HttpStatus;
import java.util.Map;

@NullMarked
public final class BoardNotFoundException extends DomainException {
    public BoardNotFoundException(BoardId id) {
        super("BOARD_NOT_FOUND", HttpStatus.NOT_FOUND, "Board not found",
            Map.of("boardId", id.value()));
    }
}

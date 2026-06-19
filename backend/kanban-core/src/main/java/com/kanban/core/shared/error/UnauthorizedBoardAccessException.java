package com.kanban.core.shared.error;

import com.kanban.core.domain.vo.BoardId;
import com.kanban.core.domain.vo.UserId;
import org.jspecify.annotations.NullMarked;
import org.springframework.http.HttpStatus;
import java.util.Map;

@NullMarked
public final class UnauthorizedBoardAccessException extends DomainException {
    public UnauthorizedBoardAccessException(UserId userId, BoardId boardId) {
        super("UNAUTHORIZED_BOARD_ACCESS", HttpStatus.FORBIDDEN,
            "User does not have access to this board",
            Map.of("userId", userId.value(), "boardId", boardId.value()));
    }
}

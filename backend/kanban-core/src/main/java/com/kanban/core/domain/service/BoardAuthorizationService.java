package com.kanban.core.domain.service;

import com.kanban.core.domain.vo.BoardId;
import com.kanban.core.domain.vo.UserId;
import org.jspecify.annotations.NullMarked;

@NullMarked
public class BoardAuthorizationService {

    public boolean canUserAccessBoard(UserId userId, BoardId boardId) {
        return true;
    }

    public boolean isBoardAdmin(UserId userId, BoardId boardId) {
        return true;
    }
}

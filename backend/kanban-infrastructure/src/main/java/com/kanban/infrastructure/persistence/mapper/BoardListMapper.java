package com.kanban.infrastructure.persistence.mapper;

import com.kanban.core.domain.model.BoardList;
import com.kanban.core.domain.vo.BoardId;
import com.kanban.core.domain.vo.BoardListId;
import com.kanban.infrastructure.persistence.entity.BoardListEntity;
import org.jspecify.annotations.NullMarked;
import org.springframework.stereotype.Component;

@Component
@NullMarked
public class BoardListMapper {

    public BoardListEntity toInsertEntity(BoardList domain) {
        return new BoardListEntity(
            null,
            domain.boardId().value(),
            domain.name(),
            domain.position(),
            domain.archived(),
            domain.createdAt(),
            domain.updatedAt()
        );
    }

    public BoardListEntity toUpdateEntity(BoardList domain) {
        return new BoardListEntity(
            domain.id().value(),
            domain.boardId().value(),
            domain.name(),
            domain.position(),
            domain.archived(),
            domain.createdAt(),
            domain.updatedAt()
        );
    }

    public BoardList toDomain(BoardListEntity entity) {
        return BoardList.reconstitute(
            new BoardListId(entity.id()),
            new BoardId(entity.boardId()),
            entity.name(),
            entity.position(),
            entity.archived(),
            entity.createdAt(),
            entity.updatedAt()
        );
    }

    public BoardList assignGeneratedId(BoardList domain, BoardListEntity savedEntity) {
        return domain.withId(new BoardListId(savedEntity.id()));
    }
}

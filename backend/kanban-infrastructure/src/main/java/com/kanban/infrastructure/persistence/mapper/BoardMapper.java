package com.kanban.infrastructure.persistence.mapper;

import com.kanban.core.domain.model.Board;
import com.kanban.core.domain.vo.BoardId;
import com.kanban.core.domain.vo.UserId;
import com.kanban.infrastructure.persistence.entity.BoardEntity;
import org.jspecify.annotations.NullMarked;
import org.springframework.stereotype.Component;

@Component
@NullMarked
public class BoardMapper {

    public BoardEntity toInsertEntity(Board domain) {
        return new BoardEntity(
            null,
            domain.name(),
            domain.description(),
            domain.coverColor(),
            domain.visibility(),
            domain.createdBy().value(),
            domain.archived(),
            domain.createdAt(),
            domain.updatedAt()
        );
    }

    public BoardEntity toUpdateEntity(Board domain) {
        return new BoardEntity(
            domain.id().value(),
            domain.name(),
            domain.description(),
            domain.coverColor(),
            domain.visibility(),
            domain.createdBy().value(),
            domain.archived(),
            domain.createdAt(),
            domain.updatedAt()
        );
    }

    public Board toDomain(BoardEntity entity) {
        return Board.reconstitute(
            new BoardId(entity.id()),
            entity.name(),
            entity.description(),
            entity.coverColor(),
            entity.visibility(),
            new UserId(entity.createdBy()),
            entity.archived(),
            entity.createdAt(),
            entity.updatedAt()
        );
    }

    public Board assignGeneratedId(Board domain, BoardEntity savedEntity) {
        return domain.withId(new BoardId(savedEntity.id()));
    }
}

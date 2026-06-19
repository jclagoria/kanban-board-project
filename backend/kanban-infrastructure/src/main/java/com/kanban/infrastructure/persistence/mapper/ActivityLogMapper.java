package com.kanban.infrastructure.persistence.mapper;

import com.kanban.core.domain.model.ActivityLogEntry;
import com.kanban.core.domain.vo.BoardId;
import com.kanban.core.domain.vo.UserId;
import com.kanban.infrastructure.persistence.entity.ActivityLogEntity;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.jspecify.annotations.NullMarked;
import org.jspecify.annotations.Nullable;
import org.springframework.stereotype.Component;
import java.util.UUID;

@Component
@NullMarked
public class ActivityLogMapper {

    private final ObjectMapper objectMapper;

    public ActivityLogMapper(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public ActivityLogEntity toInsertEntity(ActivityLogEntry domain) {
        return new ActivityLogEntity(
            null,
            domain.boardId().value(),
            domain.userId().value(),
            domain.action(),
            domain.entityType(),
            domain.entityId(),
            domain.data() != null ? objectMapper.valueToTree(domain.data()) : null,
            domain.createdAt()
        );
    }

    public ActivityLogEntry toDomain(ActivityLogEntity entity) {
        return new ActivityLogEntry(
            entity.id(),
            new BoardId(entity.boardId()),
            new UserId(entity.userId()),
            entity.action(),
            entity.entityType(),
            entity.entityId(),
            entity.data() != null ? entity.data().toString() : null,
            entity.createdAt()
        );
    }
}

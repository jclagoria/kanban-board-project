package com.kanban.infrastructure.persistence.mapper;

import com.kanban.core.domain.model.FieldDefinition;
import com.kanban.core.domain.vo.BoardId;
import com.kanban.core.domain.vo.FieldDefinitionId;
import com.kanban.infrastructure.persistence.entity.FieldDefinitionEntity;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.jspecify.annotations.NullMarked;
import org.springframework.stereotype.Component;

@Component
@NullMarked
public class FieldDefinitionMapper {

    private final ObjectMapper objectMapper;

    public FieldDefinitionMapper(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public FieldDefinitionEntity toInsertEntity(FieldDefinition domain) {
        return new FieldDefinitionEntity(
            null,
            domain.boardId().value(),
            domain.name(),
            domain.fieldType().name().toLowerCase(),
            objectMapper.valueToTree(domain.config()),
            domain.required(),
            domain.position(),
            domain.createdAt()
        );
    }

    public FieldDefinitionEntity toUpdateEntity(FieldDefinition domain) {
        return new FieldDefinitionEntity(
            domain.id().value(),
            domain.boardId().value(),
            domain.name(),
            domain.fieldType().name().toLowerCase(),
            objectMapper.valueToTree(domain.config()),
            domain.required(),
            domain.position(),
            domain.createdAt()
        );
    }

    public FieldDefinition toDomain(FieldDefinitionEntity entity) {
        return new FieldDefinition(
            new FieldDefinitionId(entity.id()),
            new BoardId(entity.boardId()),
            entity.name(),
            FieldDefinition.FieldType.valueOf(entity.fieldType().toUpperCase()),
            entity.config().toString(),
            entity.required(),
            entity.position(),
            entity.createdAt()
        );
    }
}

package com.kanban.infrastructure.persistence.mapper;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kanban.core.domain.model.Card;
import com.kanban.core.domain.model.CardComment;
import com.kanban.core.domain.model.CardLabel;
import com.kanban.core.domain.model.CardChecklistItem;
import com.kanban.core.domain.model.CustomFieldValue;
import com.kanban.core.domain.model.FieldDefinition;
import com.kanban.core.domain.vo.BoardListId;
import com.kanban.core.domain.vo.CardId;
import com.kanban.core.domain.vo.CommentId;
import com.kanban.core.domain.vo.FieldDefinitionId;
import com.kanban.core.domain.vo.Position;
import com.kanban.core.domain.vo.UserId;
import com.kanban.infrastructure.persistence.entity.CardCommentEntity;
import com.kanban.infrastructure.persistence.entity.CardCustomFieldEntity;
import com.kanban.infrastructure.persistence.entity.CardEntity;
import org.jspecify.annotations.NullMarked;
import org.springframework.stereotype.Component;
import java.time.Instant;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Component
@NullMarked
public class CardMapper {

    private final ObjectMapper objectMapper;

    public CardMapper(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public CardEntity toInsertEntity(Card domain) {
        return new CardEntity(
            null,
            domain.listId().value(),
            domain.title(),
            domain.description(),
            domain.position().value(),
            domain.dueDate(),
            domain.startDate(),
            domain.coverColor(),
            domain.isArchived(),
            domain.createdBy().value(),
            domain.createdAt(),
            domain.updatedAt()
        );
    }

    public CardEntity toUpdateEntity(Card domain) {
        return new CardEntity(
            domain.id().value(),
            domain.listId().value(),
            domain.title(),
            domain.description(),
            domain.position().value(),
            domain.dueDate(),
            domain.startDate(),
            domain.coverColor(),
            domain.isArchived(),
            domain.createdBy().value(),
            domain.createdAt(),
            domain.updatedAt()
        );
    }

    public Card toDomain(CardEntity entity) {
        return Card.reconstitute(
            new CardId(entity.id()),
            new BoardListId(entity.listId()),
            entity.title(),
            Position.of(entity.position()),
            entity.description(),
            entity.dueDate(),
            entity.startDate(),
            entity.coverColor(),
            entity.archived(),
            new UserId(entity.createdBy()),
            List.of(),
            List.of(),
            List.of(),
            Map.of(),
            entity.createdAt(),
            entity.updatedAt()
        );
    }

    public Card toDomain(CardEntity entity,
                         List<CardCommentEntity> comments,
                         List<CardCustomFieldEntity> customFields,
                         Map<UUID, FieldDefinition> fieldDefinitions) {
        var commentList = comments.stream()
            .map(c -> new CardComment(
                new CommentId(c.id()),
                new UserId(c.authorId()),
                c.body(),
                c.createdAt()
            ))
            .toList();

        var customFieldMap = new HashMap<FieldDefinitionId, CustomFieldValue>();
        for (var cf : customFields) {
            var fieldDefId = new FieldDefinitionId(cf.fieldDefinitionId());
            var fieldDef = fieldDefinitions.get(cf.fieldDefinitionId());
            Object parsedValue = null;
            if (fieldDef != null) {
                parsedValue = parseValue(fieldDef.fieldType(), cf.value());
            }
            customFieldMap.put(fieldDefId, new CustomFieldValue(fieldDefId, parsedValue));
        }

        return Card.reconstitute(
            new CardId(entity.id()),
            new BoardListId(entity.listId()),
            entity.title(),
            Position.of(entity.position()),
            entity.description(),
            entity.dueDate(),
            entity.startDate(),
            entity.coverColor(),
            entity.archived(),
            new UserId(entity.createdBy()),
            commentList,
            List.<CardLabel>of(),
            List.<CardChecklistItem>of(),
            Map.copyOf(customFieldMap),
            entity.createdAt(),
            entity.updatedAt()
        );
    }

    public List<CardCommentEntity> toCommentEntities(Card domain) {
        return domain.comments().stream()
            .map(c -> new CardCommentEntity(
                null,
                domain.id().value(),
                c.authorId().value(),
                c.body(),
                c.createdAt(),
                c.createdAt()
            ))
            .toList();
    }

    public List<CardCustomFieldEntity> toCustomFieldEntities(Card domain) {
        return domain.customFields().entrySet().stream()
            .map(entry -> new CardCustomFieldEntity(
                null,
                domain.id().value(),
                entry.getKey().value(),
                objectMapper.valueToTree(entry.getValue().value())
            ))
            .toList();
    }

    public Card assignGeneratedId(Card domain, CardEntity savedEntity) {
        return domain.withId(new CardId(savedEntity.id()));
    }

    Object parseValue(FieldDefinition.FieldType type, JsonNode node) {
        if (node == null || node.isNull()) {
            return null;
        }
        return switch (type) {
            case TEXT, EMAIL, URL, DROPDOWN -> node.asText();
            case NUMBER -> node.asDouble();
            case DATE -> Instant.parse(node.asText());
            case CHECKBOX -> node.asBoolean();
        };
    }
}

package com.kanban.infrastructure.persistence.entity;

import com.fasterxml.jackson.databind.JsonNode;
import org.jspecify.annotations.NullMarked;
import org.jspecify.annotations.Nullable;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.util.Objects;
import java.util.UUID;

@NullMarked
@Table("card_custom_fields")
public record CardCustomFieldEntity(
        @Id @Nullable UUID id,
        @Column("card_id") UUID cardId,
        @Column("field_definition_id") UUID fieldDefinitionId,
        @Column("value") JsonNode value
) {
    public CardCustomFieldEntity {
        Objects.requireNonNull(cardId, "cardId must not be null");
        Objects.requireNonNull(fieldDefinitionId, "fieldDefinitionId must not be null");
        Objects.requireNonNull(value, "value must not be null");
    }
}

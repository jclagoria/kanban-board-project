package com.kanban.core.domain.model;

import com.kanban.core.domain.vo.FieldDefinitionId;
import org.jspecify.annotations.NullMarked;
import org.jspecify.annotations.Nullable;
import java.util.Objects;

@NullMarked
public record CustomFieldValue(
    FieldDefinitionId fieldDefinitionId,
    @Nullable Object value
) {
    public CustomFieldValue {
        Objects.requireNonNull(fieldDefinitionId, "fieldDefinitionId must not be null");
    }
}

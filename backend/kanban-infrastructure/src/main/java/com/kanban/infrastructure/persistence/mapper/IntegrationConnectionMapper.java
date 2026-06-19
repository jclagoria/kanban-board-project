package com.kanban.infrastructure.persistence.mapper;

import com.kanban.core.domain.model.IntegrationConnection;
import com.kanban.core.domain.vo.UserId;
import com.kanban.infrastructure.persistence.entity.IntegrationConnectionEntity;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.jspecify.annotations.NullMarked;
import org.springframework.stereotype.Component;

@Component
@NullMarked
public class IntegrationConnectionMapper {

    private final ObjectMapper objectMapper;

    public IntegrationConnectionMapper(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public IntegrationConnectionEntity toInsertEntity(IntegrationConnection domain) {
        return new IntegrationConnectionEntity(
            null,
            domain.userId().value(),
            domain.provider(),
            domain.accessToken(),
            domain.refreshToken(),
            domain.tokenExpiresAt(),
            domain.providerUserId(),
            domain.providerMetadata() != null ? objectMapper.valueToTree(domain.providerMetadata()) : null,
            domain.createdAt(),
            domain.updatedAt()
        );
    }

    public IntegrationConnectionEntity toUpdateEntity(IntegrationConnection domain) {
        return new IntegrationConnectionEntity(
            domain.id(),
            domain.userId().value(),
            domain.provider(),
            domain.accessToken(),
            domain.refreshToken(),
            domain.tokenExpiresAt(),
            domain.providerUserId(),
            domain.providerMetadata() != null ? objectMapper.valueToTree(domain.providerMetadata()) : null,
            domain.createdAt(),
            domain.updatedAt()
        );
    }

    public IntegrationConnection toDomain(IntegrationConnectionEntity entity) {
        return new IntegrationConnection(
            entity.id(),
            new UserId(entity.userId()),
            entity.provider(),
            entity.accessToken(),
            entity.refreshToken(),
            entity.tokenExpiresAt(),
            entity.providerUserId(),
            entity.providerMetadata() != null ? entity.providerMetadata().toString() : null,
            entity.createdAt(),
            entity.updatedAt()
        );
    }
}

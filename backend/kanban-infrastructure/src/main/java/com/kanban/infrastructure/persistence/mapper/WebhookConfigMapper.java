package com.kanban.infrastructure.persistence.mapper;

import com.kanban.core.domain.model.WebhookConfig;
import com.kanban.core.domain.vo.BoardId;
import com.kanban.infrastructure.persistence.entity.WebhookConfigEntity;
import org.jspecify.annotations.NullMarked;
import org.springframework.stereotype.Component;
import java.util.Arrays;
import java.util.UUID;

@Component
@NullMarked
public class WebhookConfigMapper {

    public WebhookConfigEntity toInsertEntity(WebhookConfig domain) {
        return new WebhookConfigEntity(
            null,
            domain.boardId().value(),
            domain.url(),
            domain.events().toArray(String[]::new),
            domain.secret(),
            domain.enabled(),
            domain.createdAt()
        );
    }

    public WebhookConfigEntity toUpdateEntity(WebhookConfig domain) {
        return new WebhookConfigEntity(
            domain.id(),
            domain.boardId().value(),
            domain.url(),
            domain.events().toArray(String[]::new),
            domain.secret(),
            domain.enabled(),
            domain.createdAt()
        );
    }

    public WebhookConfig toDomain(WebhookConfigEntity entity) {
        return new WebhookConfig(
            entity.id(),
            new BoardId(entity.boardId()),
            entity.url(),
            Arrays.asList(entity.events()),
            entity.secret(),
            entity.enabled(),
            entity.createdAt()
        );
    }
}

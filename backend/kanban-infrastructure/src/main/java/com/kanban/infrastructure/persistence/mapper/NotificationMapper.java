package com.kanban.infrastructure.persistence.mapper;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kanban.core.domain.model.Notification;
import com.kanban.core.domain.vo.UserId;
import com.kanban.infrastructure.persistence.entity.NotificationEntity;
import org.jspecify.annotations.NullMarked;
import org.springframework.stereotype.Component;

@Component
@NullMarked
public class NotificationMapper {

    private final ObjectMapper objectMapper;

    public NotificationMapper(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public NotificationEntity toInsertEntity(Notification domain) {
        try {
            var dataNode = domain.data() != null
                ? objectMapper.readTree(domain.data())
                : null;
            return new NotificationEntity(
                null,
                domain.userId().value(),
                domain.type().name(),
                domain.title(),
                domain.body(),
                dataNode,
                domain.read(),
                domain.emailSent(),
                domain.createdAt()
            );
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Failed to parse notification data JSON", e);
        }
    }

    public Notification toDomain(NotificationEntity entity) {
        var dataStr = entity.data() != null ? entity.data().toString() : null;
        return Notification.reconstitute(
            entity.id(),
            new UserId(entity.userId()),
            Notification.NotificationType.valueOf(entity.type()),
            entity.title(),
            entity.body(),
            dataStr,
            entity.read(),
            entity.emailSent(),
            entity.createdAt()
        );
    }
}

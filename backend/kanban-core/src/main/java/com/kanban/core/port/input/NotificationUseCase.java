package com.kanban.core.port.input;

import com.kanban.core.domain.model.Notification;
import com.kanban.core.domain.vo.UserId;
import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@NullMarked
public interface NotificationUseCase {
    Flux<Notification> getUnreadNotifications(UserId userId);
    Mono<Void> markAsRead(java.util.UUID notificationId);
    Mono<Void> markAllAsRead(UserId userId);
}

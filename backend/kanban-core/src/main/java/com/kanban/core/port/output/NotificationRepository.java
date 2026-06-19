package com.kanban.core.port.output;

import com.kanban.core.domain.model.Notification;
import com.kanban.core.domain.vo.UserId;
import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@NullMarked
public interface NotificationRepository {
    Flux<Notification> findUnreadByUserId(UserId userId);
    Mono<Void> markRead(java.util.UUID notificationId);
    Mono<Void> markAllRead(UserId userId);
    Mono<Notification> insert(Notification notification);
    Mono<Void> deleteOld(java.time.Instant olderThan);
}

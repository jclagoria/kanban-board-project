package com.kanban.infrastructure.persistence.r2dbc;

import com.kanban.core.domain.model.Notification;
import com.kanban.core.domain.vo.UserId;
import com.kanban.core.port.output.NotificationRepository;
import com.kanban.infrastructure.persistence.entity.NotificationEntity;
import com.kanban.infrastructure.persistence.mapper.NotificationMapper;
import org.jspecify.annotations.NullMarked;
import org.springframework.data.domain.Sort;
import org.springframework.data.r2dbc.core.R2dbcEntityTemplate;
import org.springframework.data.relational.core.query.Query;
import org.springframework.data.relational.core.query.Update;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import java.time.Instant;
import java.util.UUID;
import static org.springframework.data.relational.core.query.Criteria.where;

@NullMarked
@Repository
public class R2dbcNotificationRepository implements NotificationRepository {

    private final R2dbcEntityTemplate template;
    private final NotificationMapper mapper;

    public R2dbcNotificationRepository(R2dbcEntityTemplate template, NotificationMapper mapper) {
        this.template = template;
        this.mapper = mapper;
    }

    @Override
    public Flux<Notification> findUnreadByUserId(UserId userId) {
        return template.select(NotificationEntity.class)
                .matching(Query.query(where("user_id").is(userId.value()).and("read").is(false))
                        .sort(Sort.by(Sort.Direction.DESC, "created_at")))
                .all()
                .map(mapper::toDomain);
    }

    @Override
    public Mono<Void> markRead(UUID notificationId) {
        return template.update(NotificationEntity.class)
                .matching(Query.query(where("id").is(notificationId)))
                .apply(Update.update("read", true))
                .then();
    }

    @Override
    public Mono<Void> markAllRead(UserId userId) {
        return template.update(NotificationEntity.class)
                .matching(Query.query(where("user_id").is(userId.value()).and("read").is(false)))
                .apply(Update.update("read", true))
                .then();
    }

    @Override
    public Mono<Notification> insert(Notification notification) {
        return template.insert(NotificationEntity.class)
                .using(mapper.toInsertEntity(notification))
                .map(mapper::toDomain);
    }

    @Override
    public Mono<Void> deleteOld(Instant olderThan) {
        return template.delete(NotificationEntity.class)
                .matching(Query.query(where("created_at").lessThan(olderThan)))
                .all()
                .then();
    }
}

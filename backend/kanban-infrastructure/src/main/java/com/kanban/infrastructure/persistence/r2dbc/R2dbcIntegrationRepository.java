package com.kanban.infrastructure.persistence.r2dbc;

import com.kanban.core.domain.model.IntegrationConnection;
import com.kanban.core.domain.vo.UserId;
import com.kanban.core.port.output.IntegrationRepository;
import com.kanban.infrastructure.persistence.entity.IntegrationConnectionEntity;
import com.kanban.infrastructure.persistence.mapper.IntegrationConnectionMapper;
import org.jspecify.annotations.NullMarked;
import org.springframework.data.r2dbc.core.R2dbcEntityTemplate;
import org.springframework.data.relational.core.query.Query;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import java.util.UUID;
import static org.springframework.data.relational.core.query.Criteria.where;

@NullMarked
@Repository
public class R2dbcIntegrationRepository implements IntegrationRepository {

    private final R2dbcEntityTemplate template;
    private final IntegrationConnectionMapper mapper;

    public R2dbcIntegrationRepository(R2dbcEntityTemplate template, IntegrationConnectionMapper mapper) {
        this.template = template;
        this.mapper = mapper;
    }

    @Override
    public Mono<IntegrationConnection> findByUserIdAndProvider(UserId userId, String provider) {
        return template.select(IntegrationConnectionEntity.class)
                .matching(Query.query(
                        where("user_id").is(userId.value()).and("provider").is(provider)))
                .one()
                .map(mapper::toDomain);
    }

    @Override
    public Flux<IntegrationConnection> findByUserId(UserId userId) {
        return template.select(IntegrationConnectionEntity.class)
                .matching(Query.query(where("user_id").is(userId.value())))
                .all()
                .map(mapper::toDomain);
    }

    @Override
    public Mono<IntegrationConnection> upsert(IntegrationConnection connection) {
        return findByUserIdAndProvider(connection.userId(), connection.provider())
                .flatMap(existing -> {
                    var entity = mapper.toUpdateEntity(connection);
                    return template.update(entity)
                            .thenReturn(connection);
                })
                .switchIfEmpty(Mono.defer(() ->
                        template.insert(IntegrationConnectionEntity.class)
                                .using(mapper.toInsertEntity(connection))
                                .thenReturn(connection)));
    }

    @Override
    public Mono<Void> delete(UUID id) {
        return template.delete(IntegrationConnectionEntity.class)
                .matching(Query.query(where("id").is(id)))
                .all()
                .then();
    }
}

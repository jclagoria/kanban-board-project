package com.kanban.infrastructure.persistence.r2dbc;

import com.kanban.core.domain.model.WebhookConfig;
import com.kanban.core.domain.vo.BoardId;
import com.kanban.core.port.output.WebhookConfigRepository;
import com.kanban.infrastructure.persistence.entity.WebhookConfigEntity;
import com.kanban.infrastructure.persistence.mapper.WebhookConfigMapper;
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
public class R2dbcWebhookConfigRepository implements WebhookConfigRepository {

    private final R2dbcEntityTemplate template;
    private final WebhookConfigMapper mapper;

    public R2dbcWebhookConfigRepository(R2dbcEntityTemplate template, WebhookConfigMapper mapper) {
        this.template = template;
        this.mapper = mapper;
    }

    @Override
    public Flux<WebhookConfig> findByBoardId(BoardId boardId) {
        return template.select(WebhookConfigEntity.class)
                .matching(Query.query(where("board_id").is(boardId.value())))
                .all()
                .map(mapper::toDomain);
    }

    @Override
    public Mono<WebhookConfig> insert(WebhookConfig config) {
        return template.insert(WebhookConfigEntity.class)
                .using(mapper.toInsertEntity(config))
                .map(mapper::toDomain);
    }

    @Override
    public Mono<WebhookConfig> update(WebhookConfig config) {
        return template.update(mapper.toUpdateEntity(config))
                .thenReturn(config);
    }

    @Override
    public Mono<Void> delete(UUID id) {
        return template.delete(WebhookConfigEntity.class)
                .matching(Query.query(where("id").is(id)))
                .all()
                .then();
    }
}

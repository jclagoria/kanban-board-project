package com.kanban.infrastructure.persistence.r2dbc;

import com.kanban.core.domain.model.ActivityLogEntry;
import com.kanban.core.domain.vo.BoardId;
import com.kanban.core.port.output.ActivityLogRepository;
import com.kanban.infrastructure.persistence.entity.ActivityLogEntity;
import com.kanban.infrastructure.persistence.mapper.ActivityLogMapper;
import org.jspecify.annotations.NullMarked;
import org.springframework.data.r2dbc.core.R2dbcEntityTemplate;
import org.springframework.data.relational.core.query.Query;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import java.time.Instant;
import static org.springframework.data.relational.core.query.Criteria.where;

@NullMarked
@Repository
public class R2dbcActivityLogRepository implements ActivityLogRepository {

    private final R2dbcEntityTemplate template;
    private final ActivityLogMapper mapper;

    public R2dbcActivityLogRepository(R2dbcEntityTemplate template, ActivityLogMapper mapper) {
        this.template = template;
        this.mapper = mapper;
    }

    @Override
    public Flux<ActivityLogEntry> findByBoardId(BoardId boardId) {
        return template.select(ActivityLogEntity.class)
                .matching(Query.query(where("board_id").is(boardId.value())))
                .all()
                .map(mapper::toDomain);
    }

    @Override
    public Mono<ActivityLogEntry> insert(ActivityLogEntry entry) {
        return template.insert(ActivityLogEntity.class)
                .using(mapper.toInsertEntity(entry))
                .map(mapper::toDomain);
    }

    @Override
    public Mono<Void> deleteOlderThan(Instant olderThan) {
        return template.delete(ActivityLogEntity.class)
                .matching(Query.query(where("created_at").lessThan(olderThan)))
                .all()
                .then();
    }
}

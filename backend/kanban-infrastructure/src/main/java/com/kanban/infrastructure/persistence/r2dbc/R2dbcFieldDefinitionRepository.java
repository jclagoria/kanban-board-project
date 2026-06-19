package com.kanban.infrastructure.persistence.r2dbc;

import com.kanban.core.domain.model.FieldDefinition;
import com.kanban.core.domain.vo.BoardId;
import com.kanban.core.domain.vo.FieldDefinitionId;
import com.kanban.core.port.output.FieldDefinitionRepository;
import com.kanban.infrastructure.persistence.entity.FieldDefinitionEntity;
import com.kanban.infrastructure.persistence.mapper.FieldDefinitionMapper;
import org.jspecify.annotations.NullMarked;
import org.springframework.data.r2dbc.core.R2dbcEntityTemplate;
import org.springframework.data.relational.core.query.Query;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import static org.springframework.data.relational.core.query.Criteria.where;

@NullMarked
@Repository
public class R2dbcFieldDefinitionRepository implements FieldDefinitionRepository {

    private final R2dbcEntityTemplate template;
    private final FieldDefinitionMapper mapper;

    public R2dbcFieldDefinitionRepository(R2dbcEntityTemplate template, FieldDefinitionMapper mapper) {
        this.template = template;
        this.mapper = mapper;
    }

    @Override
    public Flux<FieldDefinition> findByBoardId(BoardId boardId) {
        return template.select(FieldDefinitionEntity.class)
                .matching(Query.query(where("board_id").is(boardId.value())))
                .all()
                .map(mapper::toDomain);
    }

    @Override
    public Mono<FieldDefinition> findById(FieldDefinitionId id) {
        return template.select(FieldDefinitionEntity.class)
                .matching(Query.query(where("id").is(id.value())))
                .one()
                .map(mapper::toDomain);
    }

    @Override
    public Mono<FieldDefinition> insert(FieldDefinition fieldDefinition) {
        return template.insert(FieldDefinitionEntity.class)
                .using(mapper.toInsertEntity(fieldDefinition))
                .map(mapper::toDomain);
    }

    @Override
    public Mono<FieldDefinition> update(FieldDefinition fieldDefinition) {
        return template.update(mapper.toUpdateEntity(fieldDefinition))
                .thenReturn(fieldDefinition);
    }

    @Override
    public Mono<Void> delete(FieldDefinitionId id) {
        return template.delete(FieldDefinitionEntity.class)
                .matching(Query.query(where("id").is(id.value())))
                .all()
                .then();
    }
}

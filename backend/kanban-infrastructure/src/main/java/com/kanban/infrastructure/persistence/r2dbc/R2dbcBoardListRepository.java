package com.kanban.infrastructure.persistence.r2dbc;

import com.kanban.core.domain.model.BoardList;
import com.kanban.core.domain.vo.BoardId;
import com.kanban.core.domain.vo.BoardListId;
import com.kanban.core.port.output.BoardListRepository;
import com.kanban.infrastructure.persistence.entity.BoardListEntity;
import com.kanban.infrastructure.persistence.mapper.BoardListMapper;
import org.jspecify.annotations.NullMarked;
import org.springframework.data.domain.Sort;
import org.springframework.data.r2dbc.core.R2dbcEntityTemplate;
import org.springframework.data.relational.core.query.Query;
import org.springframework.data.relational.core.query.Update;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import static org.springframework.data.relational.core.query.Criteria.where;

@NullMarked
@Repository
public class R2dbcBoardListRepository implements BoardListRepository {

    private final R2dbcEntityTemplate template;
    private final BoardListMapper mapper;

    public R2dbcBoardListRepository(R2dbcEntityTemplate template, BoardListMapper mapper) {
        this.template = template;
        this.mapper = mapper;
    }

    @Override
    public Mono<BoardList> findById(BoardListId id) {
        return template.select(BoardListEntity.class)
                .matching(Query.query(where("id").is(id.value())))
                .one()
                .map(mapper::toDomain);
    }

    @Override
    public Flux<BoardList> findByBoardId(BoardId boardId) {
        return template.select(BoardListEntity.class)
                .matching(Query.query(where("board_id").is(boardId.value()))
                        .sort(Sort.by(Sort.Direction.ASC, "position")))
                .all()
                .map(mapper::toDomain);
    }

    @Override
    public Mono<BoardList> insert(BoardList list) {
        return template.insert(BoardListEntity.class)
                .using(mapper.toInsertEntity(list))
                .map(saved -> mapper.assignGeneratedId(list, saved));
    }

    @Override
    public Mono<BoardList> update(BoardList list) {
        return template.update(mapper.toUpdateEntity(list))
                .thenReturn(list);
    }

    @Override
    public Mono<Void> archive(BoardListId id) {
        return template.update(BoardListEntity.class)
                .matching(Query.query(where("id").is(id.value())))
                .apply(Update.update("archived", true))
                .then();
    }
}

package com.kanban.infrastructure.persistence.r2dbc;

import com.kanban.core.domain.model.Board;
import com.kanban.core.domain.vo.BoardId;
import com.kanban.core.domain.vo.UserId;
import com.kanban.core.port.output.BoardRepository;
import com.kanban.infrastructure.persistence.entity.BoardEntity;
import com.kanban.infrastructure.persistence.mapper.BoardMapper;
import org.jspecify.annotations.NullMarked;
import org.springframework.data.r2dbc.core.R2dbcEntityTemplate;
import org.springframework.data.relational.core.query.Query;
import org.springframework.data.relational.core.query.Update;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import static org.springframework.data.relational.core.query.Criteria.where;

@NullMarked
@Repository
public class R2dbcBoardRepository implements BoardRepository {

    private final R2dbcEntityTemplate template;
    private final BoardMapper mapper;

    public R2dbcBoardRepository(R2dbcEntityTemplate template, BoardMapper mapper) {
        this.template = template;
        this.mapper = mapper;
    }

    @Override
    public Mono<Board> findById(BoardId id) {
        return template.select(BoardEntity.class)
                .matching(Query.query(where("id").is(id.value())))
                .one()
                .map(mapper::toDomain);
    }

    @Override
    public Flux<Board> findByUserId(UserId userId) {
        return template.select(BoardEntity.class)
                .matching(Query.query(where("created_by").is(userId.value())))
                .all()
                .map(mapper::toDomain);
    }

    @Override
    public Mono<Board> insert(Board board) {
        return template.insert(BoardEntity.class)
                .using(mapper.toInsertEntity(board))
                .map(saved -> mapper.assignGeneratedId(board, saved));
    }

    @Override
    public Mono<Board> update(Board board) {
        return template.update(mapper.toUpdateEntity(board))
                .thenReturn(board);
    }

    @Override
    public Mono<Void> archive(BoardId id) {
        return template.update(BoardEntity.class)
                .matching(Query.query(where("id").is(id.value())))
                .apply(Update.update("archived", true))
                .then();
    }

    @Override
    public Mono<Void> delete(BoardId id) {
        return template.delete(BoardEntity.class)
                .matching(Query.query(where("id").is(id.value())))
                .all()
                .then();
    }
}

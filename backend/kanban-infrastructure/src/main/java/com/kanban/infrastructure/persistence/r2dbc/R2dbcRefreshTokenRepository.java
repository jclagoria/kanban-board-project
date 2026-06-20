package com.kanban.infrastructure.persistence.r2dbc;

import com.kanban.core.domain.model.RefreshToken;
import com.kanban.core.domain.vo.UserId;
import com.kanban.core.port.output.RefreshTokenRepository;
import com.kanban.infrastructure.persistence.entity.RefreshTokenEntity;
import com.kanban.infrastructure.persistence.mapper.RefreshTokenMapper;
import org.jspecify.annotations.NullMarked;
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
public class R2dbcRefreshTokenRepository implements RefreshTokenRepository {

    private final R2dbcEntityTemplate template;
    private final RefreshTokenMapper mapper;

    public R2dbcRefreshTokenRepository(R2dbcEntityTemplate template, RefreshTokenMapper mapper) {
        this.template = template;
        this.mapper = mapper;
    }

    @Override
    public Mono<RefreshToken> save(RefreshToken token) {
        return template.insert(RefreshTokenEntity.class)
            .using(mapper.toInsertEntity(token))
            .map(mapper::toDomain);
    }

    @Override
    public Mono<RefreshToken> findByTokenHash(String tokenHash) {
        return template.select(RefreshTokenEntity.class)
            .matching(Query.query(where("token_hash").is(tokenHash)))
            .one()
            .map(mapper::toDomain);
    }

    @Override
    public Mono<Void> revokeByUser(UserId userId) {
        return template.update(RefreshTokenEntity.class)
            .matching(Query.query(where("user_id").is(userId.value())))
            .apply(Update.update("revoked", true))
            .then();
    }

    @Override
    public Mono<Void> revokeByUserBefore(UserId userId, Instant before) {
        return template.update(RefreshTokenEntity.class)
            .matching(Query.query(
                where("user_id").is(userId.value())
                    .and("created_at").lessThan(before)))
            .apply(Update.update("revoked", true))
            .then();
    }

    @Override
    public Flux<RefreshToken> findAllValidByUser(UserId userId) {
        return template.select(RefreshTokenEntity.class)
            .matching(Query.query(
                where("user_id").is(userId.value())
                    .and("revoked").is(false)
                    .and("expires_at").greaterThan(Instant.now())))
            .all()
            .map(mapper::toDomain);
    }
}

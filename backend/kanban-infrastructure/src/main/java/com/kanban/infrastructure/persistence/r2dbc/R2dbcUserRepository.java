package com.kanban.infrastructure.persistence.r2dbc;

import com.kanban.core.domain.model.User;
import com.kanban.core.domain.vo.UserId;
import com.kanban.core.port.output.UserRepository;
import com.kanban.infrastructure.persistence.entity.UserEntity;
import com.kanban.infrastructure.persistence.mapper.UserMapper;
import org.jspecify.annotations.NullMarked;
import org.springframework.data.r2dbc.core.R2dbcEntityTemplate;
import org.springframework.data.relational.core.query.Query;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;
import static org.springframework.data.relational.core.query.Criteria.where;

@NullMarked
@Repository
public class R2dbcUserRepository implements UserRepository {

    private final R2dbcEntityTemplate template;
    private final UserMapper mapper;

    public R2dbcUserRepository(R2dbcEntityTemplate template, UserMapper mapper) {
        this.template = template;
        this.mapper = mapper;
    }

    @Override
    public Mono<User> findById(UserId id) {
        return template.select(UserEntity.class)
                .matching(Query.query(where("id").is(id.value())))
                .one()
                .map(mapper::toDomain);
    }

    @Override
    public Mono<User> findByEmail(String email) {
        return template.select(UserEntity.class)
                .matching(Query.query(where("email").is(email)))
                .one()
                .map(mapper::toDomain);
    }

    @Override
    public Mono<User> insert(User user) {
        return template.insert(UserEntity.class)
                .using(mapper.toInsertEntity(user))
                .map(saved -> mapper.assignGeneratedId(user, saved));
    }

    @Override
    public Mono<User> update(User user) {
        return template.update(mapper.toUpdateEntity(user))
                .thenReturn(user);
    }
}

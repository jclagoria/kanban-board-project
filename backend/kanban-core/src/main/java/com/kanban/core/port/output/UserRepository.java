package com.kanban.core.port.output;

import com.kanban.core.domain.model.User;
import com.kanban.core.domain.vo.UserId;
import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Mono;

@NullMarked
public interface UserRepository {
    Mono<User> findById(UserId id);
    Mono<User> findByEmail(String email);
    Mono<User> insert(User user);
    Mono<User> update(User user);
}

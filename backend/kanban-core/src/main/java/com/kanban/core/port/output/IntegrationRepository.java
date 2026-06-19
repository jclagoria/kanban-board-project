package com.kanban.core.port.output;

import com.kanban.core.domain.model.IntegrationConnection;
import com.kanban.core.domain.vo.UserId;
import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@NullMarked
public interface IntegrationRepository {
    Mono<IntegrationConnection> findByUserIdAndProvider(UserId userId, String provider);
    Flux<IntegrationConnection> findByUserId(UserId userId);
    Mono<IntegrationConnection> upsert(IntegrationConnection connection);
    Mono<Void> delete(java.util.UUID id);
}

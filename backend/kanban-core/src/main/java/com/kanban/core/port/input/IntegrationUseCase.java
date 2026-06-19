package com.kanban.core.port.input;

import com.kanban.core.domain.model.IntegrationConnection;
import com.kanban.core.domain.vo.UserId;
import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@NullMarked
public interface IntegrationUseCase {
    Mono<IntegrationConnection> connectProvider(UserId userId, String provider, String accessToken, String refreshToken);
    Mono<Void> disconnectProvider(UserId userId, String provider);
    Flux<IntegrationConnection> getUserIntegrations(UserId userId);
}

package com.kanban.core.port.output;

import com.kanban.core.domain.model.WebhookConfig;
import com.kanban.core.domain.vo.BoardId;
import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@NullMarked
public interface WebhookConfigRepository {
    Flux<WebhookConfig> findByBoardId(BoardId boardId);
    Mono<WebhookConfig> insert(WebhookConfig config);
    Mono<WebhookConfig> update(WebhookConfig config);
    Mono<Void> delete(java.util.UUID id);
}

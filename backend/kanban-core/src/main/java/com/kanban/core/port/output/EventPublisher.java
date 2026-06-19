package com.kanban.core.port.output;

import com.kanban.core.event.DomainEvent;
import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Mono;

@NullMarked
public interface EventPublisher {
    Mono<Void> publish(DomainEvent event);
}

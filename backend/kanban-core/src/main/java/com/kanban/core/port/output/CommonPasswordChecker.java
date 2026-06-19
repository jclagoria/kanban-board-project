package com.kanban.core.port.output;

import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Mono;

@NullMarked
public interface CommonPasswordChecker {
    Mono<Boolean> isCommon(String password);
}

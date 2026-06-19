package com.kanban.core.port.output;

import com.kanban.core.domain.model.FieldDefinition;
import com.kanban.core.domain.vo.BoardId;
import com.kanban.core.domain.vo.FieldDefinitionId;
import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@NullMarked
public interface FieldDefinitionRepository {
    Flux<FieldDefinition> findByBoardId(BoardId boardId);
    Mono<FieldDefinition> findById(FieldDefinitionId id);
    Mono<FieldDefinition> insert(FieldDefinition fieldDefinition);
    Mono<FieldDefinition> update(FieldDefinition fieldDefinition);
    Mono<Void> delete(FieldDefinitionId id);
}

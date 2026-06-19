package com.kanban.core.port.output;

import com.kanban.core.domain.model.ActivityLogEntry;
import com.kanban.core.domain.vo.BoardId;
import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@NullMarked
public interface ActivityLogRepository {
    Flux<ActivityLogEntry> findByBoardId(BoardId boardId);
    Mono<ActivityLogEntry> insert(ActivityLogEntry entry);
    Mono<Void> deleteOlderThan(java.time.Instant olderThan);
}

package com.kanban.core.domain.model;

import com.kanban.core.domain.vo.BoardId;
import org.jspecify.annotations.NullMarked;
import org.jspecify.annotations.Nullable;
import java.time.Instant;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@NullMarked
public class WebhookConfig {

    private final UUID id;
    private final BoardId boardId;
    private final String url;
    private final List<String> events;
    private final @Nullable String secret;
    private final boolean enabled;
    private final Instant createdAt;

    public WebhookConfig(UUID id, BoardId boardId, String url, List<String> events,
                         @Nullable String secret, boolean enabled, Instant createdAt) {
        this.id = Objects.requireNonNull(id, "id must not be null");
        this.boardId = Objects.requireNonNull(boardId, "boardId must not be null");
        this.url = Objects.requireNonNull(url, "url must not be null");
        this.events = List.copyOf(events);
        this.secret = secret;
        this.enabled = enabled;
        this.createdAt = Objects.requireNonNull(createdAt, "createdAt must not be null");
    }

    public UUID id() { return id; }
    public BoardId boardId() { return boardId; }
    public String url() { return url; }
    public List<String> events() { return events; }
    public @Nullable String secret() { return secret; }
    public boolean enabled() { return enabled; }
    public Instant createdAt() { return createdAt; }
}

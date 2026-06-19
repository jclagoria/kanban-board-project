package com.kanban.core.domain.model;

import com.kanban.core.domain.vo.CommentId;
import com.kanban.core.domain.vo.UserId;
import org.jspecify.annotations.NullMarked;
import java.time.Instant;
import java.util.Objects;

@NullMarked
public class CardComment {

    private final CommentId id;
    private final UserId authorId;
    private final String body;
    private final Instant createdAt;

    public CardComment(CommentId id, UserId authorId, String body, Instant createdAt) {
        this.id = Objects.requireNonNull(id, "id must not be null");
        this.authorId = Objects.requireNonNull(authorId, "authorId must not be null");
        this.body = Objects.requireNonNull(body, "body must not be null");
        this.createdAt = Objects.requireNonNull(createdAt, "createdAt must not be null");
    }

    public CommentId id() { return id; }
    public UserId authorId() { return authorId; }
    public String body() { return body; }
    public Instant createdAt() { return createdAt; }
}

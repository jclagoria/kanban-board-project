package com.kanban.core.domain.model;

import com.kanban.core.domain.vo.UserId;
import org.jspecify.annotations.NullMarked;
import org.jspecify.annotations.Nullable;
import java.time.Instant;
import java.util.Objects;
import java.util.UUID;

@NullMarked
public class Notification {

    private final UUID id;
    private final UserId userId;
    private final NotificationType type;
    private final String title;
    private final @Nullable String body;
    private final @Nullable String data;
    private final boolean read;
    private final boolean emailSent;
    private final Instant createdAt;

    public enum NotificationType {
        MENTION, ASSIGNED, DUE_SOON, CARD_CHANGE, MEMBER_JOINED, INVITATION
    }

    private Notification(UUID id, UserId userId, NotificationType type, String title,
                         @Nullable String body, @Nullable String data,
                         boolean read, boolean emailSent, Instant createdAt) {
        this.id = Objects.requireNonNull(id, "id must not be null");
        this.userId = Objects.requireNonNull(userId, "userId must not be null");
        this.type = Objects.requireNonNull(type, "type must not be null");
        this.title = Objects.requireNonNull(title, "title must not be null");
        this.body = body;
        this.data = data;
        this.read = read;
        this.emailSent = emailSent;
        this.createdAt = Objects.requireNonNull(createdAt, "createdAt must not be null");
    }

    public static Notification create(UserId userId, NotificationType type, String title) {
        return new Notification(UUID.randomUUID(), userId, type, title, null, null,
            false, false, Instant.now());
    }

    public static Notification reconstitute(UUID id, UserId userId, NotificationType type,
                                            String title, @Nullable String body,
                                            @Nullable String data, boolean read,
                                            boolean emailSent, Instant createdAt) {
        return new Notification(id, userId, type, title, body, data, read, emailSent, createdAt);
    }

    public Notification markRead() {
        return new Notification(this.id, this.userId, this.type, this.title,
            this.body, this.data, true, this.emailSent, this.createdAt);
    }

    public UUID id() { return id; }
    public UserId userId() { return userId; }
    public NotificationType type() { return type; }
    public String title() { return title; }
    public @Nullable String body() { return body; }
    public @Nullable String data() { return data; }
    public boolean read() { return read; }
    public boolean emailSent() { return emailSent; }
    public Instant createdAt() { return createdAt; }
}

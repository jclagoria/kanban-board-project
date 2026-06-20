package com.kanban.core.domain.model;

import com.kanban.core.domain.vo.UserId;
import org.jspecify.annotations.NullMarked;
import java.time.Duration;
import java.time.Instant;
import java.util.Objects;
import java.util.UUID;

@NullMarked
public class PasswordResetToken {
    private final UUID id;
    private final UserId userId;
    private final String tokenHash;
    private final Instant expiresAt;
    private final boolean used;
    private final Instant createdAt;

    private PasswordResetToken(UUID id, UserId userId, String tokenHash,
                                Instant expiresAt, boolean used, Instant createdAt) {
        this.id = Objects.requireNonNull(id);
        this.userId = Objects.requireNonNull(userId);
        this.tokenHash = Objects.requireNonNull(tokenHash);
        this.expiresAt = Objects.requireNonNull(expiresAt);
        this.used = used;
        this.createdAt = Objects.requireNonNull(createdAt);
    }

    public static PasswordResetToken create(UserId userId, String tokenHash, Duration ttl) {
        var now = Instant.now();
        return new PasswordResetToken(UUID.randomUUID(), userId, tokenHash,
            now.plus(ttl), false, now);
    }

    public static PasswordResetToken reconstitute(UUID id, UserId userId, String tokenHash,
                                                   Instant expiresAt, boolean used, Instant createdAt) {
        return new PasswordResetToken(id, userId, tokenHash, expiresAt, used, createdAt);
    }

    public boolean isExpired() {
        return Instant.now().isAfter(expiresAt);
    }

    public PasswordResetToken markUsed() {
        return new PasswordResetToken(this.id, this.userId, this.tokenHash,
            this.expiresAt, true, this.createdAt);
    }

    public UUID id() { return id; }
    public UserId userId() { return userId; }
    public String tokenHash() { return tokenHash; }
    public Instant expiresAt() { return expiresAt; }
    public boolean isUsed() { return used; }
    public Instant createdAt() { return createdAt; }
}

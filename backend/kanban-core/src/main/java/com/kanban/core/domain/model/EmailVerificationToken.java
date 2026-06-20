package com.kanban.core.domain.model;

import com.kanban.core.domain.vo.UserId;
import org.jspecify.annotations.NullMarked;
import java.time.Duration;
import java.time.Instant;
import java.util.Objects;
import java.util.UUID;

@NullMarked
public class EmailVerificationToken {
    private final UUID id;
    private final UserId userId;
    private final String tokenHash;
    private final Instant expiresAt;
    private final boolean used;
    private final Instant createdAt;

    private EmailVerificationToken(UUID id, UserId userId, String tokenHash,
                                    Instant expiresAt, boolean used, Instant createdAt) {
        this.id = Objects.requireNonNull(id);
        this.userId = Objects.requireNonNull(userId);
        this.tokenHash = Objects.requireNonNull(tokenHash);
        this.expiresAt = Objects.requireNonNull(expiresAt);
        this.used = used;
        this.createdAt = Objects.requireNonNull(createdAt);
    }

    public static EmailVerificationToken create(UserId userId, String tokenHash, Duration ttl) {
        var now = Instant.now();
        return new EmailVerificationToken(UUID.randomUUID(), userId, tokenHash,
            now.plus(ttl), false, now);
    }

    public static EmailVerificationToken reconstitute(UUID id, UserId userId, String tokenHash,
                                                       Instant expiresAt, boolean used, Instant createdAt) {
        return new EmailVerificationToken(id, userId, tokenHash, expiresAt, used, createdAt);
    }

    public boolean isExpired() {
        return Instant.now().isAfter(expiresAt);
    }

    public EmailVerificationToken markUsed() {
        return new EmailVerificationToken(this.id, this.userId, this.tokenHash,
            this.expiresAt, true, this.createdAt);
    }

    public UUID id() { return id; }
    public UserId userId() { return userId; }
    public String tokenHash() { return tokenHash; }
    public Instant expiresAt() { return expiresAt; }
    public boolean isUsed() { return used; }
    public Instant createdAt() { return createdAt; }
}

package com.kanban.core.domain.model;

import com.kanban.core.domain.vo.UserId;
import org.jspecify.annotations.NullMarked;
import java.time.Duration;
import java.time.Instant;
import java.util.Objects;
import java.util.UUID;

@NullMarked
public class RefreshToken {
    private final UUID id;
    private final UserId userId;
    private final String tokenHash;
    private final Instant issuedAt;
    private final Instant expiresAt;
    private final boolean revoked;

    private RefreshToken(UUID id, UserId userId, String tokenHash,
                         Instant issuedAt, Instant expiresAt, boolean revoked) {
        this.id = Objects.requireNonNull(id);
        this.userId = Objects.requireNonNull(userId);
        this.tokenHash = Objects.requireNonNull(tokenHash);
        this.issuedAt = Objects.requireNonNull(issuedAt);
        this.expiresAt = Objects.requireNonNull(expiresAt);
        this.revoked = revoked;
    }

    public static RefreshToken create(UserId userId, String tokenHash, Duration ttl) {
        var now = Instant.now();
        return new RefreshToken(UUID.randomUUID(), userId, tokenHash,
            now, now.plus(ttl), false);
    }

    public static RefreshToken reconstitute(UUID id, UserId userId, String tokenHash,
                                             Instant issuedAt, Instant expiresAt, boolean revoked) {
        return new RefreshToken(id, userId, tokenHash, issuedAt, expiresAt, revoked);
    }

    public boolean isExpired() {
        return Instant.now().isAfter(expiresAt);
    }

    public RefreshToken revoke() {
        return new RefreshToken(this.id, this.userId, this.tokenHash,
            this.issuedAt, this.expiresAt, true);
    }

    public UUID id() { return id; }
    public UserId userId() { return userId; }
    public String tokenHash() { return tokenHash; }
    public Instant issuedAt() { return issuedAt; }
    public Instant expiresAt() { return expiresAt; }
    public boolean isRevoked() { return revoked; }
}

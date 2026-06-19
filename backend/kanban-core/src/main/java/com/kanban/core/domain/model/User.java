package com.kanban.core.domain.model;

import com.kanban.core.domain.vo.UserId;
import org.jspecify.annotations.NullMarked;
import org.jspecify.annotations.Nullable;
import java.time.Instant;
import java.util.Objects;

@NullMarked
public class User {

    private final UserId id;
    private final String email;
    private final String passwordHash;
    private final String displayName;
    private final @Nullable String avatarUrl;
    private final boolean twoFactorEnabled;
    private final @Nullable String twoFactorSecret;
    private final String plan;
    private final long storageUsedBytes;
    private final Instant createdAt;
    private final Instant updatedAt;

    private User(UserId id, String email, String passwordHash, String displayName,
                 @Nullable String avatarUrl, boolean twoFactorEnabled,
                 @Nullable String twoFactorSecret, String plan, long storageUsedBytes,
                 Instant createdAt, Instant updatedAt) {
        this.id = Objects.requireNonNull(id, "id must not be null");
        this.email = Objects.requireNonNull(email, "email must not be null");
        this.passwordHash = Objects.requireNonNull(passwordHash, "passwordHash must not be null");
        this.displayName = Objects.requireNonNull(displayName, "displayName must not be null");
        this.avatarUrl = avatarUrl;
        this.twoFactorEnabled = twoFactorEnabled;
        this.twoFactorSecret = twoFactorSecret;
        this.plan = Objects.requireNonNull(plan, "plan must not be null");
        this.storageUsedBytes = storageUsedBytes;
        this.createdAt = Objects.requireNonNull(createdAt, "createdAt must not be null");
        this.updatedAt = Objects.requireNonNull(updatedAt, "updatedAt must not be null");
    }

    public static User create(String email, String passwordHash, String displayName) {
        var tempId = new UserId(java.util.UUID.randomUUID());
        var now = Instant.now();
        return new User(tempId, email, passwordHash, displayName, null, false, null, "free", 0L, now, now);
    }

    public static User reconstitute(UserId id, String email, String passwordHash, String displayName,
                                     @Nullable String avatarUrl, boolean twoFactorEnabled,
                                     @Nullable String twoFactorSecret, String plan,
                                     long storageUsedBytes, Instant createdAt, Instant updatedAt) {
        return new User(id, email, passwordHash, displayName, avatarUrl, twoFactorEnabled,
            twoFactorSecret, plan, storageUsedBytes, createdAt, updatedAt);
    }

    public User withId(UserId newId) {
        return new User(newId, this.email, this.passwordHash, this.displayName, this.avatarUrl,
            this.twoFactorEnabled, this.twoFactorSecret, this.plan, this.storageUsedBytes,
            this.createdAt, this.updatedAt);
    }

    public User updateProfile(String displayName, @Nullable String avatarUrl) {
        return new User(this.id, this.email, this.passwordHash, displayName, avatarUrl,
            this.twoFactorEnabled, this.twoFactorSecret, this.plan, this.storageUsedBytes,
            this.createdAt, Instant.now());
    }

    public User enableTwoFactor(String twoFactorSecret) {
        return new User(this.id, this.email, this.passwordHash, this.displayName, this.avatarUrl,
            true, twoFactorSecret, this.plan, this.storageUsedBytes, this.createdAt, Instant.now());
    }

    public User disableTwoFactor() {
        return new User(this.id, this.email, this.passwordHash, this.displayName, this.avatarUrl,
            false, null, this.plan, this.storageUsedBytes, this.createdAt, Instant.now());
    }

    public User upgradePlan(String plan) {
        return new User(this.id, this.email, this.passwordHash, this.displayName, this.avatarUrl,
            this.twoFactorEnabled, this.twoFactorSecret, plan, this.storageUsedBytes,
            this.createdAt, Instant.now());
    }

    public UserId id() { return id; }
    public String email() { return email; }
    public String passwordHash() { return passwordHash; }
    public String displayName() { return displayName; }
    public @Nullable String avatarUrl() { return avatarUrl; }
    public boolean twoFactorEnabled() { return twoFactorEnabled; }
    public @Nullable String twoFactorSecret() { return twoFactorSecret; }
    public String plan() { return plan; }
    public long storageUsedBytes() { return storageUsedBytes; }
    public Instant createdAt() { return createdAt; }
    public Instant updatedAt() { return updatedAt; }
}

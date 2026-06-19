package com.kanban.infrastructure.persistence.entity;

import org.jspecify.annotations.NullMarked;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.time.Instant;
import java.util.Objects;
import java.util.UUID;

@NullMarked
@Table("board_members")
public record BoardMemberEntity(
        @Column("board_id") UUID boardId,
        @Column("user_id") UUID userId,
        @Column("role") String role,
        @Column("joined_at") Instant joinedAt
) {
    public BoardMemberEntity {
        Objects.requireNonNull(boardId, "boardId must not be null");
        Objects.requireNonNull(userId, "userId must not be null");
        Objects.requireNonNull(role, "role must not be null");
        Objects.requireNonNull(joinedAt, "joinedAt must not be null");
    }
}

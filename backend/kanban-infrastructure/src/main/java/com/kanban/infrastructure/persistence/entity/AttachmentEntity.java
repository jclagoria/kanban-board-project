package com.kanban.infrastructure.persistence.entity;

import org.jspecify.annotations.NullMarked;
import org.jspecify.annotations.Nullable;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.time.Instant;
import java.util.Objects;
import java.util.UUID;

@NullMarked
@Table("attachments")
public record AttachmentEntity(
        @Id @Nullable UUID id,
        @Column("card_id") UUID cardId,
        @Column("file_name") String fileName,
        @Column("file_size") long fileSize,
        @Column("mime_type") String mimeType,
        @Column("storage_key") String storageKey,
        @Column("storage_provider") String storageProvider,
        @Column("uploaded_by") UUID uploadedBy,
        @Column("created_at") Instant createdAt
) {
    public AttachmentEntity {
        Objects.requireNonNull(cardId, "cardId must not be null");
        Objects.requireNonNull(fileName, "fileName must not be null");
        Objects.requireNonNull(mimeType, "mimeType must not be null");
        Objects.requireNonNull(storageKey, "storageKey must not be null");
        Objects.requireNonNull(storageProvider, "storageProvider must not be null");
        Objects.requireNonNull(uploadedBy, "uploadedBy must not be null");
        Objects.requireNonNull(createdAt, "createdAt must not be null");
    }
}

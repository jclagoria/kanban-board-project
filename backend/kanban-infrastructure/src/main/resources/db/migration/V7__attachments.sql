CREATE TABLE attachments (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    card_id             UUID NOT NULL REFERENCES cards(id) ON DELETE CASCADE,
    file_name           VARCHAR(255) NOT NULL,
    file_size           BIGINT NOT NULL,
    mime_type           VARCHAR(100) NOT NULL,
    storage_key         TEXT NOT NULL,
    storage_provider    VARCHAR(20) NOT NULL DEFAULT 's3'
                            CHECK (storage_provider IN ('s3', 'local', 'google_drive')),
    uploaded_by         UUID NOT NULL REFERENCES users(id),
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_attachments_card ON attachments (card_id);

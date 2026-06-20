CREATE TABLE reset_tokens (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    token_hash      VARCHAR(255) NOT NULL,
    type            VARCHAR(20) NOT NULL CHECK (type IN ('password_reset', 'email_verification')),
    expires_at      TIMESTAMPTZ NOT NULL,
    used            BOOLEAN NOT NULL DEFAULT FALSE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_reset_token_hash UNIQUE (token_hash)
);

CREATE INDEX idx_reset_tokens_user ON reset_tokens (user_id);
CREATE INDEX idx_reset_tokens_expires ON reset_tokens (expires_at) WHERE used = FALSE;

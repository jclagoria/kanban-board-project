CREATE TABLE integration_connections (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id             UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    provider            VARCHAR(30) NOT NULL
                            CHECK (provider IN ('slack', 'github', 'jira', 'google')),
    access_token        TEXT NOT NULL,
    refresh_token       TEXT,
    token_expires_at    TIMESTAMPTZ,
    provider_user_id    VARCHAR(255),
    provider_metadata   JSONB,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (user_id, provider)
);

CREATE TABLE webhook_configs (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    board_id        UUID NOT NULL REFERENCES boards(id) ON DELETE CASCADE,
    url             TEXT NOT NULL,
    events          TEXT[] NOT NULL DEFAULT '{}',
    secret          VARCHAR(255),
    enabled         BOOLEAN NOT NULL DEFAULT TRUE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_webhook_board ON webhook_configs (board_id);

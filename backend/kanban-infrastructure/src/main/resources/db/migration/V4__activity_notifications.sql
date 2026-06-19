CREATE TABLE activity_log (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    board_id        UUID NOT NULL REFERENCES boards(id) ON DELETE CASCADE,
    user_id         UUID NOT NULL REFERENCES users(id),
    action          VARCHAR(50) NOT NULL,
    entity_type     VARCHAR(30) NOT NULL,
    entity_id       UUID,
    data            JSONB,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_activity_board ON activity_log (board_id, created_at DESC);
CREATE INDEX idx_activity_user  ON activity_log (user_id, created_at DESC);

CREATE TABLE notifications (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    type            VARCHAR(30) NOT NULL
                        CHECK (type IN (
                            'mention', 'assigned', 'due_soon',
                            'card_change', 'member_joined', 'invitation'
                        )),
    title           VARCHAR(255) NOT NULL,
    body            TEXT,
    data            JSONB,
    read            BOOLEAN NOT NULL DEFAULT FALSE,
    email_sent      BOOLEAN NOT NULL DEFAULT FALSE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_notifications_user ON notifications (user_id, read, created_at DESC);

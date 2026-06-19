CREATE TABLE field_definitions (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    board_id        UUID NOT NULL REFERENCES boards(id) ON DELETE CASCADE,
    name            VARCHAR(100) NOT NULL,
    field_type      VARCHAR(20) NOT NULL
                        CHECK (field_type IN (
                            'text', 'number', 'date', 'email',
                            'checkbox', 'url', 'dropdown'
                        )),
    config          JSONB NOT NULL DEFAULT '{}',
    required        BOOLEAN NOT NULL DEFAULT FALSE,
    position        INT NOT NULL DEFAULT 0,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_field_defs_board ON field_definitions (board_id, position);

CREATE TABLE card_custom_fields (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    card_id             UUID NOT NULL REFERENCES cards(id) ON DELETE CASCADE,
    field_definition_id UUID NOT NULL REFERENCES field_definitions(id) ON DELETE CASCADE,
    value               JSONB NOT NULL,
    UNIQUE (card_id, field_definition_id)
);

CREATE INDEX idx_card_cf_card ON card_custom_fields (card_id);
CREATE INDEX idx_card_cf_value ON card_custom_fields USING GIN (value jsonb_path_ops);

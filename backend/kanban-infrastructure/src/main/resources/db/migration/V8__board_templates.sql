CREATE TABLE board_templates (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name            VARCHAR(100) NOT NULL,
    description     TEXT,
    board_data      JSONB NOT NULL,
    category        VARCHAR(50) NOT NULL
                        CHECK (category IN (
                            'project_management', 'sprint', 'content_calendar',
                            'crm', 'hr', 'engineering', 'marketing', 'other'
                        )),
    is_predefined   BOOLEAN NOT NULL DEFAULT FALSE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_templates_category ON board_templates (category, name);

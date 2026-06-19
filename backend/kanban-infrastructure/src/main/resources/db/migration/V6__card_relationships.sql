CREATE TABLE card_relationships (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_card_id      UUID NOT NULL REFERENCES cards(id) ON DELETE CASCADE,
    target_card_id      UUID NOT NULL REFERENCES cards(id) ON DELETE CASCADE,
    relationship_type   VARCHAR(20) NOT NULL
                            CHECK (relationship_type IN (
                                'blocks', 'relates_to', 'duplicate_of'
                            )),
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT different_cards CHECK (source_card_id <> target_card_id)
);

CREATE INDEX idx_card_rel_source ON card_relationships (source_card_id);
CREATE INDEX idx_card_rel_target ON card_relationships (target_card_id);

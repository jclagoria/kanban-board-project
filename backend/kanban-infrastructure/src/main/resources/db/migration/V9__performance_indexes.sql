-- Additional covering indexes for common query patterns

CREATE INDEX idx_cards_board_active ON cards (list_id, position) WHERE archived = FALSE;

CREATE INDEX idx_boards_active ON boards (created_by) WHERE archived = FALSE;

CREATE INDEX idx_board_lists_active ON board_lists (board_id, position) WHERE archived = FALSE;

CREATE INDEX idx_notifications_unread ON notifications (user_id, created_at DESC) WHERE read = FALSE;

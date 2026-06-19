-- Plan enforcement functions

CREATE OR REPLACE FUNCTION check_board_limit()
RETURNS TRIGGER AS $$
DECLARE
    user_plan VARCHAR(20);
    current_boards INT;
    max_boards INT;
BEGIN
    SELECT plan INTO user_plan FROM users WHERE id = NEW.created_by;
    SELECT COUNT(*) INTO current_boards FROM boards WHERE created_by = NEW.created_by AND archived = FALSE;
    max_boards := CASE WHEN user_plan = 'free' THEN 10 ELSE 1000 END;
    IF current_boards >= max_boards THEN
        RAISE EXCEPTION 'PLAN_LIMIT_EXCEEDED: Maximum boards (%) reached for plan %', max_boards, user_plan;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_check_board_limit
    BEFORE INSERT ON boards
    FOR EACH ROW
    EXECUTE FUNCTION check_board_limit();

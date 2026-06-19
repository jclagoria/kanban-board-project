package com.kanban.core.domain.service;

import com.kanban.core.domain.vo.Position;
import org.jspecify.annotations.NullMarked;
import java.util.List;

@NullMarked
public class PositionCalculator {

    public Position calculateBetween(Position before, Position after) {
        return Position.between(before, after);
    }

    public List<Position> reindex(List<Position> positions) {
        return Position.reindex(positions);
    }
}

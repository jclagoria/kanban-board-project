package com.kanban.core.domain.vo;

import org.jspecify.annotations.NullMarked;
import java.util.ArrayList;
import java.util.List;

@NullMarked
public record Position(double value) {

    public Position {
        if (value < 0) throw new IllegalArgumentException("Position must be >= 0");
    }

    public static Position between(Position before, Position after) {
        return new Position((before.value() + after.value()) / 2.0);
    }

    public static Position of(double value) {
        return new Position(value);
    }

    public static List<Position> reindex(List<Position> positions) {
        var result = new ArrayList<Position>(positions.size());
        for (int i = 0; i < positions.size(); i++) {
            result.add(new Position((double) i * 1024.0));
        }
        return result;
    }
}

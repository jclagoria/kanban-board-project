package com.kanban.core.domain.service;

import org.jspecify.annotations.NullMarked;

@NullMarked
public enum RotationResult {
    OK,
    REPLAY_DETECTED,
    RACE_CONDITION_GRACE
}

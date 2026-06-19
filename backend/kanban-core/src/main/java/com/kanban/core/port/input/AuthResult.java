package com.kanban.core.port.input;

import com.kanban.core.domain.model.User;
import org.jspecify.annotations.NullMarked;

@NullMarked
public record AuthResult(
    String accessToken,
    String refreshToken,
    User user
) {}

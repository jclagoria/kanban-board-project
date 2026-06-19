package com.kanban.application.mapper;

import com.kanban.core.domain.model.User;
import org.jspecify.annotations.NullMarked;
import org.springframework.stereotype.Component;

@NullMarked
@Component
public class AuthMapper {

    public String toUserId(User user) {
        return user.id().value().toString();
    }

    public String toEmailValue(User user) {
        return user.email().value();
    }

    public String toDisplayName(User user) {
        return user.displayName();
    }

    public String toPlan(User user) {
        return user.plan();
    }

    public boolean isEmailVerified(User user) {
        return user.emailVerified();
    }
}

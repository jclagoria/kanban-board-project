package com.kanban.core.port.output;

import org.jspecify.annotations.NullMarked;

@NullMarked
public interface PasswordEncoder {
    String encode(String rawPassword);
    boolean matches(String rawPassword, String encodedPassword);
}

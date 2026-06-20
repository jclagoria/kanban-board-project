package com.kanban.infrastructure.security.password;

import org.jspecify.annotations.NullMarked;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.stereotype.Component;

@NullMarked
@Component
public class PasswordEncoder implements com.kanban.core.port.output.PasswordEncoder {

    private final Argon2PasswordEncoder springEncoder;

    public PasswordEncoder() {
        this.springEncoder = new Argon2PasswordEncoder(16, 32, 4, 65536, 3);
    }

    @Override
    public String encode(String rawPassword) {
        return springEncoder.encode(rawPassword);
    }

    @Override
    public boolean matches(String rawPassword, String encodedPassword) {
        return springEncoder.matches(rawPassword, encodedPassword);
    }
}

package com.kanban.infrastructure.email;

import com.kanban.core.domain.vo.Email;
import com.kanban.core.port.output.EmailSender;
import org.jspecify.annotations.NullMarked;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

@NullMarked
@Component
public class EmailService implements EmailSender {

    private static final String FROM = "noreply@kanbanflow.com";
    private static final String APP_URL = "https://app.kanbanflow.com";

    @Override
    public Mono<Void> sendVerificationEmail(Email email, String rawToken) {
        var link = APP_URL + "/verify-email?token=" + rawToken;
        var subject = "Verify your email — KanbanFlow";
        var body = """
            <h1>Welcome to KanbanFlow!</h1>
            <p>Click the link below to verify your email:</p>
            <a href="%s">Verify email</a>
            <p>This link expires in 24 hours.</p>
            """.formatted(link);
        return send(email.value(), subject, body);
    }

    @Override
    public Mono<Void> sendPasswordResetEmail(Email email, String rawToken) {
        var link = APP_URL + "/reset-password?token=" + rawToken;
        var subject = "Reset your password — KanbanFlow";
        var body = """
            <h1>Password Reset</h1>
            <p>Click the link below to reset your password:</p>
            <a href="%s">Reset password</a>
            <p>This link expires in 15 minutes.</p>
            <p>If you didn't request this, you can ignore this email.</p>
            """.formatted(link);
        return send(email.value(), subject, body);
    }

    @Override
    public Mono<Void> sendCompromisedAlert(Email email) {
        var subject = "Security Alert — KanbanFlow";
        var body = """
            <h1>Security Alert</h1>
            <p>Your account may have been compromised.</p>
            <p>All sessions have been terminated. Please log in and change your password immediately.</p>
            """;
        return send(email.value(), subject, body);
    }

    private Mono<Void> send(String to, String subject, String htmlBody) {
        return Mono.fromRunnable(() -> {});
    }
}

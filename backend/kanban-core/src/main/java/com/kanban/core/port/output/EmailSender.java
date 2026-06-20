package com.kanban.core.port.output;

import com.kanban.core.domain.vo.Email;
import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Mono;

@NullMarked
public interface EmailSender {
    Mono<Void> sendVerificationEmail(Email email, String rawToken);
    Mono<Void> sendPasswordResetEmail(Email email, String rawToken);
    Mono<Void> sendCompromisedAlert(Email email);
}

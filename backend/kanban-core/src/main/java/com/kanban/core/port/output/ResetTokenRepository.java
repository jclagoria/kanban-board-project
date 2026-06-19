package com.kanban.core.port.output;

import com.kanban.core.domain.model.EmailVerificationToken;
import com.kanban.core.domain.model.PasswordResetToken;
import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Mono;

@NullMarked
public interface ResetTokenRepository {
    Mono<PasswordResetToken> save(PasswordResetToken token);
    Mono<PasswordResetToken> findPasswordResetByHash(String tokenHash);
    Mono<EmailVerificationToken> save(EmailVerificationToken token);
    Mono<EmailVerificationToken> findVerificationByHash(String tokenHash);
    Mono<Void> markUsed(String tokenHash);
}

package com.kanban.core.port.input;

import com.kanban.core.domain.model.User;
import com.kanban.core.domain.vo.Email;
import com.kanban.core.domain.vo.UserId;
import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Mono;

@NullMarked
public interface AuthUseCase {
    Mono<AuthResult> register(Email email, String displayName, String password);
    Mono<AuthResult> login(Email email, String password);
    Mono<AuthResult> refresh(String rawRefreshToken);
    Mono<Void> logout(String rawRefreshToken);
    Mono<Void> logoutAll(UserId userId);
    Mono<Void> requestPasswordReset(Email email);
    Mono<Void> resetPassword(String resetToken, String newPassword);
    Mono<Void> changePassword(UserId userId, String currentPassword, String newPassword);
    Mono<Void> verifyEmail(String verificationToken);
    Mono<Void> resendVerification(UserId userId);
    Mono<User> getCurrentUser(UserId userId);
}

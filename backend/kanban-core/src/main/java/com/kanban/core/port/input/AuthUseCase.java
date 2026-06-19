package com.kanban.core.port.input;

import org.jspecify.annotations.NullMarked;
import reactor.core.publisher.Mono;

@NullMarked
public interface AuthUseCase {
    Mono<AuthResult> login(String email, String password);
    Mono<AuthResult> register(String email, String password, String displayName);
    Mono<AuthResult> refreshToken(String refreshToken);
    Mono<Void> logout(String accessToken, String refreshToken);
    Mono<Void> verifyTwoFactor(String userId, String code);
    Mono<Void> enableTwoFactor(String userId);
    Mono<Void> disableTwoFactor(String userId);

    @NullMarked
    record AuthResult(
        String accessToken,
        String refreshToken,
        String userId,
        String email,
        String displayName,
        boolean twoFactorRequired
    ) {}
}

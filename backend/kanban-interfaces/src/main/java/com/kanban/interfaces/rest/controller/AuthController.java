package com.kanban.interfaces.rest.controller;

import com.kanban.core.domain.vo.Email;
import com.kanban.core.domain.vo.UserId;
import com.kanban.core.port.input.AuthUseCase;
import com.kanban.interfaces.rest.dto.request.ChangePasswordRequest;
import com.kanban.interfaces.rest.dto.request.ForgotPasswordRequest;
import com.kanban.interfaces.rest.dto.request.LoginRequest;
import com.kanban.interfaces.rest.dto.request.LogoutRequest;
import com.kanban.interfaces.rest.dto.request.RefreshTokenRequest;
import com.kanban.interfaces.rest.dto.request.RegisterRequest;
import com.kanban.interfaces.rest.dto.request.ResetPasswordRequest;
import com.kanban.interfaces.rest.dto.response.AuthResponse;
import com.kanban.interfaces.rest.dto.response.MessageResponse;
import com.kanban.interfaces.rest.dto.response.UserResponse;
import jakarta.validation.Valid;
import org.jspecify.annotations.NullMarked;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.security.Principal;
import java.util.UUID;

@NullMarked
@RestController
@RequestMapping("/v1/auth")
public class AuthController {

    private final AuthUseCase authUseCase;

    public AuthController(AuthUseCase authUseCase) {
        this.authUseCase = authUseCase;
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public Mono<AuthResponse> register(@Valid @RequestBody RegisterRequest request) {
        return authUseCase.register(
                new Email(request.email()),
                request.displayName(),
                request.password())
            .map(result -> new AuthResponse(
                result.accessToken(),
                result.refreshToken(),
                toUserResponse(result.user())));
    }

    @PostMapping("/login")
    public Mono<AuthResponse> login(@Valid @RequestBody LoginRequest request) {
        return authUseCase.login(
                new Email(request.email()),
                request.password())
            .map(result -> new AuthResponse(
                result.accessToken(),
                result.refreshToken(),
                toUserResponse(result.user())));
    }

    @PostMapping("/refresh")
    public Mono<AuthResponse> refresh(@Valid @RequestBody RefreshTokenRequest request) {
        return authUseCase.refresh(request.refreshToken())
            .map(result -> new AuthResponse(
                result.accessToken(),
                result.refreshToken(),
                toUserResponse(result.user())));
    }

    @PostMapping("/logout")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public Mono<Void> logout(@Valid @RequestBody LogoutRequest request) {
        return authUseCase.logout(request.refreshToken());
    }

    @PostMapping("/logout-all")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public Mono<Void> logoutAll(Principal principal) {
        return authUseCase.logoutAll(new UserId(UUID.fromString(principal.getName())));
    }

    @PostMapping("/forgot-password")
    public Mono<MessageResponse> forgotPassword(@Valid @RequestBody ForgotPasswordRequest request) {
        return authUseCase.requestPasswordReset(new Email(request.email()))
            .thenReturn(new MessageResponse(
                "If the email is registered, you will receive a reset link."));
    }

    @PostMapping("/reset-password")
    public Mono<MessageResponse> resetPassword(@Valid @RequestBody ResetPasswordRequest request) {
        return authUseCase.resetPassword(request.token(), request.newPassword())
            .thenReturn(new MessageResponse("Password updated. Please log in with your new password."));
    }

    @PutMapping("/password")
    public Mono<MessageResponse> changePassword(Principal principal,
                                                  @Valid @RequestBody ChangePasswordRequest request) {
        return authUseCase.changePassword(
                new UserId(UUID.fromString(principal.getName())),
                request.currentPassword(),
                request.newPassword())
            .thenReturn(new MessageResponse("Password updated. Please log in again."));
    }

    @PostMapping("/verify-email")
    public Mono<MessageResponse> verifyEmail(@RequestParam("token") String token) {
        return authUseCase.verifyEmail(token)
            .thenReturn(new MessageResponse("Email verified successfully."));
    }

    @PostMapping("/resend-verification")
    public Mono<MessageResponse> resendVerification(Principal principal) {
        return authUseCase.resendVerification(
                new UserId(UUID.fromString(principal.getName())))
            .thenReturn(new MessageResponse("Verification email sent."));
    }

    @GetMapping("/me")
    public Mono<UserResponse> me(Principal principal) {
        return authUseCase.getCurrentUser(new UserId(UUID.fromString(principal.getName())))
            .map(this::toUserResponse);
    }

    private UserResponse toUserResponse(com.kanban.core.domain.model.User user) {
        return new UserResponse(
            user.id().value(),
            user.email().value(),
            user.displayName(),
            user.plan(),
            user.emailVerified());
    }
}

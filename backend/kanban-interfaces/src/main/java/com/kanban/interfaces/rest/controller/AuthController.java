package com.kanban.interfaces.rest.controller;

import com.kanban.core.domain.model.User;
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
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
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
@Tag(name = "Authentication", description = "Endpoints for user authentication, registration, and session management")
public class AuthController {

    private final AuthUseCase authUseCase;

    public AuthController(AuthUseCase authUseCase) {
        this.authUseCase = authUseCase;
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    @Operation(summary = "Register a new user", description = "Create a new account with email, display name, and password")
    @ApiResponses({
        @ApiResponse(responseCode = "201", description = "Account created successfully"),
        @ApiResponse(responseCode = "400", description = "Invalid input or email already in use")
    })
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
    @Operation(summary = "Authenticate user", description = "Login with email and password to receive access and refresh tokens")
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "Authentication successful"),
        @ApiResponse(responseCode = "401", description = "Invalid credentials or account locked")
    })
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
    @Operation(summary = "Refresh access token", description = "Exchange a valid refresh token for a new access and refresh token pair")
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "Tokens refreshed successfully"),
        @ApiResponse(responseCode = "401", description = "Invalid or expired refresh token")
    })
    public Mono<AuthResponse> refresh(@Valid @RequestBody RefreshTokenRequest request) {
        return authUseCase.refresh(request.refreshToken())
            .map(result -> new AuthResponse(
                result.accessToken(),
                result.refreshToken(),
                toUserResponse(result.user())));
    }

    @PostMapping("/logout")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @Operation(summary = "Logout", description = "Revoke a specific refresh token")
    @ApiResponses({
        @ApiResponse(responseCode = "204", description = "Logged out successfully"),
        @ApiResponse(responseCode = "401", description = "Invalid token")
    })
    public Mono<Void> logout(@Valid @RequestBody LogoutRequest request) {
        return authUseCase.logout(request.refreshToken());
    }

    @PostMapping("/logout-all")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @Operation(summary = "Logout from all devices", description = "Revoke all refresh tokens for the authenticated user")
    @SecurityRequirement(name = "bearerAuth")
    @ApiResponses({
        @ApiResponse(responseCode = "204", description = "All sessions logged out"),
        @ApiResponse(responseCode = "401", description = "Unauthorized")
    })
    public Mono<Void> logoutAll(Principal principal) {
        return authUseCase.logoutAll(new UserId(UUID.fromString(principal.getName())));
    }

    @PostMapping("/forgot-password")
    @Operation(summary = "Request password reset", description = "Send a password reset link to the given email if registered")
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "Reset email sent if account exists"),
        @ApiResponse(responseCode = "400", description = "Invalid email format")
    })
    public Mono<MessageResponse> forgotPassword(@Valid @RequestBody ForgotPasswordRequest request) {
        return authUseCase.requestPasswordReset(new Email(request.email()))
            .thenReturn(new MessageResponse(
                "If the email is registered, you will receive a reset link."));
    }

    @PostMapping("/reset-password")
    @Operation(summary = "Reset password", description = "Complete password reset using token received via email")
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "Password reset successfully"),
        @ApiResponse(responseCode = "400", description = "Invalid or expired reset token")
    })
    public Mono<MessageResponse> resetPassword(@Valid @RequestBody ResetPasswordRequest request) {
        return authUseCase.resetPassword(request.token(), request.newPassword())
            .thenReturn(new MessageResponse("Password updated. Please log in with your new password."));
    }

    @PutMapping("/password")
    @Operation(summary = "Change password", description = "Change the authenticated user's password (requires current password)")
    @SecurityRequirement(name = "bearerAuth")
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "Password changed successfully"),
        @ApiResponse(responseCode = "401", description = "Unauthorized or current password incorrect")
    })
    public Mono<MessageResponse> changePassword(Principal principal,
                                                  @Valid @RequestBody ChangePasswordRequest request) {
        return authUseCase.changePassword(
                new UserId(UUID.fromString(principal.getName())),
                request.currentPassword(),
                request.newPassword())
            .thenReturn(new MessageResponse("Password updated. Please log in again."));
    }

    @PostMapping("/verify-email")
    @Operation(summary = "Verify email address", description = "Confirm email address using verification token")
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "Email verified successfully"),
        @ApiResponse(responseCode = "400", description = "Invalid or expired verification token")
    })
    public Mono<MessageResponse> verifyEmail(@RequestParam("token") String token) {
        return authUseCase.verifyEmail(token)
            .thenReturn(new MessageResponse("Email verified successfully."));
    }

    @PostMapping("/resend-verification")
    @Operation(summary = "Resend verification email", description = "Resend the email verification link to the authenticated user")
    @SecurityRequirement(name = "bearerAuth")
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "Verification email sent"),
        @ApiResponse(responseCode = "401", description = "Unauthorized")
    })
    public Mono<MessageResponse> resendVerification(Principal principal) {
        return authUseCase.resendVerification(
                new UserId(UUID.fromString(principal.getName())))
            .thenReturn(new MessageResponse("Verification email sent."));
    }

    @GetMapping("/me")
    @Operation(summary = "Get current user", description = "Return the authenticated user's profile information")
    @SecurityRequirement(name = "bearerAuth")
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "User profile returned"),
        @ApiResponse(responseCode = "401", description = "Unauthorized")
    })
    public Mono<UserResponse> me(Principal principal) {
        return authUseCase.getCurrentUser(new UserId(UUID.fromString(principal.getName())))
            .map(this::toUserResponse);
    }

    private UserResponse toUserResponse(User user) {
        return new UserResponse(
            user.id().value(),
            user.email().value(),
            user.displayName(),
            user.plan(),
            user.emailVerified());
    }
}

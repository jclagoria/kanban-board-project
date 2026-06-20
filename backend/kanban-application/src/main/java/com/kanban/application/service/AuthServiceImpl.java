package com.kanban.application.service;

import com.kanban.core.domain.model.EmailVerificationToken;
import com.kanban.core.domain.model.PasswordResetToken;
import com.kanban.core.domain.model.RefreshToken;
import com.kanban.core.domain.model.User;
import com.kanban.core.domain.service.PasswordStrengthService;
import com.kanban.core.domain.service.RotationResult;
import com.kanban.core.domain.service.TokenRotationService;
import com.kanban.core.domain.vo.Email;
import com.kanban.core.domain.vo.UserId;
import com.kanban.core.port.input.AuthResult;
import com.kanban.core.port.input.AuthUseCase;
import com.kanban.core.port.output.EmailSender;
import com.kanban.core.port.output.LoginAttemptTracker;
import com.kanban.core.port.output.PasswordEncoder;
import com.kanban.core.port.output.RefreshTokenRepository;
import com.kanban.core.port.output.ResetTokenRepository;
import com.kanban.core.port.output.TokenBlacklist;
import com.kanban.core.port.output.TokenProvider;
import com.kanban.core.port.output.UserRepository;
import com.kanban.core.shared.error.AccountLockedException;
import com.kanban.core.shared.error.AuthenticationFailedException;
import com.kanban.core.shared.error.EmailAlreadyRegisteredException;
import com.kanban.core.shared.error.EmailNotVerifiedException;
import com.kanban.core.shared.error.TokenExpiredException;
import com.kanban.core.shared.error.TokenInvalidException;
import com.kanban.core.shared.error.TokenRevokedException;
import com.kanban.core.shared.error.UserNotFoundException;
import org.jspecify.annotations.NullMarked;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Mono;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.Duration;
import java.time.Instant;
import java.util.HexFormat;
import java.util.UUID;

@NullMarked
@Service
@Transactional
public class AuthServiceImpl implements AuthUseCase {

    private final UserRepository userRepository;
    private final RefreshTokenRepository refreshTokenRepository;
    private final ResetTokenRepository resetTokenRepository;
    private final TokenBlacklist tokenBlacklist;
    private final LoginAttemptTracker loginAttemptTracker;
    private final TokenProvider tokenProvider;
    private final PasswordEncoder passwordEncoder;
    private final PasswordStrengthService passwordStrengthService;
    private final TokenRotationService tokenRotationService;
    private final EmailSender emailSender;

    private static final int MAX_LOGIN_ATTEMPTS = 3;
    private static final Duration LOCKOUT_DURATION = Duration.ofMinutes(15);
    private static final Duration ACCESS_TOKEN_TTL = Duration.ofMinutes(15);
    private static final Duration REFRESH_TOKEN_TTL = Duration.ofDays(7);
    private static final Duration RESET_TOKEN_TTL = Duration.ofMinutes(15);
    private static final Duration VERIFICATION_TOKEN_TTL = Duration.ofHours(24);
    private static final Duration ROTATION_GRACE_PERIOD = Duration.ofSeconds(5);

    public AuthServiceImpl(UserRepository userRepository,
                            RefreshTokenRepository refreshTokenRepository,
                            ResetTokenRepository resetTokenRepository,
                            TokenBlacklist tokenBlacklist,
                            LoginAttemptTracker loginAttemptTracker,
                            TokenProvider tokenProvider,
                            PasswordEncoder passwordEncoder,
                            PasswordStrengthService passwordStrengthService,
                            TokenRotationService tokenRotationService,
                            EmailSender emailSender) {
        this.userRepository = userRepository;
        this.refreshTokenRepository = refreshTokenRepository;
        this.resetTokenRepository = resetTokenRepository;
        this.tokenBlacklist = tokenBlacklist;
        this.loginAttemptTracker = loginAttemptTracker;
        this.tokenProvider = tokenProvider;
        this.passwordEncoder = passwordEncoder;
        this.passwordStrengthService = passwordStrengthService;
        this.tokenRotationService = tokenRotationService;
        this.emailSender = emailSender;
    }

    @Override
    public Mono<AuthResult> register(Email email, String displayName, String password) {
        return userRepository.findByEmail(email)
            .flatMap(existing -> Mono.<User>error(new EmailAlreadyRegisteredException(email)))
            .switchIfEmpty(
                passwordStrengthService.validate(password)
                    .then(Mono.fromCallable(() -> passwordEncoder.encode(password)))
                    .flatMap(hash -> {
                        var user = User.create(email.value(), hash, displayName);
                        return userRepository.insert(user);
                    })
            )
            .flatMap(this::generateAuthResult);
    }

    @Override
    public Mono<AuthResult> login(Email email, String password) {
        return loginAttemptTracker.isLocked(email)
            .flatMap(locked -> {
                if (locked) {
                    return loginAttemptTracker.getRemainingLockout(email)
                        .flatMap(remaining -> Mono.error(
                            new AccountLockedException(remaining)));
                }
                return findByEmailAndVerify(email, password);
            });
    }

    private Mono<AuthResult> findByEmailAndVerify(Email email, String password) {
        return userRepository.findByEmail(email)
            .switchIfEmpty(Mono.error(new AuthenticationFailedException()))
            .flatMap(user -> {
                if (!passwordEncoder.matches(password, user.passwordHash())) {
                    return loginAttemptTracker.recordFailedAttempt(email)
                        .then(Mono.error(new AuthenticationFailedException()));
                }
                return loginAttemptTracker.resetAttempts(email)
                    .then(generateAuthResult(user));
            });
    }

    @Override
    public Mono<AuthResult> refresh(String rawRefreshToken) {
        return Mono.fromCallable(() -> tokenProvider.decodeRefreshToken(rawRefreshToken))
            .flatMap(claims -> {
                var tokenHash = sha256(rawRefreshToken);

                return refreshTokenRepository.findByTokenHash(tokenHash)
                    .switchIfEmpty(Mono.error(new TokenRevokedException()))
                    .flatMap(storedToken -> {
                        if (storedToken.isExpired()) {
                            return Mono.error(new com.kanban.core.shared.error.TokenExpiredException());
                        }

                        var userId = storedToken.userId();
                        var jti = storedToken.id();
                        var issuedAt = storedToken.issuedAt();

                        return tokenRotationService.verifyAndRotate(
                                userId, jti, issuedAt, tokenHash, rawRefreshToken)
                            .flatMap(rotationResult -> {
                                if (rotationResult == RotationResult.REPLAY_DETECTED) {
                                    return handleReplay(userId)
                                        .then(Mono.<AuthResult>error(new TokenRevokedException()));
                                }
                                return userRepository.findById(userId)
                                    .switchIfEmpty(Mono.error(new UserNotFoundException(userId)))
                                    .flatMap(this::generateAuthResult);
                            });
                    });
            });
    }

    @Override
    public Mono<Void> logout(String rawRefreshToken) {
        var tokenHash = sha256(rawRefreshToken);
        return refreshTokenRepository.findByTokenHash(tokenHash)
            .flatMap(token -> {
                var remaining = Duration.between(Instant.now(), token.expiresAt());
                if (remaining.isNegative()) return Mono.<Void>empty();
                return tokenBlacklist.blacklist(tokenHash, remaining);
            })
            .then();
    }

    @Override
    public Mono<Void> logoutAll(UserId userId) {
        return userRepository.findById(userId)
            .switchIfEmpty(Mono.error(new UserNotFoundException(userId)))
            .flatMap(user -> {
                var updatedUser = user.updatePassword(user.passwordHash());
                return userRepository.update(updatedUser);
            })
            .then();
    }

    @Override
    public Mono<Void> requestPasswordReset(Email email) {
        return userRepository.findByEmail(email)
            .flatMap(user -> {
                if (!user.emailVerified()) {
                    return Mono.<Void>error(new EmailNotVerifiedException());
                }
                var rawToken = UUID.randomUUID().toString();
                var tokenHash = sha256(rawToken);
                var resetToken = PasswordResetToken.create(user.id(), tokenHash, RESET_TOKEN_TTL);
                return resetTokenRepository.save(resetToken)
                    .then(emailSender.sendPasswordResetEmail(email, rawToken));
            })
            .onErrorResume(EmptyResultDataAccessException.class, e -> Mono.empty())
            .then();
    }

    @Override
    public Mono<Void> resetPassword(String resetToken, String newPassword) {
        var tokenHash = sha256(resetToken);
        return resetTokenRepository.findPasswordResetByHash(tokenHash)
            .switchIfEmpty(Mono.error(new TokenExpiredException()))
            .flatMap(token -> {
                if (token.isExpired() || token.isUsed()) {
                    return Mono.error(new TokenExpiredException());
                }
                return passwordStrengthService.validate(newPassword)
                    .then(Mono.fromCallable(() -> passwordEncoder.encode(newPassword)))
                    .flatMap(newHash -> userRepository.findById(token.userId())
                        .switchIfEmpty(Mono.error(new UserNotFoundException(token.userId())))
                        .flatMap(user -> {
                            var updatedUser = user.updatePassword(newHash);
                            return userRepository.update(updatedUser);
                        })
                        .then(resetTokenRepository.markUsed(tokenHash))
                        .then(tokenBlacklist.blacklistAllForUser(token.userId()))
                        .then());
            });
    }

    @Override
    public Mono<Void> changePassword(UserId userId, String currentPassword, String newPassword) {
        return userRepository.findById(userId)
            .switchIfEmpty(Mono.error(new UserNotFoundException(userId)))
            .flatMap(user -> {
                if (!passwordEncoder.matches(currentPassword, user.passwordHash())) {
                    return Mono.error(new AuthenticationFailedException());
                }
                return passwordStrengthService.validate(newPassword)
                    .then(Mono.fromCallable(() -> passwordEncoder.encode(newPassword)))
                    .flatMap(newHash -> {
                        var updatedUser = user.updatePassword(newHash);
                        return userRepository.update(updatedUser);
                    })
                    .then(tokenBlacklist.blacklistAllForUser(userId))
                    .then();
            });
    }

    @Override
    public Mono<Void> verifyEmail(String verificationToken) {
        var tokenHash = sha256(verificationToken);
        return resetTokenRepository.findVerificationByHash(tokenHash)
            .switchIfEmpty(Mono.error(new TokenExpiredException()))
            .flatMap(token -> {
                if (token.isExpired() || token.isUsed()) {
                    return Mono.error(new TokenExpiredException());
                }
                return userRepository.findById(token.userId())
                    .switchIfEmpty(Mono.error(new UserNotFoundException(token.userId())))
                    .flatMap(user -> {
                        var verifiedUser = user.markEmailVerified();
                        return userRepository.update(verifiedUser)
                            .then(resetTokenRepository.markUsed(tokenHash));
                    });
            });
    }

    @Override
    public Mono<Void> resendVerification(UserId userId) {
        return userRepository.findById(userId)
            .switchIfEmpty(Mono.error(new UserNotFoundException(userId)))
            .flatMap(user -> {
                if (user.emailVerified()) return Mono.empty();
                var rawToken = UUID.randomUUID().toString();
                var tokenHash = sha256(rawToken);
                var verifToken = EmailVerificationToken.create(user.id(), tokenHash, VERIFICATION_TOKEN_TTL);
                return resetTokenRepository.save(verifToken)
                    .then(emailSender.sendVerificationEmail(user.email(), rawToken));
            });
    }

    @Override
    public Mono<User> getCurrentUser(UserId userId) {
        return userRepository.findById(userId)
            .switchIfEmpty(Mono.error(new UserNotFoundException(userId)));
    }

    private Mono<AuthResult> generateAuthResult(User user) {
        var accessToken = tokenProvider.generateAccessToken(user);
        var rawRefreshToken = tokenProvider.generateRefreshToken(user);
        var refreshTokenHash = sha256(rawRefreshToken);

        var refreshToken = RefreshToken.create(user.id(), refreshTokenHash, REFRESH_TOKEN_TTL);
        return refreshTokenRepository.save(refreshToken)
            .then(Mono.fromCallable(() -> new AuthResult(
                accessToken, rawRefreshToken, user)));
    }

    private Mono<Void> handleReplay(UserId userId) {
        return userRepository.findById(userId)
            .switchIfEmpty(Mono.error(new UserNotFoundException(userId)))
            .flatMap(user -> {
                var updatedUser = user.updatePassword(user.passwordHash());
                return userRepository.update(updatedUser)
                    .then(tokenBlacklist.blacklistAllForUser(userId))
                    .then(emailSender.sendCompromisedAlert(user.email()));
            })
            .then();
    }

    private static String sha256(String value) {
        try {
            var digest = MessageDigest.getInstance("SHA-256");
            var hashBytes = digest.digest(value.getBytes(StandardCharsets.UTF_8));
            return HexFormat.of().formatHex(hashBytes);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("SHA-256 not available", e);
        }
    }
}

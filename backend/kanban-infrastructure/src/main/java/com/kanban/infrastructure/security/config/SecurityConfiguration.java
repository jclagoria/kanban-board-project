package com.kanban.infrastructure.security.config;

import com.kanban.core.domain.service.PasswordStrengthService;
import com.kanban.core.domain.service.TokenRotationService;
import com.kanban.core.port.output.CommonPasswordChecker;
import com.kanban.core.port.output.RefreshTokenRepository;
import com.kanban.core.port.output.TokenBlacklist;
import com.kanban.infrastructure.security.config.TokenProperties;
import com.kanban.infrastructure.security.filter.JwtAuthenticationFilter;
import org.jspecify.annotations.NullMarked;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.SecurityWebFiltersOrder;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
@EnableWebFluxSecurity
@EnableConfigurationProperties(TokenProperties.class)
@NullMarked
public class SecurityConfiguration {

    @Bean
    public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http, JwtAuthenticationFilter jwtFilter) {
        return http
            .authorizeExchange(exchanges -> exchanges
                .pathMatchers(
                    "/v1/auth/register",
                    "/v1/auth/login",
                    "/v1/auth/refresh",
                    "/v1/auth/forgot-password",
                    "/v1/auth/reset-password",
                    "/v1/auth/verify-email",
                    "/v3/api-docs/**",
                    "/api-docs/**",
                    "/swagger-ui.html",
                    "/swagger-ui/**",
                    "/webjars/**",
                    "/actuator/health"
                ).permitAll()
                .anyExchange().authenticated()
            )
            .addFilterBefore(jwtFilter, SecurityWebFiltersOrder.AUTHENTICATION)
            .httpBasic(ServerHttpSecurity.HttpBasicSpec::disable)
            .formLogin(ServerHttpSecurity.FormLoginSpec::disable)
            .csrf(ServerHttpSecurity.CsrfSpec::disable)
            .build();
    }

    @Bean
    public PasswordStrengthService passwordStrengthService(CommonPasswordChecker commonPasswordChecker) {
        return new PasswordStrengthService(commonPasswordChecker);
    }

    @Bean
    public TokenRotationService tokenRotationService(RefreshTokenRepository refreshTokenRepository,
                                                      TokenBlacklist tokenBlacklist) {
        return new TokenRotationService(refreshTokenRepository, tokenBlacklist);
    }
}

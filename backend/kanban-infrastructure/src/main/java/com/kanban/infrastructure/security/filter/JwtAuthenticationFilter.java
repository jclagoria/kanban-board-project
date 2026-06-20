package com.kanban.infrastructure.security.filter;

import com.kanban.core.shared.error.TokenExpiredException;
import com.kanban.core.shared.error.TokenInvalidException;
import com.kanban.infrastructure.security.jwt.JwtTokenProvider;
import org.jspecify.annotations.NullMarked;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.ReactiveSecurityContextHolder;
import org.springframework.security.core.context.SecurityContextImpl;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

import java.util.List;

@Component
@Order(-100)
@NullMarked
public class JwtAuthenticationFilter implements WebFilter {

    private static final List<String> PUBLIC_PATHS = List.of(
        "/v1/auth/register", "/v1/auth/login", "/v1/auth/refresh",
        "/v1/auth/forgot-password", "/v1/auth/reset-password",
        "/v1/auth/verify-email",
        "/v3/api-docs", "/api-docs", "/swagger-ui", "/webjars",
        "/actuator/health"
    );

    private final JwtTokenProvider tokenProvider;

    public JwtAuthenticationFilter(JwtTokenProvider tokenProvider) {
        this.tokenProvider = tokenProvider;
    }

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
        var path = exchange.getRequest().getURI().getPath();

        if (isPublicPath(path)) {
            return chain.filter(exchange);
        }

        var authHeader = exchange.getRequest().getHeaders().getFirst(HttpHeaders.AUTHORIZATION);
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return writeErrorResponse(exchange, HttpStatus.UNAUTHORIZED, "TOKEN_MISSING");
        }

        var token = authHeader.substring(7);
        if (token.isBlank()) {
            return writeErrorResponse(exchange, HttpStatus.UNAUTHORIZED, "TOKEN_MISSING");
        }

        return tokenProvider.validateAccessToken(token)
            .flatMap(claims -> {
                var authentication = new UsernamePasswordAuthenticationToken(
                    claims.userId(), null, List.of()
                );
                var securityContext = new SecurityContextImpl(authentication);
                return chain.filter(exchange)
                    .contextWrite(ReactiveSecurityContextHolder.withSecurityContext(Mono.just(securityContext)));
            })
            .onErrorResume(TokenExpiredException.class, e ->
                writeErrorResponse(exchange, HttpStatus.UNAUTHORIZED, "TOKEN_EXPIRED"))
            .onErrorResume(TokenInvalidException.class, e ->
                writeErrorResponse(exchange, HttpStatus.UNAUTHORIZED, "TOKEN_INVALID"));
    }

    private boolean isPublicPath(String path) {
        return PUBLIC_PATHS.stream().anyMatch(path::startsWith);
    }

    private Mono<Void> writeErrorResponse(ServerWebExchange exchange, HttpStatus status, String code) {
        exchange.getResponse().setStatusCode(status);
        exchange.getResponse().getHeaders().set(HttpHeaders.CONTENT_TYPE, "application/json");
        var body = "{\"code\":\"" + code + "\",\"message\":\"" + status.getReasonPhrase() + "\"}";
        var buffer = exchange.getResponse().bufferFactory().wrap(body.getBytes());
        return exchange.getResponse().writeWith(Mono.just(buffer));
    }
}

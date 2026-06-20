package com.kanban.interfaces.config;

import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.servers.Server;
import org.jspecify.annotations.NullMarked;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@NullMarked
@Configuration
@SecurityScheme(
    name = "bearerAuth",
    type = SecuritySchemeType.HTTP,
    scheme = "bearer",
    bearerFormat = "JWT",
    description = "JWT token obtained from POST /v1/auth/login"
)
public class OpenApiConfig {

    @Bean
    public OpenAPI kanbanOpenAPI() {
        return new OpenAPI()
            .info(new Info()
                .title("Kanban API")
                .description("""
                    API pública del sistema de gestión de proyectos Kanban Multi-Vista.
                    
                    ## Autenticación
                    Todas las solicitudes a la API requieren un token JWT en el header
                    `Authorization: Bearer <token>`. Los tokens se obtienen mediante
                    el endpoint `POST /v1/auth/login`.
                    
                    ## Rate Limiting
                    La API pública tiene un límite de 1,000 solicitudes por minuto.
                    Las respuestas incluyen headers `X-RateLimit-Remaining` y `Retry-After`.
                    """)
                .version("1.0.0")
                .contact(new Contact()
                    .name("Kanban Engineering")
                    .email("api@kanban.dev")
                    .url("https://developers.kanban.dev"))
                .license(new License()
                    .name("Terms of Service")
                    .url("https://kanban.dev/terms")))
            .addServersItem(new Server()
                .url("https://api.kanban.dev")
                .description("Producción"))
            .addServersItem(new Server()
                .url("https://staging-api.kanban.dev")
                .description("Staging"))
            .externalDocs(new ExternalDocumentation()
                .description("Guía de integración")
                .url("https://developers.kanban.dev/docs"));
    }

    @Bean
    public GroupedOpenApi v1Api() {
        return GroupedOpenApi.builder()
            .group("v1")
            .displayName("API v1")
            .pathsToMatch("/v1/**")
            .build();
    }

    @Bean
    public GroupedOpenApi internalApi() {
        return GroupedOpenApi.builder()
            .group("internal")
            .displayName("Internal API")
            .pathsToMatch("/internal/**", "/actuator/**")
            .addOpenApiCustomizer(api -> api.info(new Info()
                .title("Kanban Internal API")
                .version("1.0.0")
                .description("Endpoints internos. NO documentados para consumo externo.")))
            .build();
    }
}

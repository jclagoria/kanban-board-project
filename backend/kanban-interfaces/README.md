# kanban-interfaces

Web layer — inbound HTTP adapters.

## Responsibility

- WebFlux REST controllers (`@RestController`)
- Request / response DTOs
- Global error handler (`@ControllerAdvice`)
- SSE endpoints for real-time events
- OpenAPI documentation (SpringDoc)

## Dependencies

| Dependency | Scope | Reason |
|---|---|---|
| `kanban-application` | compile | Use case services |
| `spring-boot-starter-webflux` | compile | Reactive HTTP |
| `spring-boot-starter-security` | compile | Method-level security |
| `springdoc-openapi-starter-webflux-ui` | compile | OpenAPI / Swagger UI |

## Design Rules

- Controllers are thin — delegate to application services
- DTOs are records
- No domain models exposed directly in API responses
- SSE for real-time board updates

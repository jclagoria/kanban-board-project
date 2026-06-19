# kanban-infrastructure

All infrastructure concerns — persistence, security, caching, rate limiting, observability.

## Responsibility

| Area | Implementation |
|---|---|
| **Persistence** | R2DBC entity records, mappers, repositories (via `R2dbcEntityTemplate`) |
| **Migrations** | Flyway SQL scripts in `src/main/resources/db/migration/` |
| **Caching** | Redis via Lettuce (`spring-boot-starter-data-redis-reactive`) |
| **Auth** | JWT filters (JJWT 0.12.5), TOTP 2FA (dev.samstevens), OAuth clients |
| **Resilience** | Resilience4j circuit breaker, rate limiter, retry |
| **Observability** | Actuator, structured JSON logging (logstash-logback-encoder), dotenv |
| **Validation** | `spring-boot-starter-validation` |
| **Testing** | JUnit 5, reactor-test, spring-security-test |

## Dependencies

| Dependency | Scope | Reason |
|---|---|---|
| `kanban-application` | compile | Domain services to implement |
| `r2dbc-postgresql` | compile | Reactive PostgreSQL driver |
| `flyway-core` / `flyway-database-postgresql` | compile | Schema migrations |
| `postgresql` | runtime | JDBC driver for Flyway |
| `spring-boot-starter-data-redis-reactive` | compile | Redis client |
| `resilience4j-*` | compile | Circuit breaker, rate limiter |
| `jjwt-*` | api/impl/jackson | JWT signing and parsing |
| `totp` | compile | TOTP 2FA |
| `springboot3-dotenv` | compile | .env file support |
| `logstash-logback-encoder` | compile | JSON log output |
| `spring-boot-starter-test` | test | Test framework |
| `reactor-test` | test | Reactive test utilities |
| `spring-security-test` | test | Security test utilities |

## Design Rules

- Implements port interfaces from `kanban-core`
- Entity records live in `persistence/entity/`
- Mappers convert entities ↔ domain models in `persistence/mapper/`
- Repositories live in `persistence/r2dbc/`

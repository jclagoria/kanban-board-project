# Kanban Multi-Vista

Multi-view kanban project management system — reactive (WebFlux + R2DBC) backend.

> **Status:** Work in progress — more changes coming.

## Architecture

```
kanban-bootstrap  (entry point, @SpringBootApplication)
    ├── kanban-interfaces  (REST controllers, DTOs, error handler)
    ├── kanban-application (use cases / application services)
    │   └── kanban-core    (domain models, VOs, port interfaces)
    └── kanban-infrastructure (R2DBC, Redis, Security, Integrations)
```

## Modules

| Module | Responsibility | Key Dependencies |
|---|---|---|
| `kanban-core` | Domain logic, Value Objects, Exceptions, Port interfaces | jspecify, reactor-core |
| `kanban-application` | Use case orchestration, application mappers | kanban-core, spring-context |
| `kanban-infrastructure` | Persistence (R2DBC + Flyway), Redis, Resilience4j, JWT, TOTP | kanban-application, r2dbc-postgresql, flyway, redis, jjwt, totp, logstash |
| `kanban-interfaces` | WebFlux REST controllers, SSE, OpenAPI | kanban-application, spring-webflux, spring-security, springdoc |
| `kanban-bootstrap` | Spring Boot entry point, component scan, config | kanban-interfaces, kanban-infrastructure |

## Tech Stack

- **Java 21** + **Spring Boot 4.1.0** (reactive stack)
- **PostgreSQL** via **R2DBC** (`org.postgresql:r2dbc-postgresql:1.1.1.RELEASE`)
- **Flyway** for schema migrations
- **Redis** (Lettuce) for caching / rate limiting
- **Resilience4j** (circuit breaker, rate limiter, retry)
- **JJWT 0.12.5** for JWT auth
- **TOTP 1.7.1** for 2FA
- **SpringDoc OpenAPI** (`springdoc-openapi-starter-webflux-ui`)
- **Logstash Logback Encoder** for structured JSON logging

## Build

Requires **JDK 21** and **Maven 3.9+**.

```bash
# Compile all modules
mvn clean compile

# Run tests
mvn test

# Package (creates fat JAR in kanban-bootstrap/target/)
mvn clean package -DskipTests

# Skip tests and build quickly
mvn clean package -DskipTests -q
```

## Artifact Generation

### Production JAR

The executable JAR is built by `kanban-bootstrap` using `spring-boot-maven-plugin` (inherited from the Spring Boot parent POM):

```bash
mvn clean package -DskipTests
```

Output: `kanban-bootstrap/target/kanban-bootstrap-0.0.1-SNAPSHOT.jar`

### Run

```bash
java -jar kanban-bootstrap/target/kanban-bootstrap-0.0.1-SNAPSHOT.jar
```

### Profiles

```bash
# Development (default, in-memory-like defaults)
java -jar kanban-bootstrap/target/kanban-bootstrap-0.0.1-SNAPSHOT.jar

# Production
java -jar kanban-bootstrap/target/kanban-bootstrap-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod
```

Environment variables control database, Redis, and JWT settings (see `application.yml`).

## Dependencies

All dependency versions are managed in the root `pom.xml`:

| Dependency | Version | Managed In |
|---|---|---|
| Spring Boot | 4.1.0 (BOM) | Parent POM |
| r2dbc-postgresql | 1.1.1.RELEASE | `<properties>` |
| Resilience4j | 2.3.0 | `<properties>` |
| SpringDoc | 2.8.0 | `<properties>` |
| JJWT | 0.12.5 | `<properties>` |
| TOTP | 1.7.1 | `<properties>` |
| dotenv | 5.0.1 | `<properties>` |
| Logstash | 8.0 | `<properties>` |
| jspecify | 1.0.0 | `<properties>` |
| Maven Compiler Plugin | 3.13.0 | `<pluginManagement>` |
| Maven Surefire Plugin | 3.5.0 | `<pluginManagement>` |

## Versions

Current: `0.0.1-SNAPSHOT`

### Incrementing

Edit `<version>` in the root `pom.xml`, then:

```bash
mvn versions:set -DnewVersion=<version>
mvn versions:commit
```

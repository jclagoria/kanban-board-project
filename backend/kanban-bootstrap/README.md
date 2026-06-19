# kanban-bootstrap

Spring Boot entry point — wires everything together.

## Responsibility

- `@SpringBootApplication` class (`KanbanApplication.java`)
- `@ComponentScan` discovers all beans in sibling modules
- `application.yml` / `application-dev.yml` / `application-prod.yml`
- Flyway auto-configuration
- Produce the executable JAR (via `spring-boot-maven-plugin` in parent POM)

## Build

```bash
# From project root
mvn clean package -DskipTests
# JAR: kanban-bootstrap/target/kanban-bootstrap-0.0.1-SNAPSHOT.jar
```

## Run

```bash
# Development
java -jar target/kanban-bootstrap-0.0.1-SNAPSHOT.jar

# Production
java -jar target/kanban-bootstrap-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod
```

## Configuration

All settings are externalized via `application.yml` with `@...@` placeholders. Key environment variables:

| Variable | Default | Description |
|---|---|---|
| `PORT` | `8080` | HTTP port |
| `DB_HOST` | `localhost` | PostgreSQL host |
| `DB_PORT` | `5432` | PostgreSQL port |
| `DB_NAME` | `kanban` | Database name |
| `DB_USER` | `kanban` | Database user |
| `DB_PASSWORD` | `kanban` | Database password |
| `REDIS_HOST` | `localhost` | Redis host |
| `REDIS_PORT` | `6379` | Redis port |
| `REDIS_PASSWORD` | (empty) | Redis password |

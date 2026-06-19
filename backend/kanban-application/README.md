# kanban-application

Use case orchestration layer — application services, DTO mappers.

## Responsibility

- Implements use cases defined in `spect/` (CardServiceImpl, BoardServiceImpl, AuthServiceImpl, etc.)
- Transactional boundaries (`@Transactional`)
- Converts between domain models and DTOs
- Calls port interfaces injected from `kanban-core`

## Dependencies

| Dependency | Scope | Reason |
|---|---|---|
| `kanban-core` | compile | Domain models, port interfaces |
| `spring-context` | provided | `@Service`, `@Transactional` annotations |
| `spring-tx` | provided | Transaction support |

## Design Rules

- No framework imports beyond `@Service`, `@Transactional`
- No direct database access — delegates to port interfaces
- Services are stateless

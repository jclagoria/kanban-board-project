# kanban-core

Pure domain layer — zero framework coupling, minimal dependencies.

## Responsibility

- Domain models (Card, Board, BoardList, User, etc.)
- Value Objects (CardId, BoardId, UserId, Position, etc.)
- Domain events (sealed `DomainEvent` interface)
- Domain services (BoardService, CardService, etc.)
- Port interfaces (`CardRepository`, `BoardRepository`, `UserRepository`, etc.)
- `DomainException` hierarchy with HttpStatus and context map
- `EventPublisher` interface for outbox / event bus

## Dependencies

| Dependency | Scope | Reason |
|---|---|---|
| `jspecify` | compile | `@NullMarked` / `@Nullable` annotations |
| `reactor-core` | compile | `Mono<T>` / `Flux<T>` in port interfaces |
| `spring-web` | provided | `HttpStatus` enum in `DomainException` |

## Design Rules

- No Spring annotations (no `@Service`, `@Repository`, etc.)
- No database / framework imports
- Domain models are immutable — behavioral methods return new instances
- Port interfaces return `Mono<T>` / `Flux<T>` — domain stays reactive-agnostic

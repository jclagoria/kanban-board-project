# Kanban Board — Functional Mockup

> **⚠️ Work in Progress — Active Development**
>
> This project is under active development. APIs, components, and architecture are subject to change. More features and refinements are coming soon.

An interactive wireframe prototype for a Kanban board application with multiple views, authentication flows, drag & drop, and integrations. Built to explore UX patterns and edge cases before production implementation.

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, RSC) |
| UI | React 19, shadcn/ui (base-nova) |
| Styling | Tailwind CSS 4, tw-animate-css |
| State | Zustand 5 (persist middleware) |
| Data Fetching | TanStack React Query 5 |
| Forms | react-hook-form + zod 4 |
| Drag & Drop | @dnd-kit |
| Icons | lucide-react |
| Testing | Vitest + Testing Library + MSW |

## Architecture

```
src/
├── app/               Next.js App Router pages
│   ├── (auth)/        Auth layouts & pages
│   ├── (dashboard)/   Dashboard layouts & pages
│   ├── onboarding/    Onboarding flow
│   ├── settings/      Settings pages
│   └── integrations/  Integration pages
├── components/        Shared components
│   ├── layout/        Shells, sidebar, header, FlowBar
│   ├── ui/            shadcn/ui primitives
│   ├── shared/        Cross-feature shared components
│   └── error/         Error boundaries
├── features/          Domain modules
│   ├── auth/          Login, register, MFA, session management
│   ├── board/         Board creation, templates, archived
│   ├── kanban/        Kanban view with drag & drop
│   ├── card/          Card detail, custom fields, validation
│   ├── timeline/      Gantt/timeline view
│   ├── table/         Table/spreadsheet view
│   ├── calendar/      Calendar view
│   ├── integrations/  GitHub integration
│   ├── notifications/ @mentions, notifications
│   └── onboarding/    Tour, help, template gallery
├── lib/               Utilities
│   ├── flow/          Flow engine (graph-based navigation)
│   └── types/         TypeScript type definitions
├── screens/           Central screen registry (step → component)
├── stores/            Zustand stores
│   ├── authStore.ts
│   ├── boardStore.ts
│   ├── navigationStore.ts
│   ├── uiStore.ts
│   └── viewStore.ts
└── styles/            Global CSS
```

## Key Design Decisions

- **Flow Engine** — Navigation is driven by a directed graph of steps and transitions, not static routes. Each "screen" is a step in a flow with defined triggers (actions like `submit`, `cancel`, `retry`).
- **Screen Registry** — ~90 wireframe screens are registered in a central map and resolved dynamically from the current flow step.
- **Mock Backend** — Auth and data operations are simulated with in-memory delays (no real API).
- **Edge Case Coverage** — Wireframes cover loading, empty, error, concurrent conflict, rate limiting, keyboard navigation, and accessibility states for every feature.

## Wireframe Coverage

| Feature | Screens |
|---------|---------|
| Auth | 19 — login, register, password reset, MFA, session expiry, compromise |
| Board Creation | 10 — template gallery, form validation, duplicate, quota, invite |
| Kanban View | 8 — populated board, drag states, keyboard, conflict, undo |
| Card Detail | 6 — save states, unsaved changes, concurrent conflict |
| Timeline | 10 — week/month nav, drag edges, dependency arrows |
| Table View | 6 — sort, filter, inline edit, empty cells |
| Custom Fields | 10 — settings, forms, reorder, delete |
| Validation | 6 — required fields, blocked moves, range, email |
| GitHub Integration | 5 — settings, linked issues, search, errors |
| Mentions & Notifications | 7 — autocomplete, chips, grouped, rate limits |
| Onboarding | 8 — multi-step tour, skip, help, templates, errors |

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server (webpack) |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run Next.js lint |

## Testing

Tests are not yet implemented. The testing setup (Vitest, Testing Library, MSW) is pre-configured and ready for use.

## What's Coming

- Real API integration
- Test coverage for all flows
- Production-grade auth flows
- Performance optimization
- Accessibility audit pass
- Responsive/mobile adaptations

# Specification: Multi-View Kanban Project Management System

## Overview
Visual project management web system inspired by Trello, but with multiple views (Kanban, Timeline, Calendar, Table), enriched and customizable card fields, and integrations with external tools. Targeted at small to medium teams that need flexibility without sacrificing power.

## Assumptions (Agreed)
1. **Target users** — Teams of 2-50 people managing projects.
2. **Primary platform** — Modern, responsive web application.
3. **Device support** — Desktop web initially; no native mobile app in the first release.
4. **Core functionality** — Multiple views: Kanban (drag & drop), Timeline/Gantt, Calendar, and Table.
5. **Real-time collaboration** — Simultaneous editing visible within seconds for all board members.
6. **Authentication** — Email/password; no SSO/SAML in the initial version.
7. **Persistence** — 100% cloud; no offline support.
8. **Card fields** — Enriched fields: title, description, comments, checklist, labels, due date, file attachments + customizable fields (dropdowns, numbers, multiple dates, card relationships).
9. **Notifications** — In-app + email for @mentions, assignments, upcoming dates, and changes to followed cards.
10. **Roles & permissions** — Board admin (full control) and members (edit/view); no additional hierarchical roles.
11. **Business model** — Freemium: free plan with board/card/member limits; paid plan with no restrictions.
12. **Performance** — Initial board load <3s; drag & drop and real-time changes with <500ms latency.
13. **Integrations** — Public REST API + 5 pre-built integrations: Slack, Google Drive, Jira, GitHub, Google Calendar.
14. **Language** — English only at launch.
15. **Security** — Encryption in transit (TLS 1.3), encryption at rest (AES-256), optional 2FA, audit logs, prepared for GDPR and SOC2 Type II compliance, region-configurable hosting (EU, US).

## Functional Requirements

### Board Management
- Create, edit, archive, and delete boards.
- Invite and remove board members by email.
- Configure name, description, cover image, and visibility (private/invite-only).

### Multiple Views
- **Kanban**: Lists with draggable cards between lists and reorderable columns.
- **Timeline/Gantt**: Card visualization with dates on a timeline; configurable duration.
- **Calendar**: Cards displayed in calendar view (day/week/month); drag to change dates.
- **Table**: Tabular view with customizable columns (card fields as columns); filters and sorting.

### Enriched Cards
- Standard fields: title, rich-text description, threaded comments, checklist, labels (color + name), due dates, file attachments (drag & drop), cover image.
- Customizable fields (per card type or board): dropdown, number, date, email, short/long text, checkbox, URL.
- Card relationships: "blocks", "related to", "duplicate of" links with bidirectional navigation.
- Per-card change history.

### Collaboration
- Cursor/avatar of other users viewing the same board.
- Real-time notifications via SSE.
- @mentions to members with in-app/email notification.
- Card assignment to one or multiple members.

### Integrations
- **Slack**: Board/card change notifications to configurable channels.
- **Google Drive**: Attach files from Drive; document preview.
- **Jira**: Link cards to Jira issues; bidirectional status sync.
- **GitHub**: Link cards to PRs/Issues with automatic references.
- **Google Calendar**: Due date sync; events created from cards.
- **Public API**: REST with access tokens; OpenAPI documentation.

### Administration
- Board activity dashboard.
- Exportable audit logs.
- Member management (invite, remove, change role).
- Per-board integration configuration.

## Non-Functional Requirements

### Performance
- Full board load: <3 seconds under normal conditions (p95).
- Drag & drop operations: visual feedback <200ms, persistence <500ms.
- Real-time synchronization: latency <1s between users (p99).
- API: response time <200ms for read endpoints, <500ms for write endpoints (p95).

### Scalability
- Support for 1,000 boards, 10,000 cards per board, 100 members per board.
- Capacity for 10,000 concurrent users at launch.
- Horizontally scalable architecture (stateless app servers, scalable DB).

### Security
- Encryption in transit: TLS 1.3 mandatory.
- Encryption at rest: AES-256 for sensitive data (passwords, card content).
- Two-factor authentication (2FA) via TOTP.
- Audit logs: immutable record of all write actions (who, what, when).
- Session policy: configurable expiration, forced revocation.
- OWASP Top 10 mitigated (XSS, CSRF, SQLi, etc.).

### Availability
- SLA target: 99.9% uptime.
- Automated daily backups with 30-day retention.
- Disaster recovery: RTO <4h, RPO <1h.

### Compliance
- GDPR-ready: right to erasure, data export, explicit consent.
- SOC2 Type II-ready: security, availability, confidentiality controls.
- Region-configurable hosting: EU (Frankfurt/Ireland) or US (Virginia/Oregon).

### Observability
- Centralized structured logs (JSON format).
- Business and system metrics (active boards, cards created, latency).
- Configurable alerts for error spikes or performance degradation.

### Accessibility
- Target level: WCAG AA (legal standard in EU, UK, Canada).
- Full keyboard navigation, screen reader support, sufficient contrast.

## User Stories / Acceptance Criteria

### US-01: Create Kanban board
> As a user, I want to create a board to start organizing my project.

**AC:**
- The authenticated user can create a board with a name and optional description.
- The board appears immediately on the board dashboard.
- By default, it is created with 3 lists (To Do, In Progress, Done).

### US-02: Drag card between lists
> As a user, I want to move cards between lists by dragging them to reflect progress.

**AC:**
- The user can grab a card and drop it into another list.
- The position within the list is preserved.
- The change is persisted automatically and reflected in real time to other users.

### US-03: Switch to Timeline view
> As a user, I want to see my cards with dates on a timeline to plan sprints.

**AC:**
- From the view selector, the user can switch to Timeline.
- Cards with start and due dates appear as bars on the timeline.
- The duration can be dragged to adjust dates.

### US-04: Add custom field to card
> As a user, I want to add custom fields to cards to capture data specific to my workflow.

**AC:**
- The board admin can define custom fields (dropdown, number, date, etc.).
- The fields appear on all cards in that board.
- The fields are visible and editable in all views.

### US-05: Link card to GitHub
> As a user, I want to link a card to a GitHub Issue for traceability.

**AC:**
- The user connects their GitHub account from settings.
- From a card, they can search and link a GitHub issue.
- The issue status is shown on the card and updates automatically.

### US-06: Receive @mention notification
> As a user, I want to receive a notification when someone @mentions me on a card.

**AC:**
- Typing @name in comments or description triggers an autocomplete of members.
- The mentioned member receives in-app + email notification within <1 minute.

### US-07: Log in with email and password
> As a user, I want to register and log in with email and password to securely access my boards.

**AC:**
- The user can register with email, name, and password.
- The password is stored hashed with BCrypt (or Argon2).
- The user logs in with email + password and receives a **JWT access token** (short: 15 min) and a **refresh token** (long: 7 days).
- The refresh token allows obtaining a new access token without re-entering credentials.
- The JWT includes `userId`, `email`, `role`, and `plan` in the claims.
- The `POST /v1/auth/logout` endpoint invalidates the refresh token (Redis blacklist).
- After 3 consecutive failed login attempts, the account is locked for 15 minutes.
- The user can log out from any device.
- All protected endpoints return `401` if the token is expired or invalid.
- The session expires when the password is changed (all refresh tokens are invalidated).

### US-08: Complete interactive onboarding
> As a new user, I want a guided tour and predefined templates to get started quickly without setting everything up from scratch.

**AC:**
- On first login, an interactive tour of 3-5 steps is shown highlighting the main features (views, cards, collaboration).
- The tour can be skipped at any time with a "Skip introduction" button.
- When creating the first board, a gallery with 5-10 predefined categorized templates is shown (Project Management, Sprint, Content Calendar, CRM, Engineering, Marketing, etc.).
- Selecting a template creates a preloaded board with lists, custom fields, and initial configuration.
- The tour is not shown again after being completed or skipped.
- The user can replay the tour from the help menu at any time.

## Out of Scope
- **Native mobile app** (iOS/Android) — Not included at launch; responsive web covers mobile access.
- **Offline mode** — The system requires permanent connectivity.
- **SSO / SAML / LDAP** — Postponed to a later iteration.
- **Automations / Rules (like Butler in Trello)** — No conditional rule automations in the initial version.
- **Integration marketplace** — Integrations are fixed; no third-party marketplace.
- **Native time tracking** — No timers or worked hours logging.
- **Multi-language** — English only at launch.
- **White-label / custom branding** — No client-specific brand customization.
- **GraphQL in public API** — REST + Webhooks only; no GraphQL in the initial version.

## Refined Decisions

### R1: Concrete billing model
- **Free plan**: 10 boards, 500 cards per board, 10 members per board, 100 MB attachment storage.
- **Paid plan**: No restrictions on boards, cards, members, or storage.

### R2: Public API scope
- **Type**: Full REST + Webhooks (no GraphQL initially).
- **Rate limit**: 1,000 requests per minute.
- **Versioning**: By URL (`/v1/`, `/v2/`).
- **Covered endpoints**: Full CRUD for boards, lists, cards, custom fields, and members.

### R3: Custom field depth
- Basic data types (dropdown, number, date, email, text, checkbox, URL).
- Validation rules: numeric ranges, regex format, required/optional field.
- No formulas or field dependencies in this iteration.

### R4: Gantt view — Card dependencies
- Visual dependency arrows ("blocks" / "blocked by").
- Automatic date propagation: when moving a card, its dependents adjust.
- No critical path highlighting in this iteration.

### R5: Backup and retention strategy by plan
- **Free plan**: Manual data export (JSON/CSV). No automatic backups.
- **Paid plan**: Daily automatic backups + manual export.

### R6: Onboarding and templates
- Interactive tour of 3-5 steps on first login.
- Gallery of 5-10 predefined templates when creating a board (Project Management, Sprint, Content Calendar, CRM, etc.).

### R7: Accessibility (WCAG)
- **Target level**: WCAG AA (legal standard in EU, UK, Canada).
- Full keyboard navigation, screen reader support, sufficient contrast, ARIA roles.

## Refinable Points (Closed)
All identified refinable points have been reviewed and resolved. There are no pending aspects for the current specification.

## Traceability Matrix

|       Refined Decision        |   User Story(s)   | Scope                                |
|:-----------------------------:|:-----------------:|--------------------------------------|
|      R1 — Billing model       | — (cross-cutting) | Plan limits, storage enforcement     |
|     R2 — Public API scope     | — (cross-cutting) | REST API, webhooks, rate limiting    |
|      R3 — Custom fields       |       US-04       | Field definitions, validation rules  |
|    R4 — Gantt dependencies    |       US-03       | Card relationships, date propagation |
|   R5 — Backup and retention   | — (cross-cutting) | Data lifecycle, export, purge        |
| R6 — Onboarding and templates |     **US-08**     | Interactive tour, template gallery   |
|    R7 — Accessibility WCAG    | — (cross-cutting) | ARIA, keyboard nav, screen readers   |

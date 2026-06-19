import type { FlowDef } from '@/lib/types/flow'

export const mentionFlow: FlowDef = {
  id: 'mention',
  name: '@mention & notifications',
  entryPoint: 'mention-autocomplete-trigger',
  steps: [
    {
      id: 'mention-autocomplete-trigger',
      label: '@mention — Autocomplete trigger',
      layout: 'dashboard',
      transitions: [
        { action: 'Type @ → autocomplete', target: 'mention-autocomplete-filtered' },
        { action: '→ Chip states', target: 'mention-chip-states' },
        { action: 'Close →', target: 'board-view' },
      ],
    },
    {
      id: 'mention-autocomplete-filtered',
      label: '@mention — Filtered + no results',
      layout: 'dashboard',
      transitions: [
        { action: 'Select member →', target: 'mention-chip-states' },
        { action: '← Back', target: 'mention-autocomplete-trigger' },
      ],
    },
    {
      id: 'mention-chip-states',
      label: '@mention — Chip states',
      layout: 'dashboard',
      transitions: [
        { action: 'Remove chip →', target: 'mention-autocomplete-trigger' },
        { action: '→ Notification panel', target: 'mention-notification-panel' },
        { action: 'Close →', target: 'board-view' },
      ],
    },
    {
      id: 'mention-notification-panel',
      label: 'Notifications — Panel + badge',
      layout: 'dashboard',
      transitions: [
        { action: '→ Filtered', target: 'mention-notification-filtered' },
        { action: '→ Grouped expanded', target: 'mention-grouped-expanded' },
        { action: '→ Rate limit warning', target: 'mention-rate-limit' },
        { action: 'Close →', target: 'board-view' },
        { action: '→ Settings', target: 'mention-settings' },
      ],
    },
    {
      id: 'mention-notification-filtered',
      label: 'Notifications — Filtered',
      layout: 'dashboard',
      transitions: [
        { action: '← All notifications', target: 'mention-notification-panel' },
      ],
    },
    {
      id: 'mention-grouped-expanded',
      label: 'Notifications — Grouped expanded',
      layout: 'dashboard',
      transitions: [
        { action: '← Collapse', target: 'mention-notification-panel' },
      ],
    },
    {
      id: 'mention-rate-limit',
      label: '@mention — Rate limit warning',
      layout: 'dashboard',
      transitions: [
        { action: '← Back', target: 'mention-notification-panel' },
      ],
    },
    {
      id: 'mention-settings',
      label: 'Notification preferences',
      layout: 'dashboard',
      transitions: [
        { action: 'Save →', target: 'board-view' },
        { action: '← Back', target: 'mention-notification-panel' },
      ],
    },
  ],
}

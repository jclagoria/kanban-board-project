import type { FlowDef } from '@/lib/types/flow'

export const boardFlow: FlowDef = {
  id: 'board',
  name: 'Board views & interactions',
  entryPoint: 'board-view',
  steps: [
    // ─── Board entry ───
    {
      id: 'board-view',
      label: 'Board — Kanban view',
      layout: 'dashboard',
      transitions: [
        { action: '→ Card detail (populated)', target: 'card-detail-populated' },
        { action: '→ Card detail (empty)', target: 'card-detail-empty' },
        { action: '→ Board settings', target: 'cf-settings-empty' },
        { action: '→ Timeline view', target: 'timeline-populated' },
        { action: '→ Table view', target: 'tv-populated' },
        { action: '← Back to dashboard', target: 'board-dashboard' },
      ],
    },
    // ─── Kanban drag ───
    {
      id: 'drag-populated',
      label: 'Drag — Populated board',
      layout: 'dashboard',
      transitions: [
        { action: 'Start drag →', target: 'drag-mid-drag' },
        { action: '→ Keyboard move', target: 'drag-keyboard' },
        { action: '→ List reorder', target: 'drag-list-reorder' },
        { action: '← Back to board', target: 'board-view' },
      ],
    },
    {
      id: 'drag-mid-drag',
      label: 'Drag — Card being dragged',
      layout: 'dashboard',
      transitions: [
        { action: 'Drop (success) →', target: 'drag-drop-success' },
        { action: 'Drop (error) →', target: 'drag-drop-error' },
        { action: 'Cancel drag', target: 'drag-populated' },
      ],
    },
    {
      id: 'drag-drop-success',
      label: 'Drag — Success + undo toast',
      layout: 'dashboard',
      transitions: [
        { action: 'Undo →', target: 'drag-populated' },
        { action: 'Continue →', target: 'board-view' },
      ],
    },
    {
      id: 'drag-drop-error',
      label: 'Drag — Error + revert',
      layout: 'dashboard',
      transitions: [
        { action: '← Retry', target: 'drag-populated' },
        { action: '← Back to board', target: 'board-view' },
      ],
    },
    {
      id: 'drag-keyboard',
      label: 'Drag — Keyboard move dialog',
      layout: 'dashboard',
      transitions: [
        { action: 'Move →', target: 'board-view' },
        { action: 'Cancel →', target: 'drag-populated' },
      ],
    },
    {
      id: 'drag-list-reorder',
      label: 'Drag — List reorder',
      layout: 'dashboard',
      transitions: [
        { action: 'Done →', target: 'board-view' },
      ],
    },
    {
      id: 'drag-conflict',
      label: 'Drag — Concurrent conflict',
      layout: 'dashboard',
      transitions: [
        { action: '→ Reload board', target: 'board-view' },
      ],
    },
    {
      id: 'drag-undo-expired',
      label: 'Drag — Undo expired',
      layout: 'dashboard',
      transitions: [
        { action: '→ OK', target: 'board-view' },
      ],
    },
    // ─── Card detail ───
    {
      id: 'card-detail-populated',
      label: 'Card detail — Populated',
      layout: 'dashboard',
      transitions: [
        { action: '→ Custom fields', target: 'cf-settings-populated' },
        { action: '→ GitHub linked issues', target: 'gh-linked-issues' },
        { action: '→ @mention', target: 'mention-autocomplete-trigger' },
        { action: '→ Edit (unsaved)', target: 'card-detail-unsaved' },
        { action: 'Close →', target: 'board-view' },
      ],
    },
    {
      id: 'card-detail-empty',
      label: 'Card detail — Empty placeholders',
      layout: 'dashboard',
      transitions: [
        { action: 'Close →', target: 'board-view' },
      ],
    },
    {
      id: 'card-detail-saving',
      label: 'Card detail — Saving indicator',
      layout: 'dashboard',
      transitions: [
        { action: '→ Save error', target: 'card-detail-error' },
        { action: '→ Saved', target: 'card-detail-populated' },
      ],
    },
    {
      id: 'card-detail-error',
      label: 'Card detail — Save error',
      layout: 'dashboard',
      transitions: [
        { action: 'Retry →', target: 'card-detail-populated' },
        { action: 'Discard →', target: 'board-view' },
      ],
    },
    {
      id: 'card-detail-unsaved',
      label: 'Card detail — Unsaved changes',
      layout: 'dashboard',
      transitions: [
        { action: 'Save →', target: 'card-detail-populated' },
        { action: 'Discard →', target: 'board-view' },
        { action: 'Cancel →', target: 'card-detail-populated' },
      ],
    },
    {
      id: 'card-detail-conflict',
      label: 'Card detail — Concurrent edit',
      layout: 'dashboard',
      transitions: [
        { action: '→ Reload card', target: 'card-detail-populated' },
      ],
    },
    // ─── Timeline ───
    {
      id: 'timeline-populated',
      label: 'Timeline — Populated',
      layout: 'dashboard',
      transitions: [
        { action: '→ Week nav', target: 'timeline-nav-week' },
        { action: '→ Month nav', target: 'timeline-nav-month' },
        { action: '→ Drag left edge', target: 'timeline-drag-left' },
        { action: '→ Drag full bar', target: 'timeline-drag-full' },
        { action: '→ Dependency arrows', target: 'timeline-dep-arrows' },
        { action: '← Back to Kanban', target: 'board-view' },
      ],
    },
    {
      id: 'timeline-empty',
      label: 'Timeline — Empty state',
      layout: 'dashboard',
      transitions: [
        { action: '← Back to Kanban', target: 'board-view' },
      ],
    },
    {
      id: 'timeline-nav-week',
      label: 'Timeline — Week navigation',
      layout: 'dashboard',
      transitions: [
        { action: 'Next →', target: 'timeline-nav-week-shifted' },
        { action: '← Prev', target: 'timeline-populated' },
        { action: 'Today →', target: 'timeline-populated' },
        { action: '→ Month view', target: 'timeline-nav-month' },
      ],
    },
    {
      id: 'timeline-nav-week-shifted',
      label: 'Timeline — Week shifted',
      layout: 'dashboard',
      transitions: [
        { action: '← Prev', target: 'timeline-nav-week' },
        { action: 'Today →', target: 'timeline-populated' },
      ],
    },
    {
      id: 'timeline-nav-month',
      label: 'Timeline — Month view',
      layout: 'dashboard',
      transitions: [
        { action: '→ Week view', target: 'timeline-nav-week' },
        { action: '← Back', target: 'timeline-populated' },
      ],
    },
    {
      id: 'timeline-drag-left',
      label: 'Timeline — Drag left edge',
      layout: 'dashboard',
      transitions: [
        { action: 'Done →', target: 'timeline-populated' },
      ],
    },
    {
      id: 'timeline-drag-right',
      label: 'Timeline — Drag right edge',
      layout: 'dashboard',
      transitions: [
        { action: 'Done →', target: 'timeline-populated' },
      ],
    },
    {
      id: 'timeline-drag-full',
      label: 'Timeline — Drag full bar',
      layout: 'dashboard',
      transitions: [
        { action: 'Done →', target: 'timeline-populated' },
      ],
    },
    {
      id: 'timeline-dep-arrows',
      label: 'Timeline — Dependency arrows',
      layout: 'dashboard',
      transitions: [
        { action: '→ Warning state', target: 'timeline-dep-warning' },
        { action: '← Back', target: 'timeline-populated' },
      ],
    },
    {
      id: 'timeline-dep-warning',
      label: 'Timeline — Dependency warning',
      layout: 'dashboard',
      transitions: [
        { action: '→ Details panel', target: 'timeline-dep-panel' },
        { action: '← Back to arrows', target: 'timeline-dep-arrows' },
      ],
    },
    {
      id: 'timeline-dep-panel',
      label: 'Timeline — Dependency panel',
      layout: 'dashboard',
      transitions: [
        { action: '← Back', target: 'timeline-dep-warning' },
      ],
    },
    // ─── Table view ───
    {
      id: 'tv-populated',
      label: 'Table view — Populated',
      layout: 'dashboard',
      transitions: [
        { action: '→ Sort active', target: 'tv-sort-active' },
        { action: '→ Filter active', target: 'tv-filter-active' },
        { action: '→ Inline dropdown', target: 'tv-inline-dropdown' },
        { action: '→ Inline number', target: 'tv-inline-number' },
        { action: '← Back to Kanban', target: 'board-view' },
      ],
    },
    {
      id: 'tv-sort-active',
      label: 'Table — Sorted',
      layout: 'dashboard',
      transitions: [
        { action: '← Clear sort', target: 'tv-populated' },
      ],
    },
    {
      id: 'tv-filter-active',
      label: 'Table — Filtered',
      layout: 'dashboard',
      transitions: [
        { action: '← Clear filter', target: 'tv-populated' },
      ],
    },
    {
      id: 'tv-inline-dropdown',
      label: 'Table — Inline dropdown',
      layout: 'dashboard',
      transitions: [
        { action: 'Select →', target: 'tv-populated' },
      ],
    },
    {
      id: 'tv-inline-number',
      label: 'Table — Inline number',
      layout: 'dashboard',
      transitions: [
        { action: 'Done →', target: 'tv-populated' },
      ],
    },
    // ─── Custom fields ───
    {
      id: 'cf-settings-empty',
      label: 'Custom fields — Empty settings',
      layout: 'dashboard',
      transitions: [
        { action: '+ Add field →', target: 'cf-form-dropdown' },
        { action: '← Back to board', target: 'board-view' },
      ],
    },
    {
      id: 'cf-settings-populated',
      label: 'Custom fields — Populated settings',
      layout: 'dashboard',
      transitions: [
        { action: '+ Add field →', target: 'cf-form-dropdown' },
        { action: '→ Edit field', target: 'fl-edit-form' },
        { action: '→ Reorder (drag)', target: 'fl-reorder-drag' },
        { action: '→ Delete field', target: 'fl-delete-confirm' },
        { action: '← Back to board', target: 'board-view' },
      ],
    },
    {
      id: 'cf-form-dropdown',
      label: 'CF form — Dropdown type',
      layout: 'dashboard',
      transitions: [
        { action: 'Save →', target: 'cf-settings-populated' },
        { action: 'Save → duplicate name', target: 'cf-form-duplicate' },
        { action: 'Cancel →', target: 'cf-settings-empty' },
      ],
    },
    {
      id: 'cf-form-number',
      label: 'CF form — Number type',
      layout: 'dashboard',
      transitions: [
        { action: 'Save →', target: 'cf-settings-populated' },
        { action: 'Cancel →', target: 'cf-settings-populated' },
      ],
    },
    {
      id: 'cf-form-duplicate',
      label: 'CF form — Duplicate name',
      layout: 'dashboard',
      transitions: [
        { action: '← Fix name', target: 'cf-form-dropdown' },
        { action: 'Cancel →', target: 'cf-settings-populated' },
      ],
    },
    // ─── Field lifecycle ───
    {
      id: 'fl-edit-form',
      label: 'FL — Edit form',
      layout: 'dashboard',
      transitions: [
        { action: 'Save →', target: 'cf-settings-populated' },
        { action: 'Cancel →', target: 'cf-settings-populated' },
      ],
    },
    {
      id: 'fl-reorder-drag',
      label: 'FL — Reorder (drag)',
      layout: 'dashboard',
      transitions: [
        { action: '→ Keyboard reorder', target: 'fl-reorder-keyboard' },
        { action: 'Done →', target: 'cf-settings-populated' },
      ],
    },
    {
      id: 'fl-reorder-keyboard',
      label: 'FL — Reorder (keyboard)',
      layout: 'dashboard',
      transitions: [
        { action: 'Done →', target: 'cf-settings-populated' },
      ],
    },
    {
      id: 'fl-delete-confirm',
      label: 'FL — Delete confirmation',
      layout: 'dashboard',
      transitions: [
        { action: 'Delete →', target: 'cf-settings-empty' },
        { action: 'Cancel →', target: 'cf-settings-populated' },
      ],
    },
    // ─── Views showcase ───
    {
      id: 'views-kanban-front',
      label: 'Views — Kanban card front',
      layout: 'dashboard',
      transitions: [
        { action: '← Back', target: 'board-view' },
      ],
    },
    {
      id: 'views-timeline-detail',
      label: 'Views — Timeline + card detail',
      layout: 'dashboard',
      transitions: [
        { action: '← Back', target: 'timeline-populated' },
      ],
    },
    {
      id: 'views-realtime-sync',
      label: 'Views — Real-time sync indicator',
      layout: 'dashboard',
      transitions: [
        { action: '← Back', target: 'board-view' },
      ],
    },
  ],
}

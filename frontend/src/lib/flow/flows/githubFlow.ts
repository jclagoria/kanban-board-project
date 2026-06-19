import type { FlowDef } from '@/lib/types/flow'

export const githubFlow: FlowDef = {
  id: 'github',
  name: 'GitHub integration',
  entryPoint: 'gh-settings',
  steps: [
    {
      id: 'gh-settings',
      label: 'GitHub — Settings / Connect',
      layout: 'dashboard',
      transitions: [
        { action: 'Connect GitHub →', target: 'gh-settings', description: 'OAuth flow' },
        { action: '→ View linked issues', target: 'gh-linked-issues' },
        { action: '← Back to board', target: 'board-view' },
      ],
    },
    {
      id: 'gh-linked-issues',
      label: 'Card — Linked issues',
      layout: 'dashboard',
      transitions: [
        { action: 'Link issue →', target: 'gh-issue-search' },
        { action: '→ Unlink', target: 'gh-unlink' },
        { action: 'Close →', target: 'board-view' },
      ],
    },
    {
      id: 'gh-issue-search',
      label: 'GitHub — Issue search',
      layout: 'dashboard',
      transitions: [
        { action: 'Select issue →', target: 'gh-linked-issues' },
        { action: 'Cancel →', target: 'gh-linked-issues' },
      ],
    },
    {
      id: 'gh-unlink',
      label: 'GitHub — Unlink confirm',
      layout: 'dashboard',
      transitions: [
        { action: 'Unlink →', target: 'gh-linked-issues' },
        { action: 'Cancel →', target: 'gh-linked-issues' },
      ],
    },
    {
      id: 'gh-error-states',
      label: 'GitHub — Error states',
      layout: 'dashboard',
      transitions: [
        { action: '← Back', target: 'gh-linked-issues' },
      ],
    },
  ],
}

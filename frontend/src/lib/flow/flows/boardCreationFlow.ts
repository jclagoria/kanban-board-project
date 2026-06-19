import type { FlowDef } from '@/lib/types/flow'

export const boardCreationFlow: FlowDef = {
  id: 'board-creation',
  name: 'Board creation',
  entryPoint: 'board-dashboard',
  steps: [
    {
      id: 'board-dashboard',
      label: 'Board dashboard',
      layout: 'dashboard',
      transitions: [
        { action: 'Create Board →', target: 'template-choice' },
        { action: '→ Select board', target: 'board-view' },
        { action: '→ Archived tab', target: 'archived-tab' },
        { action: '→ Settings / Integrations', target: 'gh-settings' },
      ],
    },
    {
      id: 'template-choice',
      label: 'Template or blank?',
      layout: 'dashboard',
      transitions: [
        { action: 'Start from template →', target: 'template-gallery' },
        { action: 'Start blank →', target: 'creation-form' },
        { action: '← Back to dashboard', target: 'board-dashboard' },
      ],
    },
    {
      id: 'template-gallery',
      label: 'Template gallery',
      layout: 'dashboard',
      transitions: [
        { action: 'Select template →', target: 'creation-form', description: 'Pre-fills form' },
        { action: '← Back', target: 'template-choice' },
      ],
    },
    {
      id: 'creation-form',
      label: 'Board creation form',
      layout: 'dashboard',
      transitions: [
        { action: 'Submit →', target: 'invite-members', description: 'Valid form' },
        { action: 'Submit →', target: 'creation-form-validation', description: 'Validation error' },
        { action: 'Submit →', target: 'creation-form-duplicate', description: 'Duplicate name' },
        { action: 'Submit →', target: 'creation-form-server', description: 'Server error' },
        { action: '← Back', target: 'template-choice' },
      ],
    },
    {
      id: 'creation-form-validation',
      label: 'Validation error',
      layout: 'dashboard',
      transitions: [
        { action: '← Fix form', target: 'creation-form' },
      ],
    },
    {
      id: 'creation-form-duplicate',
      label: 'Duplicate name error',
      layout: 'dashboard',
      transitions: [
        { action: '← Fix name', target: 'creation-form' },
      ],
    },
    {
      id: 'creation-form-server',
      label: 'Server error',
      layout: 'dashboard',
      transitions: [
        { action: 'Retry →', target: 'creation-form' },
        { action: '← Back to dashboard', target: 'board-dashboard' },
      ],
    },
    {
      id: 'creation-form-quota',
      label: 'Free plan — quota exceeded',
      layout: 'dashboard',
      transitions: [
        { action: '← Back to dashboard', target: 'board-dashboard' },
      ],
    },
    {
      id: 'invite-members',
      label: 'Invite members',
      layout: 'dashboard',
      transitions: [
        { action: 'Skip — I\'ll invite later →', target: 'board-view' },
        { action: 'Send invites →', target: 'board-view' },
        { action: 'Generate invite link →', target: 'board-view' },
      ],
    },
    {
      id: 'archived-tab',
      label: 'Archived boards',
      layout: 'dashboard',
      transitions: [
        { action: '← Back to active boards', target: 'board-dashboard' },
        { action: 'Restore board →', target: 'board-dashboard' },
      ],
    },
  ],
}

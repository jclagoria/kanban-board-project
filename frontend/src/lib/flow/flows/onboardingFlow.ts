import type { FlowDef } from '@/lib/types/flow'

export const onboardingFlow: FlowDef = {
  id: 'onboarding',
  name: 'Onboarding tour + template',
  entryPoint: 'onboarding-tour-1',
  steps: [
    {
      id: 'onboarding-tour-1',
      label: 'Tour: Welcome',
      layout: 'dashboard',
      transitions: [
        { action: 'Next step →', target: 'onboarding-tour-2' },
        { action: 'Skip introduction', target: 'onboarding-skip-confirm' },
      ],
    },
    {
      id: 'onboarding-tour-2',
      label: 'Tour: Views',
      layout: 'dashboard',
      transitions: [
        { action: 'Next step →', target: 'onboarding-tour-3' },
        { action: '← Back', target: 'onboarding-tour-1' },
        { action: 'Skip introduction', target: 'onboarding-skip-confirm' },
      ],
    },
    {
      id: 'onboarding-tour-3',
      label: 'Tour: Cards',
      layout: 'dashboard',
      transitions: [
        { action: 'Next step →', target: 'onboarding-tour-4' },
        { action: '← Back', target: 'onboarding-tour-2' },
        { action: 'Skip introduction', target: 'onboarding-skip-confirm' },
      ],
    },
    {
      id: 'onboarding-tour-4',
      label: 'Tour: Collaboration',
      layout: 'dashboard',
      transitions: [
        { action: 'Next step →', target: 'onboarding-tour-5' },
        { action: '← Back', target: 'onboarding-tour-3' },
        { action: 'Skip introduction', target: 'onboarding-skip-confirm' },
      ],
    },
    {
      id: 'onboarding-tour-5',
      label: 'Tour: Templates',
      layout: 'dashboard',
      transitions: [
        { action: '→ Open template gallery', target: 'onboarding-template-gallery' },
        { action: '← Back', target: 'onboarding-tour-4' },
        { action: 'Skip introduction', target: 'onboarding-skip-confirm' },
      ],
    },
    {
      id: 'onboarding-skip-confirm',
      label: 'Skip confirmation',
      layout: 'dashboard',
      transitions: [
        { action: 'Yes, skip →', target: 'board-dashboard' },
        { action: '← Resume tour', target: 'onboarding-tour-1' },
      ],
    },
    {
      id: 'onboarding-template-gallery',
      label: 'Template gallery',
      layout: 'dashboard',
      transitions: [
        { action: 'Select template →', target: 'onboarding-preloaded-board', description: 'Template applied' },
        { action: 'Start from scratch →', target: 'board-view', description: 'Empty board' },
        { action: '← Back to dashboard', target: 'board-dashboard' },
      ],
    },
    {
      id: 'onboarding-preloaded-board',
      label: 'Preloaded board (Kanban)',
      layout: 'dashboard',
      transitions: [
        { action: '→ Continue to board', target: 'board-view' },
        { action: '← Back to gallery', target: 'onboarding-template-gallery' },
      ],
    },
    {
      id: 'onboarding-template-loading',
      label: 'Template loading',
      layout: 'dashboard',
      transitions: [
        { action: '→ Done (fallback)', target: 'board-view' },
      ],
    },
    {
      id: 'onboarding-error-states',
      label: 'Template error',
      layout: 'dashboard',
      transitions: [
        { action: 'Retry →', target: 'onboarding-template-gallery' },
        { action: '← Start from scratch', target: 'board-view' },
        { action: '← Back to dashboard', target: 'board-dashboard' },
      ],
    },
    {
      id: 'onboarding-help-menu',
      label: 'Help menu — tour replay',
      layout: 'dashboard',
      transitions: [
        { action: '→ Replay tour', target: 'onboarding-tour-1' },
        { action: '← Close', target: 'board-dashboard' },
      ],
    },
  ],
}

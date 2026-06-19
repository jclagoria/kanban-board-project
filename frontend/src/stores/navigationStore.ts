'use client'

import { create } from 'zustand'
import { flowEngine } from '@/lib/flow/engine'
import type { ScreenId } from '@/lib/types/flow'

type HistoryEntry = {
  flowId: string
  stepId: ScreenId
}

type NavigationState = {
  currentFlowId: string
  currentStepId: ScreenId
  history: HistoryEntry[]
}

type NavigationActions = {
  startFlow: (flowId: string) => void
  goTo: (stepId: ScreenId) => void
  trigger: (action: string) => void
  back: () => void
  canGoBack: () => boolean
}

export const useNavigationStore = create<NavigationState & NavigationActions>()(
  (set, get) => ({
    currentFlowId: 'auth',
    currentStepId: 'login-default',
    history: [],

    startFlow: (flowId) => {
      const flow = flowEngine.getFlow(flowId)
      if (!flow) return
      set({
        currentFlowId: flowId,
        currentStepId: flow.entryPoint,
        history: [],
      })
    },

    goTo: (stepId) => {
      const { currentFlowId, currentStepId } = get()
      const step = flowEngine.getStep(currentFlowId, stepId)
      if (!step) return
      set({
        history: [...get().history, { flowId: currentFlowId, stepId: currentStepId }],
        currentStepId: stepId,
      })
    },

    trigger: (action) => {
      const { currentFlowId, currentStepId } = get()
      const target = flowEngine.findTransitionTarget(currentFlowId, currentStepId, action)
      if (target) {
        get().goTo(target)
      }
    },

    back: () => {
      const history = get().history
      if (history.length === 0) return
      const prev = history[history.length - 1]
      set({
        history: history.slice(0, -1),
        currentFlowId: prev.flowId,
        currentStepId: prev.stepId,
      })
    },

    canGoBack: () => get().history.length > 0,
  }),
)

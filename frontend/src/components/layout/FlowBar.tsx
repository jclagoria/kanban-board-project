'use client'

import { useNavigationStore } from '@/stores/navigationStore'
import { flowEngine } from '@/lib/flow/engine'
import { ArrowLeft } from 'lucide-react'

export function FlowBar() {
  const currentFlowId = useNavigationStore(s => s.currentFlowId)
  const currentStepId = useNavigationStore(s => s.currentStepId)
  const trigger = useNavigationStore(s => s.trigger)
  const back = useNavigationStore(s => s.back)
  const canGoBack = useNavigationStore(s => s.canGoBack)
  const step = flowEngine.getStep(currentFlowId, currentStepId)

  if (!step || step.hideFlowBar) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-sidebar border-t-2 border-accent-500 px-4 py-2.5 flex items-center gap-2 text-[13px]">
      <span className="text-sidebar-foreground/50 mr-2 font-semibold whitespace-nowrap">
        FLOW: {flowEngine.getFlow(currentFlowId)?.name ?? currentFlowId} &mdash; {step.label}
      </span>

      {canGoBack() && (
        <button
          onClick={back}
          className="flex items-center gap-1 px-3 py-1.5 border border-sidebar-border rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors duration-fast whitespace-nowrap"
        >
          <ArrowLeft size={14} />
          Back
        </button>
      )}

      <div className="flex-1" />

      {step.transitions.map((t, i) => {
        const isLast = i === step.transitions.length - 1
        return (
          <button
            key={`${t.action}-${i}`}
            onClick={() => trigger(t.action)}
            className={`px-3.5 py-1.5 rounded-lg border whitespace-nowrap transition-colors duration-fast ${
              isLast
                ? 'bg-accent-500 text-white border-accent-500 hover:bg-accent-600 font-semibold'
                : 'bg-sidebar-accent text-sidebar-foreground border-sidebar-border hover:bg-sidebar-accent/80'
            }`}
            title={t.description}
          >
            {t.action}
          </button>
        )
      })}
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { registerAllFlows } from '@/lib/flow/flows'
import { flowEngine } from '@/lib/flow/engine'
import { useNavigationStore } from '@/stores/navigationStore'
import { useAuthStore } from '@/stores/authStore'
import { screenRegistry } from '@/screens/registry'
import { AuthShell } from '@/components/layout/AuthShell'
import { DashboardShell } from '@/components/layout/DashboardShell'
import { FlowBar } from '@/components/layout/FlowBar'

export default function MockupPage() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    registerAllFlows()
    setReady(true)
  }, [])

  if (!ready) {
    return <div style={{ padding: 40, fontFamily: 'system-ui' }}>Loading mockup flows...</div>
  }

  return <MockupContent />
}

function MockupContent() {
  const currentFlowId = useNavigationStore(s => s.currentFlowId)
  const currentStepId = useNavigationStore(s => s.currentStepId)
  const isAuthenticated = useAuthStore(s => s.isAuthenticated)

  const step = flowEngine.getStep(currentFlowId, currentStepId)
  const ScreenComponent = step ? screenRegistry[step.id] : null

  if (!step) {
    return (
      <div style={{ padding: 40, fontFamily: 'system-ui' }}>
        <h2>Unknown step: {currentStepId}</h2>
        <p>Flow: {currentFlowId}</p>
      </div>
    )
  }

  if (!ScreenComponent) {
    return (
      <div style={{ padding: 40, fontFamily: 'system-ui' }}>
        <h2>Missing wireframe: {step.id}</h2>
        <p>Label: {step.label}</p>
        <p style={{ color: '#888', fontSize: 13 }}>Add this screen to src/screens/registry.ts</p>
      </div>
    )
  }

  const content = <ScreenComponent showStructure={false} />

  return (
    <>
      {step.layout === 'auth' ? (
        <AuthShell>{content}</AuthShell>
      ) : (
        <DashboardShell>{content}</DashboardShell>
      )}
      <FlowBar />
    </>
  )
}

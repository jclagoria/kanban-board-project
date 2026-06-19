export type ScreenId = string

export type TransitionDef = {
  action: string
  target: ScreenId
  description?: string
}

export type FlowStepDef = {
  id: ScreenId
  label: string
  layout: 'auth' | 'dashboard'
  hideFlowBar?: boolean
  transitions: TransitionDef[]
}

export type FlowDef = {
  id: string
  name: string
  entryPoint: ScreenId
  steps: FlowStepDef[]
}

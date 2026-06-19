import type { FlowDef, FlowStepDef, ScreenId, TransitionDef } from '@/lib/types/flow'

export class FlowEngine {
  private flows = new Map<string, FlowDef>()

  register(flow: FlowDef): void {
    this.flows.set(flow.id, flow)
  }

  getFlow(id: string): FlowDef | undefined {
    return this.flows.get(id)
  }

  getStep(flowId: string, stepId: ScreenId): FlowStepDef | undefined {
    const flow = this.flows.get(flowId)
    if (!flow) return undefined
    return flow.steps.find(s => s.id === stepId)
  }

  getTransitions(flowId: string, stepId: ScreenId): TransitionDef[] {
    const step = this.getStep(flowId, stepId)
    return step?.transitions ?? []
  }

  findTransitionTarget(
    flowId: string,
    stepId: ScreenId,
    action: string,
  ): ScreenId | undefined {
    const step = this.getStep(flowId, stepId)
    return step?.transitions.find(t => t.action === action)?.target
  }

  getEntryPoint(flowId: string): ScreenId | undefined {
    return this.flows.get(flowId)?.entryPoint
  }

  getAllFlows(): FlowDef[] {
    return Array.from(this.flows.values())
  }

  getFlowIds(): string[] {
    return Array.from(this.flows.keys())
  }
}

export const flowEngine = new FlowEngine()

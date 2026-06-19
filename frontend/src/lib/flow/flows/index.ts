import { flowEngine } from '@/lib/flow/engine'
import { authFlow } from './authFlow'
import { onboardingFlow } from './onboardingFlow'
import { boardCreationFlow } from './boardCreationFlow'
import { boardFlow } from './boardFlow'
import { githubFlow } from './githubFlow'
import { mentionFlow } from './mentionFlow'

export function registerAllFlows(): void {
  flowEngine.register(authFlow)
  flowEngine.register(onboardingFlow)
  flowEngine.register(boardCreationFlow)
  flowEngine.register(boardFlow)
  flowEngine.register(githubFlow)
  flowEngine.register(mentionFlow)
}

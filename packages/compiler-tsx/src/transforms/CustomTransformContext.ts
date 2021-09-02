import type { ComponentRegistration, DirectiveRegistration } from '../types'
import type { ScopeManager } from './ScopeManager'

export interface CustomTransformContext {
  scope: ScopeManager
  /** @deprecated */
  components: Record<string, ComponentRegistration>
  /** @deprecated */
  directives: Record<string, DirectiveRegistration>
  used: {
    components: Set<string>
    directives: Set<string>
  }
}

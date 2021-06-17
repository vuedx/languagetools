import type { ComponentRegistration, DirectiveRegistration } from '../types'
import type { ScopeManager } from './ScopeManager'

export interface CustomTransformContext {
  scope: ScopeManager
  components: Record<string, ComponentRegistration>
  directives: Record<string, DirectiveRegistration>
}

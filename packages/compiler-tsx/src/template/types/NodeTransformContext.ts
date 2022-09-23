import type { TransformOptionsResolved } from '../../types/TransformOptions'
import type { ScopeManager } from '../scope/ScopeManager'

export interface NodeTransformContext extends TransformOptionsResolved {
  scope: ScopeManager
  used: {
    components: Set<string>
    directives: Set<string>
  }
}

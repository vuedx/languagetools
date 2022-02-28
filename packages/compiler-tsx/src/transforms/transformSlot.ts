import type { NodeTransform } from '@vue/compiler-core'
import { findDir } from '@vue/compiler-core'
import { isElementNode } from '@vuedx/template-ast-types'
import type { CustomTransformContext } from './CustomTransformContext'

export function createSlotHoistScopeTransform(
  customContext: CustomTransformContext,
): NodeTransform {
  return (node) => {
    if (!isElementNode(node)) return
    const dir = findDir(node, 'slot', true)
    if (dir == null) return

    node.hoists = customContext.scope.createNewHoistScope()

    return () => {
      node.hoists = customContext.scope.popHoistScope()
    }
  }
}

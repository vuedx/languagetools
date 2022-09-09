import type { NodeTransform } from '@vue/compiler-core'
import { findDir } from '@vue/compiler-core'
import { isElementNode } from '@vuedx/template-ast-types'
import type { NodeTransformContext } from '../types/NodeTransformContext'

export function createSlotHoistScopeTransform(
  context: NodeTransformContext,
): NodeTransform {
  return (node) => {
    if (!isElementNode(node)) return
    const dir = findDir(node, 'slot', true)
    if (dir == null) return

    node.hoists = context.scope.createNewHoistScope()

    return () => {
      node.hoists = context.scope.popHoistScope()
    }
  }
}

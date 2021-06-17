import {
  createStructuralDirectiveTransform,
  NodeTransform,
  processFor,
} from '@vue/compiler-core'
import type { CustomTransformContext } from './CustomTransformContext'

export const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/
export function createTransformFor(
  customContext: CustomTransformContext,
): NodeTransform {
  return createStructuralDirectiveTransform(/^for$/, (node, dir, context) => {
    return processFor(node, dir, context, (forNode) => {
      customContext.scope.createNewHoistScope()
      return () => {
        forNode.hoists = customContext.scope.popHoistScope()
      }
    })
  })
}

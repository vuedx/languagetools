import {
  createStructuralDirectiveTransform,
  NodeTransform,
  processIf,
} from '@vue/compiler-core'
import { createSimpleExpression } from '@vuedx/template-ast-types'

import type { NodeTransformContext } from '../types/NodeTransformContext'

export function createTransformIf(
  _customContext: NodeTransformContext,
): NodeTransform {
  return createStructuralDirectiveTransform(
    /^(if|else-if|else)$/,
    (node, dir, context) => {
      const condition = dir.exp
      dir.exp = (condition != null
        ? { ...condition }
        : createSimpleExpression('undefined', false)) as any // Prevent condition normalization
      return processIf(node, dir, context, (_ifNode, brnach) => () => {
        brnach.condition = condition
      })
    },
  )
}

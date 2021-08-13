import {
  createStructuralDirectiveTransform,
  NodeTransform,
  processIf,
} from '@vue/compiler-core'
import { createSimpleExpression } from '../../../template-ast-types/src'

import type { CustomTransformContext } from './CustomTransformContext'

export function createTransformIf(
  _customContext: CustomTransformContext,
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

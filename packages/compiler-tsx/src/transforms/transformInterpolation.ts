import type { NodeTransform } from '@vue/compiler-core'
import { createCompoundExpression } from '@vue/compiler-core'
import { isInterpolationNode } from '@vuedx/template-ast-types'
import type { Options } from '../types'

export function createInterpolationTransform(
  _options: Required<Options>,
): NodeTransform {
  return function transform(node, context) {
    if (isInterpolationNode(node)) {
      context.replaceNode(createCompoundExpression([node.content]))
    }
  }
}

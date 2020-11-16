import {
  createCompoundExpression,
  createStructuralDirectiveTransform,
  NodeTransform,
  processIf,
  SimpleExpressionNode,
} from '@vue/compiler-core'
import { isSimpleExpressionNode } from '@vuedx/template-ast-types'
import { trackIdentifiers } from './transformExpression'

export function createTransformIf(
  addIdentifer: (value: string) => void,
): NodeTransform {
  return createStructuralDirectiveTransform(
    /^(if|else-if|else)$/,
    (node, dir, context) => {
      const exp = dir.exp as SimpleExpressionNode | undefined
      const content = exp?.content
      if (isSimpleExpressionNode(dir.exp)) {
        trackIdentifiers(dir.exp.content, context, addIdentifer)
      }

      return processIf(node, dir, context, (ifNode, branch, isRoot) => {
        return () => {
          let hasElse = false

          if (exp != null) {
            exp.content = content ?? 'true'
            branch.condition = exp
          }

          ifNode.codegenNode = createCompoundExpression([
            '{',
            ...(ifNode.branches.flatMap((branch) => {
              hasElse = hasElse || branch.condition == null

              return branch.condition != null
                ? [
                    '(',
                    branch.condition,
                    ') ? (',
                    ...normalizeChildren(branch.children),
                    ') :',
                  ]
                : ['(', ...normalizeChildren(branch.children), ')']
            }) as any),
            `${hasElse ? '' : 'null'}}`,
          ]) as any
        }
      })
    },
  )
}

function normalizeChildren(children: any[]): any[] {
  return children.length === 0
    ? ['null']
    : children.length === 1
    ? children
    : ['<>', ...children, '</>']
}

import {
  createCompoundExpression,
  createStructuralDirectiveTransform,
  NodeTransform,
  processIf,
  SimpleExpressionNode,
} from '@vue/compiler-core'
import {
  createSimpleExpression,
  isSimpleExpressionNode,
} from '@vuedx/template-ast-types'
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
        trackIdentifiers(
          dir.exp.content,
          context,
          dir.exp.loc.start,
          addIdentifer,
        )
      }

      return processIf(node, dir, context, (ifNode, branch, isRoot) => {
        return () => {
          let hasElse = false

          if (dir.name !== 'else') {
            branch.condition = createSimpleExpression(
              content == null || content.trim() === '' ? 'false' : content,
              false,
              exp?.loc,
            )
          }

          const expressions = [
            ...ifNode.branches.flatMap((branch) => {
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
            }),
            `${hasElse ? '' : 'null'}`,
          ]

          ifNode.codegenNode = createCompoundExpression(expressions) as any
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

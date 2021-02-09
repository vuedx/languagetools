import {
  CompoundExpressionNode,
  createBlockStatement,
  createCallExpression,
  createCompoundExpression,
  createForLoopParams,
  createFunctionExpression,
  createSimpleExpression,
  createStructuralDirectiveTransform,
  ForIteratorExpression,
  ForRenderListExpression,
  NodeTransform,
  processFor,
  RENDER_LIST,
} from '@vue/compiler-core'
import { isSimpleExpressionNode } from '@vuedx/template-ast-types'
import { createLoc } from '../utils'
import { generateChildNodes } from './transformElement'
import { trackIdentifiers } from './transformExpression'

export const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/
export function createTransformFor(
  addIdentifer: (value: string) => void,
  expressions: CompoundExpressionNode[],
): NodeTransform {
  const globalsExpressions: CompoundExpressionNode[][] = []
  const addHoistScope = (): void => {
    globalsExpressions.push(expressions.slice())
    expressions.length = 0
  }
  const removeHoistScope = (): void => {
    const exps = globalsExpressions.pop()
    if (Array.isArray(exps)) {
      expressions.length = 0
      expressions.push(...exps)
    }
  }

  return createStructuralDirectiveTransform(/^for$/, (node, dir, context) => {
    let exp: any
    if (isSimpleExpressionNode(dir.exp)) {
      const parseResult = forAliasRE.exec(dir.exp.content)

      if (parseResult != null) {
        exp = createSimpleExpression(
          parseResult[2],
          false,
          createLoc(
            dir.exp.loc,
            dir.exp.content.indexOf(parseResult[2]),
            parseResult[2].length,
          ),
        )

        trackIdentifiers(exp.content, context, exp.loc.start, addIdentifer)
      }
    }

    return processFor(node, dir, context, (forNode) => {
      const renderExp = createCallExpression(context.helper(RENDER_LIST), [
        exp,
      ]) as ForRenderListExpression

      forNode.codegenNode = createCompoundExpression([renderExp as any]) as any

      addHoistScope()

      return () => {
        const childBlock =
          forNode.children.length === 0
            ? createCompoundExpression(['null'])
            : createCompoundExpression([
                '<>',
                ...generateChildNodes(forNode.children),
                '</>',
              ])

        const fn = createFunctionExpression(
          createForLoopParams(forNode.parseResult),
          undefined,
          true /* force newline */,
        )

        if (expressions.length > 0) {
          fn.body = createBlockStatement([
            ...expressions,
            createCompoundExpression(['\nreturn ', childBlock]),
          ])
        } else {
          fn.returns = childBlock
        }

        renderExp.arguments.push(fn as ForIteratorExpression)

        removeHoistScope()
      }
    })
  })
}

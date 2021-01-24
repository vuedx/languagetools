import {
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
import { trackIdentifiers } from './transformExpression'

export const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/
export function createTransformFor(
  addIdentifer: (value: string) => void,
): NodeTransform {
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

      forNode.codegenNode = createCompoundExpression([
        '{',
        renderExp as any,
        '}',
      ]) as any
      return () => {
        const childBlock =
          forNode.children.length === 0
            ? createCompoundExpression(['null'])
            : createCompoundExpression([
                '<>',
                ...(forNode.children as any),
                '</>',
              ])

        renderExp.arguments.push(
          createFunctionExpression(
            createForLoopParams(forNode.parseResult),
            childBlock,
            true /* force newline */,
          ) as ForIteratorExpression,
        )
      }
    })
  })
}

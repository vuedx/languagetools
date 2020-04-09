import {
  createCallExpression,
  createForLoopParams,
  createFunctionExpression,
  createStructuralDirectiveTransform,
  createVNodeCall,
  findProp,
  ForCodegenNode,
  ForIteratorExpression,
  ForRenderListExpression,
  FRAGMENT,
  NodeTransform,
  processFor,
  RENDER_LIST,
} from '@vue/compiler-core'
import { H } from '../runtimeHelpers'

export const transformFor: NodeTransform = createStructuralDirectiveTransform(
  /^for$/,
  (node, dir, context) => {
    return processFor(node, dir, context, (forNode) => {
      const renderExp = createCallExpression(context.helper(RENDER_LIST), [
        forNode.source,
      ]) as ForRenderListExpression

      forNode.codegenNode = createVNodeCall(
        context,
        context.helper(FRAGMENT),
        undefined,
        renderExp,
        undefined,
        undefined,
        undefined,
        true /* isBlock */,
        true /* isForBlock */,
        node.loc
      ) as ForCodegenNode
      return () => {
        const fragment = context.helperString(context.helper(FRAGMENT))
        const childBlock =
          forNode.children.length === 1
            ? forNode.children[0]
            : createCallExpression(context.helperString(context.helper(H)), [
                fragment,
                forNode.children,
              ])

        renderExp.arguments.push(
          createFunctionExpression(
            createForLoopParams(forNode.parseResult),
            childBlock,
            true /* force newline */
          ) as ForIteratorExpression
        )

        forNode.codegenNode = createCallExpression(
          context.helperString(context.helper(H)),
          [fragment, renderExp]
        ) as any
      }
    })
  }
)

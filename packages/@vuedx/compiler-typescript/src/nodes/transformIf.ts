import {
  BlockCodegenNode,
  createCallExpression,
  createConditionalExpression,
  createSimpleExpression,
  createStructuralDirectiveTransform,
  ElementNode,
  FRAGMENT,
  IfBranchNode,
  IfConditionalExpression,
  NodeTransform,
  NodeTypes,
  processIf,
  TransformContext,
} from '@vue/compiler-core'
import { H } from '../runtimeHelpers'

export const transformIf: NodeTransform = createStructuralDirectiveTransform(
  /^(if|else|else-if)$/,
  (node, dir, context) => {
    return processIf(node, dir, context, (ifNode, branch, isRoot) => {
      // Exit callback. Complete the codegenNode when all children have been
      // transformed.
      return () => {
        if (isRoot) {
          ifNode.codegenNode = createCodegenNodeForBranch(
            branch,
            0,
            context
          ) as IfConditionalExpression
        } else {
          // attach this branch's codegen node to the v-if root.
          let parentCondition = ifNode.codegenNode!
          while (
            parentCondition.alternate.type ===
            NodeTypes.JS_CONDITIONAL_EXPRESSION
          ) {
            parentCondition = parentCondition.alternate
          }
          parentCondition.alternate = createCodegenNodeForBranch(
            branch,
            ifNode.branches.length - 1,
            context
          )
        }
      }
    })
  }
)

function createCodegenNodeForBranch(
  branch: IfBranchNode,
  index: number,
  context: TransformContext
): IfConditionalExpression | BlockCodegenNode {
  if (branch.condition) {
    return createConditionalExpression(
      branch.condition,
      createChildrenCodegenNode(branch, index, context),
      createSimpleExpression('null', false)
    ) as IfConditionalExpression
  } else {
    return createChildrenCodegenNode(branch, index, context)
  }
}

function createChildrenCodegenNode(
  branch: IfBranchNode,
  index: number,
  context: TransformContext
): BlockCodegenNode {
  const { helper, helperString } = context
  const { children } = branch
  const firstChild = children[0]
  const needFragmentWrapper = children.length !== 1
  if (needFragmentWrapper) {
    return createCallExpression(
      helperString(H),
      [helper(FRAGMENT), children],
      branch.loc
    ) as BlockCodegenNode
  } else {
    const vnodeCall = (firstChild as ElementNode)
      .codegenNode as BlockCodegenNode

    return vnodeCall
  }
}

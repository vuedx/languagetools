import {
  BlockCodegenNode,
  createCompoundExpression,
  createConditionalExpression,
  createSimpleExpression,
  createStructuralDirectiveTransform,
  ElementNode,
  IfBranchNode,
  IfConditionalExpression,
  NodeTransform,
  NodeTypes,
  processIf,
  TransformContext,
} from '@vue/compiler-core';

export const transformIf: NodeTransform = createStructuralDirectiveTransform(
  /^(if|else|else-if)$/,
  (node, dir, context) => {
    return processIf(node, dir, context, (ifNode, branch, isRoot) => {
      // Exit callback. Complete the codegenNode when all children have been
      // transformed.
      return () => {
        if (isRoot) {
          ifNode.codegenNode = createCodegenNodeForBranch(branch) as any;
        } else {
          // attach this branch's codegen node to the v-if root.
          let parentCondition = ifNode.codegenNode!;
          while (parentCondition.alternate.type === NodeTypes.JS_CONDITIONAL_EXPRESSION) {
            parentCondition = parentCondition.alternate;
          }
          parentCondition.alternate = createCodegenNodeForBranch(branch);
        }
      };
    });
  }
);

function createCodegenNodeForBranch(branch: IfBranchNode) {
  if (branch.condition) {
    return createConditionalExpression(
      branch.condition,
      createChildrenCodegenNode(branch),
      createSimpleExpression('null', false)
    ) as IfConditionalExpression;
  } else {
    return createChildrenCodegenNode(branch);
  }
}

function createChildrenCodegenNode(branch: IfBranchNode): BlockCodegenNode {
  const { children } = branch;
  if (children.length !== 1) {
    return createCompoundExpression(['<>', ...(children as any), '</>']) as any;
  } else {
    return children[0] as any;
  }
}

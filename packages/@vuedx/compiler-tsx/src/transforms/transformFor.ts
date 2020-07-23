import {
  createCallExpression,
  createCompoundExpression,
  createForLoopParams,
  createFunctionExpression,
  createStructuralDirectiveTransform,
  ForIteratorExpression,
  ForRenderListExpression,
  NodeTransform,
  processFor,
  RENDER_LIST,
} from '@vue/compiler-core';

export const transformFor: NodeTransform = createStructuralDirectiveTransform(/^for$/, (node, dir, context) => {
  return processFor(node, dir, context, (forNode) => {
    const renderExp = createCallExpression(context.helper(RENDER_LIST), [forNode.source]) as ForRenderListExpression;

    forNode.codegenNode = renderExp as any;
    return () => {
      const childBlock =
        forNode.children.length === 1
          ? forNode.children[0]
          : createCompoundExpression(['<>', ...(forNode.children as any), '</>']);

      renderExp.arguments.push(
        createFunctionExpression(
          createForLoopParams(forNode.parseResult),
          childBlock,
          true /* force newline */
        ) as ForIteratorExpression
      );
    };
  });
});

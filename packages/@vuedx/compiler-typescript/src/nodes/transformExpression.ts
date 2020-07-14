import { NodeTransform } from '@vue/compiler-core';
import { isInterpolationNode } from '@vuedx/template-ast-types';

export const transformInterpolationExpression: NodeTransform = (node, context) => {
  if (isInterpolationNode(node)) {
    context.replaceNode(node.content as any);
  }
};

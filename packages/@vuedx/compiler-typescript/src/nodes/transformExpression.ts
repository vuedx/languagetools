import { NodeTransform, createCompoundExpression } from '@vue/compiler-core';
import { isInterpolationNode } from '@vuedx/template-ast-types';
import { Options } from '../options';

export function createTransformInterpolationExpression(options: Options): NodeTransform {
  return function transform(node, context) {
    if (isInterpolationNode(node)) {
      context.replaceNode(options.useJsx ? createCompoundExpression(['{', node.content, '}']) : (node.content as any));
    }
  };
}

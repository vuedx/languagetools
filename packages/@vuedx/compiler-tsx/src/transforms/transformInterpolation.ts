import { NodeTransform, createCompoundExpression } from '@vue/compiler-core';
import { isInterpolationNode } from '@vuedx/template-ast-types';
import { Options } from '../types';

export function createInterpolationTransform(options: Required<Options>): NodeTransform {
  return function transform(node, context) {
    if (isInterpolationNode(node)) {
      context.replaceNode(createCompoundExpression(['{', node.content, '}']));
    }
  };
}

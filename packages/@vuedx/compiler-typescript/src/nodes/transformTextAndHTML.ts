import { NodeTransform } from '@vue/compiler-core';
import { isDirectiveNode, isElementNode } from '@vuedx/template-ast-types';

export const transformTextAndHTML: NodeTransform = (node) => {
  if (isElementNode(node)) {
    const directive = node.props.find(
      (prop) => isDirectiveNode(prop) && ['text', 'html'].includes(prop.name)
    );

    if (isDirectiveNode(directive) && directive.exp) {
      node.children = [directive.exp as any];
    }
  }
};

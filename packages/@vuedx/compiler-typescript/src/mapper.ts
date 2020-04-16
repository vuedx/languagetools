import { Node, RootNode } from '@vue/compiler-core';
import {
  isCompoundExpressionNode,
  isRootNode,
  isDirectiveNode,
  isElementNode,
  isInterpolationNode,
  isNode,
} from '@vuedx/template-ast-types';
import { RenderNode } from './interfaces';

function findRenderNodes(node?: Node): RenderNode[] {
  const result: RenderNode[] = [];
  if (!node) return result;
  if (node.renderNode) result.push(node.renderNode);
  if (isElementNode(node)) {
    node.props.forEach((node) => {
      result.push(...findRenderNodes(node));
    });
  } else if (isDirectiveNode(node)) {
    result.push(...findRenderNodes(node.arg));
    result.push(...findRenderNodes(node.exp));
  } else if (isInterpolationNode(node)) {
    result.push(...findRenderNodes(node.content));
  }

  if (isElementNode(node) || isRootNode(node)) {
    node.children.forEach((node: any) => {
      if (isNode(node)) {
        result.push(...findRenderNodes(node));
      }
    });
  }

  return result;
}

export function getRenderNodes(ast: RootNode) {
  return findRenderNodes(ast);
}

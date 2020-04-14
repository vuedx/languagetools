import { Node as BabelNode } from '@babel/types';
import { DirectiveNode, Node, PlainElementNode, RootNode, SimpleExpressionNode } from '@vue/compiler-core';
import { isDirectiveNode, isElementNode, isInterpolationNode } from '@vuedx/template-ast-types';

function findJSNodes(node?: Node): Node[] {
  const result: Node[] = [];
  if (!node) return result;
  if ('jsNode' in node || 'leftJsNode' in node || 'rightJsNode' in node) {
    result.push(node);
  }
  if (isElementNode(node)) {
    node.props.forEach((node) => result.push(...findJSNodes(((node as unknown) as any).exp as Node)));
  } else if (isDirectiveNode(node)) {
    result.push(...findJSNodes((node as DirectiveNode).arg));
    result.push(...findJSNodes((node as DirectiveNode).exp));
  } else if (isInterpolationNode(node)) {
    result.push(...findJSNodes((node.content as unknown) as SimpleExpressionNode));
  }

  if ('children' in node) {
    (node as PlainElementNode).children.forEach((node) => result.push(...findJSNodes(node)));
  }

  return result;
}

export type NodeWithJs =
  | ExpressionNodeWithJs
  | ForDirectiveWithJs
  | {
      original: JsNode;
      jsNode: JsNode;
    };

type JsNode = BabelNode & {
  start: number;
  end: number;
};

export interface ExpressionNodeWithJs extends SimpleExpressionNode {
  node: JsNode;
  jsNode: JsNode;
}

export interface ForDirectiveWithJs extends SimpleExpressionNode {
  leftNode: JsNode[];
  leftJsNode: JsNode[];
  rightNode: JsNode;
  rightJsNode: JsNode;
}

export function getNodesWithRenderMappings(ast: RootNode): NodeWithJs[] {
  return findJSNodes(ast) as NodeWithJs[];
}

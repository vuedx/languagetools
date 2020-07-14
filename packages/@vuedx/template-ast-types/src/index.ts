import {
  AttributeNode,
  CommentNode,
  ComponentNode,
  CompoundExpressionNode,
  DirectiveNode,
  ElementNode,
  InterpolationNode,
  Node,
  PlainElementNode,
  SimpleExpressionNode,
  SlotOutletNode,
  TemplateNode,
  TextNode,
  RootNode,
  IfConditionalExpression,
  IfNode,
} from '@vue/compiler-core';

export function isNode(node: any): node is Node {
  return node != null && typeof node === 'object' && 'type' in node;
}

export function isRootNode(node: any): node is RootNode {
  return isNode(node) && node.type === 0;
}

export function isElementNode(node: any): node is ElementNode {
  return isNode(node) && node.type === 1;
}

export function isPlainElementNode(node: any): node is PlainElementNode {
  return isNode(node) && isElementNode(node) && node.tagType === 0;
}

export function isComponentNode(node: any): node is ComponentNode {
  return isNode(node) && isElementNode(node) && node.tagType === 1;
}

export function isSlotNode(node: any): node is SlotOutletNode {
  return isNode(node) && isElementNode(node) && node.tagType === 2;
}

export function isTemplateNode(node: any): node is TemplateNode {
  return isNode(node) && isElementNode(node) && node.tagType === 3;
}

export function isTextNode(node: any): node is TextNode {
  return isNode(node) && node.type === 2;
}

export function isIfNode(node: any): node is IfNode {
  return isNode(node) && node.type === 9;
}

export function isCommentNode(node: any): node is CommentNode {
  return isNode(node) && node.type === 3;
}

export function isSimpleExpressionNode(node: any): node is SimpleExpressionNode {
  return isNode(node) && node.type === 4;
}

export function isInterpolationNode(node: any): node is InterpolationNode {
  return isNode(node) && node.type === 5;
}
export function isAttributeNode(node: any): node is AttributeNode {
  return isNode(node) && node.type === 6;
}
export function isDirectiveNode(node: any): node is DirectiveNode {
  return isNode(node) && node.type === 7;
}

export function isCompoundExpressionNode(node: any): node is CompoundExpressionNode {
  return isNode(node) && node.type === 8;
}

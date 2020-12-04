import {
  AttributeNode,
  CommentNode,
  ComponentNode,
  CompoundExpressionNode,
  DirectiveNode,
  ElementNode,
  IfNode,
  InterpolationNode,
  Node,
  PlainElementNode,
  RootNode,
  SimpleExpressionNode,
  SlotOutletNode,
  TemplateNode,
  TextNode,
  ForNode,
} from '@vue/compiler-core'

export { isSimpleIdentifier } from '@vue/compiler-core'

export function isNode(node: unknown): node is Node {
  return typeof node === 'object' && node != null && 'type' in node
}

export function isRootNode(node: unknown): node is RootNode {
  return isNode(node) && node.type === 0
}

export function isElementNode(node: unknown): node is ElementNode {
  return isNode(node) && node.type === 1
}

export function isPlainElementNode(node: unknown): node is PlainElementNode {
  return isElementNode(node) && node.tagType === 0
}

export function isComponentNode(node: unknown): node is ComponentNode {
  return isElementNode(node) && node.tagType === 1
}

export function isSlotNode(node: unknown): node is SlotOutletNode {
  return isElementNode(node) && node.tagType === 2
}

export function isTemplateNode(node: unknown): node is TemplateNode {
  return isElementNode(node) && node.tagType === 3
}

export function isTextNode(node: unknown): node is TextNode {
  return isNode(node) && node.type === 2
}

export function isIfNode(node: unknown): node is IfNode {
  return isNode(node) && node.type === 9
}

export function isForNode(node: unknown): node is ForNode {
  return isNode(node) && node.type === 11
}

export function isCommentNode(node: unknown): node is CommentNode {
  return isNode(node) && node.type === 3
}

export function isSimpleExpressionNode(
  node: unknown,
): node is SimpleExpressionNode {
  return isNode(node) && node.type === 4
}

export function isInterpolationNode(node: unknown): node is InterpolationNode {
  return isNode(node) && node.type === 5
}
export function isAttributeNode(node: unknown): node is AttributeNode {
  return isNode(node) && node.type === 6
}
export function isDirectiveNode(node: unknown): node is DirectiveNode {
  return isNode(node) && node.type === 7
}

export function isCompoundExpressionNode(
  node: unknown,
): node is CompoundExpressionNode {
  return isNode(node) && node.type === 8
}

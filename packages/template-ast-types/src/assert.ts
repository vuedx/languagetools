import {
  AttributeNode,
  CommentNode,
  ComponentNode,
  DirectiveNode,
  ElementNode,
  InterpolationNode,
  isSimpleIdentifier as _isSimpleIdentifier,
  Node,
  PlainElementNode,
  RootNode,
  SimpleExpressionNode,
  TemplateNode,
  TextNode,
} from '@vue/compiler-core'

/**
 * Checks if it is a valid JavaScript identifers.
 *
 * @public
 */
export function isSimpleIdentifier(content: string): boolean {
  return _isSimpleIdentifier(content.trim())
}

/**
 * Checks if it is Vue template AST Node.
 *
 * @public
 */
export function isNode(node: unknown): node is Node {
  return typeof node === 'object' && node != null && 'type' in node
}

/**
 * Checks if it is an AST RootNode.
 *
 * @public
 */
export function isRootNode(node: unknown): node is RootNode {
  return isNode(node) && node.type === 0
}

/**
 * Checks if it is an AST ElementNode.
 *
 * @public
 */
export function isElementNode(node: unknown): node is ElementNode {
  return isNode(node) && node.type === 1
}

/**
 * Checks if it is an AST PlainElementNode.
 *
 * @public
 */
export function isPlainElementNode(node: unknown): node is PlainElementNode {
  return isElementNode(node) && node.tagType === 0
}

/**
 * Checks if it is an AST ComponentNode.
 *
 * @public
 */
export function isComponentNode(node: unknown): node is ComponentNode {
  return isElementNode(node) && node.tagType === 1
}

/**
 * Checks if it is an AST TemplateNode.
 * @public
 */
export function isTemplateNode(node: unknown): node is TemplateNode {
  return isElementNode(node) && node.tagType === 3
}

/**
 * Checks if it is an AST TextNode.
 * @public
 */
export function isTextNode(node: unknown): node is TextNode {
  return isNode(node) && node.type === 2
}

/**
 * Checks if it is an AST CommentNode.
 * @public
 */
export function isCommentNode(node: unknown): node is CommentNode {
  return isNode(node) && node.type === 3
}

/**
 * Checks if it is an AST ExpressionNode.
 * @public
 */
export function isSimpleExpressionNode(
  node: unknown,
): node is SimpleExpressionNode {
  return isNode(node) && node.type === 4
}

/**
 * Checks if it is an AST InterpolationNode.
 * @public
 */
export function isInterpolationNode(node: unknown): node is InterpolationNode {
  return isNode(node) && node.type === 5
}

/**
 * Checks if it is an AST AttributeNode.
 * @public
 */
export function isAttributeNode(node: unknown): node is AttributeNode {
  return isNode(node) && node.type === 6
}

/**
 * Checks if it is an AST DirectiveNode.
 * @public
 */
export function isDirectiveNode(node: unknown): node is DirectiveNode {
  return isNode(node) && node.type === 7
}

import {
  SimpleExpressionNode,
  createSimpleExpression as _createSimpleExpression,
  SourceLocation,
} from '@vue/compiler-core'

/**
 * Create AST Node
 *
 * @public
 */
export function createSimpleExpression(
  content: SimpleExpressionNode['content'],
  isStatic: SimpleExpressionNode['isStatic'],
  loc?: SourceLocation,
  isConstant?: boolean,
): SimpleExpressionNode {
  return _createSimpleExpression(content, isStatic, loc, isConstant)
}

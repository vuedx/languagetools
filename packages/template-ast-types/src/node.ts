import type {
  AttributeNode,
  CommentNode,
  ComponentNode,
  DirectiveNode,
  ElementNode,
  PlainElementNode,
  InterpolationNode,
  Node,
  RootNode,
  SimpleExpressionNode,
  SourceLocation,
  TextNode,
  TemplateNode,
  NodeTypes as NodeType,
} from '@vue/compiler-core'

/** @public */
export const NodeTypes = {
  ROOT: 0 as NodeType.ROOT,
  ELEMENT: 1 as NodeType.ELEMENT,
  TEXT: 2 as NodeType.TEXT,
  COMMENT: 3 as NodeType.COMMENT,
  SIMPLE_EXPRESSION: 4 as NodeType.SIMPLE_EXPRESSION,
  INTERPOLATION: 5 as NodeType.INTERPOLATION,
  ATTRIBUTE: 6 as NodeType.ATTRIBUTE,
  DIRECTIVE: 7 as NodeType.DIRECTIVE,
  COMPOUND_EXPRESSION: 8 as NodeType.COMPOUND_EXPRESSION,
  IF: 9 as NodeType.IF,
  IF_BRANCH: 10 as NodeType.IF_BRANCH,
  FOR: 11 as NodeType.FOR,
  TEXT_CALL: 12 as NodeType.TEXT_CALL,
  VNODE_CALL: 13 as NodeType.VNODE_CALL,
  JS_CALL_EXPRESSION: 14 as NodeType.JS_CALL_EXPRESSION,
  JS_OBJECT_EXPRESSION: 15 as NodeType.JS_OBJECT_EXPRESSION,
  JS_PROPERTY: 16 as NodeType.JS_PROPERTY,
  JS_ARRAY_EXPRESSION: 17 as NodeType.JS_ARRAY_EXPRESSION,
  JS_FUNCTION_EXPRESSION: 18 as NodeType.JS_FUNCTION_EXPRESSION,
  JS_CONDITIONAL_EXPRESSION: 19 as NodeType.JS_CONDITIONAL_EXPRESSION,
  JS_CACHE_EXPRESSION: 20 as NodeType.JS_CACHE_EXPRESSION,
  JS_BLOCK_STATEMENT: 21 as NodeType.JS_BLOCK_STATEMENT,
  JS_TEMPLATE_LITERAL: 22 as NodeType.JS_TEMPLATE_LITERAL,
  JS_IF_STATEMENT: 23 as NodeType.JS_IF_STATEMENT,
  JS_ASSIGNMENT_EXPRESSION: 24 as NodeType.JS_ASSIGNMENT_EXPRESSION,
  JS_SEQUENCE_EXPRESSION: 25 as NodeType.JS_SEQUENCE_EXPRESSION,
  JS_RETURN_STATEMENT: 26 as NodeType.JS_RETURN_STATEMENT,
}

/** @public */
export const ElementTypes = {
  ELEMENT: 0,
  COMPONENT: 1,
  SLOT: 2,
  TEMPLATE: 3,
}

/** @public */
export {
  Node,
  RootNode,
  ElementNode,
  PlainElementNode,
  ComponentNode,
  AttributeNode,
  DirectiveNode,
  TextNode,
  InterpolationNode,
  CommentNode,
  SimpleExpressionNode,
  SourceLocation,
  TemplateNode,
}

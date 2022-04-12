import { last } from '@vuedx/shared'
import {
  AttributeNode,
  CommentNode,
  DirectiveNode,
  ElementNode,
  findTemplateNodeAt,
  InterpolationNode,
  isAttributeNode,
  isCommentNode,
  isDirectiveNode,
  isElementNode,
  isInterpolationNode,
  isSimpleExpressionNode,
  isTextNode,
  Node,
  RootNode,
  SimpleExpressionNode,
  SourceLocation,
  TextNode,
  TraversalAncestors,
} from '@vuedx/template-ast-types'

export const enum TemplateContextType {
  OpenTag = 'open-tag',
  CloseTag = 'close-tag',
  Attribute = 'attribute',
  AttributeValue = 'attribute-value',
  DirectiveArgument = 'directive-argument',
  DirectiveModifier = 'directive-modifier',
  DirectiveValue = 'directive-value',
  Interpolation = 'interpolation',

  None = 'none',
  Comment = 'comment',

  Unknown = 'unknown',
}

export interface OpenTagContext {
  type: TemplateContextType.OpenTag
  node: ElementNode
  context: ElementNode
  ancestors: TraversalAncestors
}

export interface CloseTagContext {
  type: TemplateContextType.CloseTag
  node: ElementNode
  context: ElementNode
  ancestors: TraversalAncestors
}

export interface AttributeContext {
  type: TemplateContextType.Attribute
  node: AttributeNode | null
  context: ElementNode
  ancestors: TraversalAncestors
}

export interface AttributeValueContext {
  type: TemplateContextType.AttributeValue
  node: TextNode
  context: AttributeNode
  ancestors: TraversalAncestors
}

export interface DirectiveArgumentContext {
  type: TemplateContextType.DirectiveArgument
  node: SimpleExpressionNode | null
  context: DirectiveNode
  element: ElementNode
  ancestors: TraversalAncestors
}

export interface DirectiveModifierContext {
  type: TemplateContextType.DirectiveModifier
  node: DirectiveNode
  context: ElementNode
  ancestors: TraversalAncestors
}

export interface DirectiveValueContext {
  type: TemplateContextType.DirectiveValue
  node: SimpleExpressionNode
  context: DirectiveNode
  element: ElementNode
  ancestors: TraversalAncestors
}

export interface InterpolationContext {
  type: TemplateContextType.Interpolation
  node: SimpleExpressionNode | null
  context: InterpolationNode
  ancestors: TraversalAncestors
}

export interface CommentContext {
  type: TemplateContextType.Comment
  node: CommentNode
  context: ElementNode | RootNode
  before: ElementNode | null
  after: ElementNode | null

  ancestors: TraversalAncestors
}

export interface NoneContext {
  type: TemplateContextType.None
}

export interface UnknownContext {
  type: TemplateContextType.Unknown
  node: Node

  ancestors: TraversalAncestors
}

export type Context =
  | AttributeContext
  | AttributeValueContext
  | CloseTagContext
  | CommentContext
  | DirectiveArgumentContext
  | DirectiveModifierContext
  | DirectiveValueContext
  | InterpolationContext
  | NoneContext
  | OpenTagContext
  | UnknownContext

export function getTemplateContextAt(
  ast: RootNode | null,
  offset: number,
): Context {
  if (ast == null) return { type: TemplateContextType.None }
  const { node, ancestors } = findTemplateNodeAt(ast, offset)
  if (node == null) return { type: TemplateContextType.None }

  if (isElementNode(node)) {
    if (
      isOffsetInSourceLocation(offset, node.tagLoc) ||
      node.tag.length === 0
    ) {
      return {
        type: TemplateContextType.OpenTag,
        node,
        context: node,
        ancestors,
      }
    } else if (isOffsetInSourceLocation(offset, node.startTagLoc)) {
      return {
        type: TemplateContextType.Attribute,
        node: null,
        context: node,
        ancestors,
      }
    } else if (isOffsetInSourceLocation(offset, node.endTagLoc)) {
      return {
        type: TemplateContextType.CloseTag,
        node,
        context: node,
        ancestors,
      }
    }
  } else if (isAttributeNode(node)) {
    return {
      type: TemplateContextType.Attribute,
      node,
      context: last(ancestors).node as ElementNode,
      ancestors,
    }
  } else if (isDirectiveNode(node)) {
    if (node.arg == null || offset <= node.arg.loc.end.offset) {
      return {
        type: TemplateContextType.DirectiveArgument,
        node: (node.arg ?? null) as SimpleExpressionNode | null,
        context: node,
        element: last(ancestors).node as ElementNode,
        ancestors,
      }
    } else {
      return {
        type: TemplateContextType.DirectiveModifier,
        node,
        context: last(ancestors).node as ElementNode,
        ancestors,
      }
    }
  } else if (isInterpolationNode(node)) {
    return {
      type: TemplateContextType.Interpolation,
      node: node.content as SimpleExpressionNode | null,
      context: node,
      ancestors,
    }
  } else if (isSimpleExpressionNode(node)) {
    if (ancestors.length === 0) {
      return { type: TemplateContextType.Unknown, node, ancestors }
    } else {
      const parent = last(ancestors).node
      if (isInterpolationNode(parent)) {
        return {
          type: TemplateContextType.Interpolation,
          node,
          context: parent,
          ancestors,
        }
      } else if (isDirectiveNode(parent)) {
        if (parent.arg === node) {
          return {
            type: TemplateContextType.DirectiveArgument,
            node,
            context: parent,
            element: last(ancestors, 2).node as ElementNode,
            ancestors,
          }
        } else {
          return {
            type: TemplateContextType.DirectiveValue,
            node,
            context: parent,
            element: last(ancestors, 2).node as ElementNode,
            ancestors,
          }
        }
      }
    }
  } else if (isTextNode(node)) {
    if (ancestors.length > 0) {
      const parent = last(ancestors).node
      if (isAttributeNode(parent)) {
        return {
          type: TemplateContextType.AttributeValue,
          node,
          context: parent,
          ancestors,
        }
      }
    } else {
      return { type: TemplateContextType.None }
    }
  } else if (isCommentNode(node)) {
    const parent =
      ancestors.length === 0 ? ast : (last(ancestors).node as ElementNode)

    const index = parent.children.indexOf(node)
    const before = index > 0 ? parent.children[index - 1] : null
    const after =
      index < parent.children.length - 1 ? parent.children[index + 1] : null

    return {
      type: TemplateContextType.Comment,
      node,
      context: parent,
      ancestors,
      after: isElementNode(after) ? after : null,
      before: isElementNode(before) ? before : null,
    }
  }

  return { type: TemplateContextType.Unknown, node, ancestors }
}

function isOffsetInSourceLocation(
  offset: number,
  loc?: SourceLocation,
): boolean {
  if (loc == null) return false
  return loc.start.offset <= offset && offset <= loc.end.offset
}

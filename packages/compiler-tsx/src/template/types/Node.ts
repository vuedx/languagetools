import type {
  AttributeNode,
  BaseElementNode,
  CompoundExpressionNode,
  DirectiveNode,
  Node,
  SourceLocation,
} from '@vue/compiler-core'
import type { Scope } from '../scope/Scope'

export interface CustomNode extends Node {
  scope: Scope
}

export interface CustomBaseElementNode extends BaseElementNode {
  hoists?: CompoundExpressionNode[]
  tagLoc: SourceLocation
  startTagLoc: SourceLocation
  endTagLoc?: SourceLocation
}

export interface CustomDirectiveNode extends DirectiveNode {
  nameLoc?: SourceLocation
  modifierLocs: SourceLocation[]
}

export interface CustomAttributeNode extends AttributeNode {
  nameLoc: SourceLocation
}

declare module '@vue/compiler-core' {
  export interface Node {
    scope: Scope
  }

  export interface ForNode {
    hoists: CompoundExpressionNode[]
  }

  export interface BaseElementNode {
    hoists?: CompoundExpressionNode[]
    tagLoc: SourceLocation
    startTagLoc: SourceLocation
    endTagLoc?: SourceLocation
  }

  export interface AttributeNode {
    nameLoc: SourceLocation
  }

  export interface DirectiveNode {
    nameLoc?: SourceLocation
    modifierLocs: SourceLocation[]
    resolvedName?: string
  }

  export interface ComponentNode {
    resolvedName?: string
    slots: Array<{
      name?: ExpressionNode
      args?: ExpressionNode
      hoists: CompoundExpressionNode[]
      children: Node[]
    }>
    unassignedSlots?: Node[]
  }
}

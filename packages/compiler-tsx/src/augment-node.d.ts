import { Scope } from './scope'

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

  export interface DirectiveNode {
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

import type { CompoundExpressionNode } from '@vue/compiler-core'
import { createCompoundExpression } from '@vue/compiler-core'

export class ScopeManager {
  private readonly hoists: CompoundExpressionNode[][] = []
  private readonly identifiers: Record<string, number> = {}
  private readonly rootScope: CompoundExpressionNode[] = []

  private currentScope: CompoundExpressionNode[] = this.rootScope

  getRootScope(): CompoundExpressionNode[] {
    return this.rootScope
  }

  addIdentifier(value: string): void {
    this.identifiers[value] = 1 + (this.identifiers[value] ?? 0)
  }

  hasIdentifier(value: string): boolean {
    return (this.identifiers[value] ?? 0) > 0
  }

  removeIdentifier(value: string): void {
    this.identifiers[value] = Math.max(0, this.identifiers[value] ?? 0 - 1)
  }

  scopeHoist(expression: string | CompoundExpressionNode): void {
    if (typeof expression === 'string') {
      this.currentScope.push(createCompoundExpression([expression]))
    } else {
      this.currentScope.push(expression)
    }
  }

  hoist(expression: string | CompoundExpressionNode): void {
    if (typeof expression === 'string') {
      this.rootScope.push(createCompoundExpression([expression]))
    } else {
      this.rootScope.push(expression)
    }
  }

  createNewHoistScope(): CompoundExpressionNode[] {
    this.hoists.push(this.currentScope)
    this.currentScope = []

    return this.currentScope
  }

  popHoistScope(): CompoundExpressionNode[] {
    const scope = this.currentScope
    this.currentScope = this.hoists.pop() ?? []
    return scope
  }
}

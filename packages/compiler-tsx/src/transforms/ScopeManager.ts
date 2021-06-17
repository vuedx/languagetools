import type { CompoundExpressionNode } from '@vue/compiler-core'
import { createCompoundExpression } from '@vue/compiler-core'

export class ScopeManager {
  private readonly hoists: CompoundExpressionNode[][] = []
  private readonly identifiers: Record<string, number> = {}
  private readonly imports: Record<string, Record<string, string>> = {}

  private currentScope: CompoundExpressionNode[] = []

  getImports(): CompoundExpressionNode[] {
    const getSpecifiers = (specifiers: Record<string, string>): string => {
      return Object.entries(specifiers)
        .map(([local, exported]) => {
          return local === exported ? exported : `${exported} as ${local}`
        })
        .join(', ')
    }

    return Object.entries(this.imports).map(([source, specifiers]) =>
      createCompoundExpression([
        `import { ${getSpecifiers(specifiers)} } from '${source}';`,
      ]),
    )
  }

  addImport(source: string, exported: string, local: string): void {
    const specifiers = (this.imports[source] = this.imports[source] ?? {})

    if (specifiers[local] == null) {
      specifiers[local] = exported
    }
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

  hoist(expression: string | CompoundExpressionNode): void {
    if (typeof expression === 'string') {
      this.currentScope.push(createCompoundExpression([expression]))
    } else {
      this.currentScope.push(expression)
    }
  }

  createNewHoistScope(): void {
    this.hoists.push(this.currentScope)
    this.currentScope = []
  }

  popHoistScope(): CompoundExpressionNode[] {
    const scope = this.currentScope
    this.currentScope = this.hoists.pop() ?? []
    return scope
  }
}

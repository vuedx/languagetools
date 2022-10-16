import { first } from '@vuedx/shared'
import TypeScript from 'typescript/lib/tsserverlibrary'

export interface KnownIdentifier {
  name: string
  kind:
    | 'variable'
    | 'function'
    | 'class'
    | 'enum'
    | 'ref'
    | 'maybeRef'
    | 'external'
    | 'externalRef'
    | 'externalMaybeRef'
}

export function findIdentifiers(
  ts: typeof TypeScript,
  program: TypeScript.Program,
  sourceFile: TypeScript.SourceFile,
): KnownIdentifier[] {
  const checker = program.getTypeChecker()
  const identifiers: KnownIdentifier[] = []

  checker
    .getSymbolsInScope(
      sourceFile,
      (ts.SymbolFlags.FunctionScopedVariable |
        ts.SymbolFlags.BlockScopedVariable |
        ts.SymbolFlags.Function |
        ts.SymbolFlags.Class |
        ts.SymbolFlags.ConstEnum |
        ts.SymbolFlags.RegularEnum |
        ts.SymbolFlags.Alias) &
        ~(
          ts.SymbolFlags.Interface |
          ts.SymbolFlags.TypeLiteral |
          ts.SymbolFlags.TypeParameter |
          ts.SymbolFlags.TypeAlias
        ),
    )
    .forEach((sym) => {
      const name = sym.getName()
      const flags = sym.getFlags()
      const kind: KnownIdentifier['kind'] =
        (flags & ts.SymbolFlags.Function) !== 0
          ? 'function'
          : (flags & ts.SymbolFlags.Class) !== 0
          ? 'class'
          : (flags & ts.SymbolFlags.ConstEnum) !== 0 ||
            (flags & ts.SymbolFlags.RegularEnum) !== 0
          ? 'enum'
          : (flags & ts.SymbolFlags.Alias) !== 0
          ? 'externalMaybeRef'
          : 'maybeRef'

      if (
        kind === 'maybeRef' &&
        sym.valueDeclaration != null &&
        ts.isVariableDeclaration(sym.valueDeclaration) &&
        sym.valueDeclaration.initializer != null
      ) {
        const { initializer, type } = sym.valueDeclaration

        if (type == null) {
          if (
            !(
              ts.isCallExpression(initializer) || ts.isIdentifier(initializer)
            ) ||
            (ts.isCallExpression(initializer) &&
              ts.isIdentifier(initializer.expression) &&
              ['defineProps', 'defineEmits'].includes(
                initializer.expression.getText(),
              ))
          ) {
            return identifiers.push({ name, kind: 'variable' })
          }
        }
      }

      if (
        kind === 'externalMaybeRef' &&
        sym.declarations != null &&
        sym.declarations.length > 0
      ) {
        const declaration = first(sym.declarations)
        if (ts.isImportClause(declaration)) {
          if (declaration.isTypeOnly) return
          if (
            ts.isStringLiteral(declaration.parent.moduleSpecifier) &&
            declaration.parent.moduleSpecifier.text.endsWith('.vue')
          ) {
            return identifiers.push({ name, kind: 'external' })
          }
        } else if (ts.isNamespaceImport(declaration)) {
          if (declaration.parent.isTypeOnly) return
        } else if (ts.isImportSpecifier(declaration)) {
          if (declaration.isTypeOnly) return
          if (declaration.parent.parent.isTypeOnly) return
        }
      }

      return identifiers.push({ name, kind })
    })

  return identifiers
}

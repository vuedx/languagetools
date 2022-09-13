import * as T from '@babel/types'

/**
 * Find local identifier name of imported identifier.
 */

export function findLocalIdentifierName(
  ast: T.File,
  source: string,
  exportedName: string,
): string | null {
  for (const statement of ast.program.body) {
    if (T.isImportDeclaration(statement)) {
      if (statement.source.value === source) {
        for (const specifier of statement.specifiers) {
          if (T.isImportSpecifier(specifier)) {
            const name = T.isIdentifier(specifier.imported)
              ? specifier.imported.name
              : specifier.imported.value
            if (name === exportedName) {
              return specifier.local.name
            }
          }
        }
      }
    }
  }

  return null
}

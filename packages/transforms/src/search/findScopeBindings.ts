import * as T from '@babel/types'
import { memoizeByFirstArg } from '@vuedx/shared'

export const findScopeBindings = memoizeByFirstArg(
  (statements: T.Statement[]): string[] => {
    const identifiers = new Set<string>()

    const processIdentifier = (node: T.Identifier): void => {
      identifiers.add(node.name)
    }
    const processAssignmentPattern = (node: T.AssignmentPattern): void => {
      if (T.isIdentifier(node.left)) processIdentifier(node.left)
      else if (T.isObjectPattern(node.left)) processObjectPattern(node.left)
      else if (T.isArrayPattern(node.left)) processArrayPattern(node.left)
    }
    const processRestElement = (node: T.RestElement): void => {
      if (T.isIdentifier(node.argument)) processIdentifier(node.argument)
    }
    const processObjectPattern = (node: T.ObjectPattern): void => {
      node.properties.forEach((property) => {
        if (T.isRestElement(property)) {
          processRestElement(property)
        } else if (T.isObjectProperty(property)) {
          if (T.isIdentifier(property.value)) {
            processIdentifier(property.value)
          } else if (T.isAssignmentPattern(property.value)) {
            processAssignmentPattern(property.value)
          } else if (T.isRestElement(property.value)) {
            processRestElement(property.value)
          } else if (T.isArrayPattern(property.value)) {
            processArrayPattern(property.value)
          } else if (T.isObjectPattern(property.value)) {
            processObjectPattern(property.value)
          }
        } else {
          // - exaustive if branches
          // property
        }
      })
    }
    const processArrayPattern = (node: T.ArrayPattern): void => {
      node.elements.forEach((element) => {
        if (T.isIdentifier(element)) {
          processIdentifier(element)
        } else if (T.isAssignmentPattern(element)) {
          processAssignmentPattern(element)
        } else if (T.isRestElement(element)) {
          processRestElement(element)
        } else if (T.isArrayPattern(element)) {
          processArrayPattern(element)
        } else if (T.isObjectPattern(element)) {
          processObjectPattern(element)
        }
      })
    }
    statements.forEach((statement) => {
      if (T.isImportDeclaration(statement) && statement.importKind !== 'type') {
        statement.specifiers.forEach((specifier) => {
          if (T.isImportSpecifier(specifier) && specifier.importKind === 'type')
            return // type-only import

          identifiers.add(specifier.local.name)
        })
      } else if (
        T.isFunctionDeclaration(statement) ||
        T.isTSDeclareFunction(statement)
      ) {
        if (statement.id != null) processIdentifier(statement.id)
      } else if (T.isVariableDeclaration(statement)) {
        statement.declarations.forEach((declaration) => {
          if (T.isIdentifier(declaration.id)) processIdentifier(declaration.id)
          else if (T.isObjectPattern(declaration.id)) {
            processObjectPattern(declaration.id)
          } else if (T.isArrayPattern(declaration.id)) {
            processArrayPattern(declaration.id)
          }
        })
      } else if (T.isClassDeclaration(statement)) {
        processIdentifier(statement.id)
      } else if (T.isTSEnumDeclaration(statement)) {
        processIdentifier(statement.id)
      }
    })

    return Array.from(identifiers)
  },
)

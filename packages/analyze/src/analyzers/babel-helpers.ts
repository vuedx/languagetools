import generate from '@babel/generator'
import traverse, { NodePath } from '@babel/traverse'
import t, {
  cloneNode,
  isExportSpecifier,
  isIdentifier,
  isTSInterfaceDeclaration,
  isTSTypeAliasDeclaration,
  traverseFast,
} from '@babel/types'
import { ImportSource } from '../component'
import { Context, ScriptAnalyzerContext } from '../types'

export function getTypeAnnotation(
  node$:
    | NodePath<t.TSTypeAnnotation>
    | NodePath<t.TSAsExpression>
    | NodePath<t.TSTypeAliasDeclaration>
    | NodePath<t.TSInterfaceDeclaration>,
  context: Context,
): { type: string; imports: ImportSource[] } {
  try {
    const imports: ImportSource[] = []
    const identifiers: Record<string, string[]> = {}
    const processed = new Set<string>()
    const collect = (name$: NodePath<t.Identifier>): void => {
      const name = name$.node.name
      if (processed.has(name)) return
      const source = getIdentifierSource(name$, context)
      const inline = source.filter(
        (item) => typeof item === 'string',
      ) as string[]
      processed.add(name)
      if (inline.length > 0) identifiers[name] = inline
      source.forEach((item) => {
        if (typeof item === 'object') {
          imports.push(item)
        }
      })
    }

    traverse(
      node$.node,
      {
        TSTypeReference(type$) {
          const typeName$ = type$.get('typeName') as NodePath
          if (typeName$.isIdentifier()) {
            collect(typeName$)
          } else if (typeName$.isTSQualifiedName()) {
            const left$ = typeName$.get('left') as NodePath
            if (left$.isIdentifier()) {
              collect(left$)
            }
          }
        },
      },
      node$.scope,
      null,
      node$.parentPath,
    )

    const node = cloneNode(
      node$.isTSInterfaceDeclaration()
        ? node$.node.body
        : node$.node.typeAnnotation,
    )

    const knownImports = new Set(imports.map((i) => i.localName))
    traverseFast(node, (node) => {
      if (isIdentifier(node) && !knownImports.has(node.name)) {
        const identifier = identifiers[node.name]
        if (identifier != null) {
          if (identifier.length === 1) {
            node.name = `(${identifier[0]})`
          } else if (identifier.length > 1) {
            node.name = `(${identifier.map((id) => `(${id})`).join(' & ')})`
          }
        }
      }
    })
    // TODO: Inline unresolved identifiers, before generating.
    const type = stringifyBabelNode(node)

    return { type, imports }
  } catch (error) {
    console.error(error)

    return { type: 'any', imports: [] }
  }
}

export function stringifyBabelNode(node: t.Node): string {
  return generate(node, {
    sourceMaps: false,
    concise: true,
  }).code
}

function getIdentifierSource(
  name$: NodePath<t.Identifier>,
  context: Context| ScriptAnalyzerContext,
): Array<ImportSource | string> {
  const name = name$.node.name
  const binding = name$.scope.getBinding(name)
  const result: Array<ImportSource | string> = []
  if (binding != null) {
    const node$ = binding.path
    if (node$.isImportDefaultSpecifier() || node$.isImportSpecifier()) {
      const parent$ = node$.parentPath as NodePath<t.ImportDeclaration>
      const statement = parent$.node
      const moduleName = statement.source.value
      const localName = name
      const importSource: ImportSource = { moduleName, localName }
      if (node$.isImportDefaultSpecifier()) {
        result.push(importSource)
      } else if (node$.isImportSpecifier()) {
        const imported$ = node$.get('imported') as NodePath<
          t.ImportSpecifier['imported']
        >
        importSource.exportName = imported$.isIdentifier()
          ? imported$.node.name
          : imported$.isStringLiteral()
          ? imported$.node.value
          : undefined // Should not ever happen.
        result.push(importSource)
      }
    }
  } else if ('ast' in context) {
    traverse(context.ast, {
      ExportNamedDeclaration(statement$) {
        if (context.mode !== 'setup') {
          const statement = statement$.node
          if (statement.specifiers.length > 0) {
            const specifier = statement.specifiers.find(
              (specifier) =>
                isExportSpecifier(specifier) &&
                (isIdentifier(specifier.exported)
                  ? specifier.exported.name === name
                  : specifier.exported.value === name),
            )

            if (specifier != null) {
              result.push({
                moduleName: context.fileName,
                localName: name,
                exportName: name,
              })
            }
          } else if (
            isTSTypeAliasDeclaration(statement.declaration) ||
            isTSInterfaceDeclaration(statement.declaration)
          ) {
            if (statement.declaration.id.name === name) {
              result.push({
                moduleName: context.fileName,
                localName: name,
                exportName: name,
              })
            }
          }
        }
      },
      TSTypeAliasDeclaration(statement$) {
        if (statement$.node.id.name === name) {
          if (statement$.node.typeParameters == null) {
            // No generics.
            const raw = getTypeAnnotation(statement$, context)

            result.push(raw.type, ...raw.imports)
          }
        }
      },
      TSInterfaceDeclaration(statement$) {
        if (statement$.node.id.name === name) {
          if (statement$.node.typeParameters == null) {
            // No generics
            const raw = getTypeAnnotation(statement$, context)

            result.push(raw.type, ...raw.imports)
          }

          // TODO: Handle extends
        }
      },
    })
  }

  return result
}

export function inferType(node$: NodePath): string {
  if (node$.isStringLiteral()) {
    return 'string'
  } else if (node$.isNumericLiteral()) {
    return 'number'
  } else if (node$.isBooleanLiteral()) {
    return 'boolean'
  } else if (node$.isArrayExpression()) {
    const elements$ = node$.get('elements') as NodePath[]
    return `[${elements$.map(inferType).join(',')}]`
  } else {
    return 'any'
  }
}

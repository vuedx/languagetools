import { Binding, NodePath } from '@babel/traverse'
import {
  ImportDeclaration,
  isIdentifier,
  isObjectExpression,
  isObjectProperty,
  isStringLiteral,
  isExportSpecifier,
  ObjectProperty,
  ExportSpecifier,
} from '@babel/types'
import { ImportSource } from '../component'
import { Plugin, ScriptAnalyzerContext } from '../types'
import { createSourceRange } from '../utilities'

export const ComponentsOptionAnalyzer: Plugin = {
  babel: (path$, ctx) => {
    if (path$.isExportNamedDeclaration()) {
      const node = path$.node
      if (node.source?.value.endsWith('.vue') === true) {
        const specifier = node.specifiers.find(
          (specifier) =>
            isExportSpecifier(specifier) &&
            isIdentifier(specifier.local) &&
            specifier.local.name === 'default',
        ) as ExportSpecifier | undefined

        if (specifier != null) {
          const name = getComponentName(specifier.exported) as string

          ctx.component.addLocalComponent(
            name,
            {
              moduleName: node.source.value,
              localName: name,
              loc: createSourceRange(ctx, node),
            },
            createSourceRange(ctx, node),
          )
        }
      }
    }
  },
  options: {
    components: (path$, ctx) => {
      const property = path$.node
      if (isObjectProperty(property)) {
        const { value: components } = property
        if (isObjectExpression(components)) {
          components.properties.forEach((declaration) => {
            if (isObjectProperty(declaration)) {
              const name = getComponentName(declaration.key)
              if (name != null) {
                if (isIdentifier(declaration.value)) {
                  const info = resolveComponentInformation(
                    path$.scope.getBinding(declaration.value.name),
                    ctx,
                  )
                  if (info != null)
                    ctx.component.addLocalComponent(
                      name,
                      info,
                      createSourceRange(ctx, declaration),
                    )
                }
              }
            }
          })
        }
      }
    },
  },
}

function getComponentName(key: ObjectProperty['key']): string | undefined {
  if (isIdentifier(key)) return key.name
}

function resolveComponentInformation(
  binding: Binding | undefined,
  context: ScriptAnalyzerContext,
): ImportSource | undefined {
  if (binding == null) return

  switch (binding.kind) {
    case 'module':
      {
        const path$ = (binding.path as unknown) as NodePath
        if (path$.isImportDefaultSpecifier()) {
          const node = path$.node
          const parent = path$.parent as ImportDeclaration

          return {
            moduleName: parent.source.value,
            localName: node.local.name,
            loc: createSourceRange(context, parent),
          }
        } else if (path$.isImportSpecifier()) {
          const node = path$.node
          const parent = path$.parent as ImportDeclaration

          return {
            moduleName: parent.source.value,
            exportName: isStringLiteral(node.imported)
              ? node.imported.value
              : node.imported.name,
            localName: node.local.name,
            loc: createSourceRange(context, parent),
          }
        }
      }
      break
  }
}

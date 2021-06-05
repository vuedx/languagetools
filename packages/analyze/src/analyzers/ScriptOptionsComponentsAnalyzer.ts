import { Binding, NodePath } from '@babel/traverse'
import {
  Identifier,
  ImportDeclaration,
  isIdentifier,
  isImportSpecifier,
  isObjectExpression,
  isObjectProperty,
  isMemberExpression,
  isStringLiteral,
  ObjectProperty,
  MemberExpression,
} from '@babel/types'
import { isPascalCase } from '@vuedx/shared'
import { ImportSourceWithLocation } from '../component'
import { createPlugin, ScriptAnalyzerContext } from '../types'
import { createSourceRange } from '../utilities'

export const ComponentsOptionAnalyzer = createPlugin({
  babel: (path$, ctx) => {
    if (ctx.mode === 'setup' && path$.isImportDeclaration()) {
      const node = path$.node
      node.specifiers.filter((specifier) => {
        if (
          isIdentifier(specifier.local) &&
          (node.source.value.endsWith('.vue') ||
            isPascalCase(specifier.local.name))
        ) {
          ctx.component.addLocalComponent(
            specifier.local.name,
            {
              moduleName: node.source.value,
              exportName: isImportSpecifier(specifier)
                ? getComponentName(specifier.imported)
                : undefined,
              localName: specifier.local.name,
              loc: createSourceRange(ctx, node),
            },
            createSourceRange(ctx, node),
            'scriptSetup',
          )
        }
      })
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
                  if (info != null) {
                    ctx.component.addLocalComponent(
                      name,
                      info,
                      createSourceRange(ctx, declaration),
                    )
                  }
                } else if (isMemberExpression(declaration.value)) {
                  const id = getIdentifierFromMemberExpression(
                    declaration.value,
                  )
                  if (id != null) {
                    const info = resolveComponentInformation(
                      path$.scope.getBinding(id.name),
                      ctx,
                    )
                    if (info != null) {
                      ctx.component.addLocalComponent(
                        name,
                        info,
                        createSourceRange(ctx, declaration),
                      )
                    }
                  }
                }
              }
            }
          })
        }
      }
    },
  },
})

function getComponentName(key: ObjectProperty['key']): string | undefined {
  if (isIdentifier(key)) return key.name
  if (isStringLiteral(key)) return key.value
}

function getIdentifierFromMemberExpression(
  exp: MemberExpression,
): Identifier | undefined {
  if (isIdentifier(exp.object)) return exp.object
  if (isMemberExpression(exp.object))
    return getIdentifierFromMemberExpression(exp.object)
}

function resolveComponentInformation(
  binding: Binding | undefined,
  context: ScriptAnalyzerContext,
): ImportSourceWithLocation | undefined {
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

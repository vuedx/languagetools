import { GeneratorResult } from '@babel/generator'
import * as T from '@babel/types'
import { first, invariant, memoizeByFirstArg } from '@vuedx/shared'
import { generate } from '../generate'
import { findScopeBindings } from '../search/findScopeBindings'

export interface TransformScriptSetupOptions {
  internalIdentifierPrefix: string
  typeIdentifier: string
  runtimeModuleName: string
  isTypeScript: boolean
}

export interface TransformScriptSetupResult extends GeneratorResult {
  exportIdentifier: string
  propsIdentifier?: string
  emitIdentifier?: string
  exposeIdentifier?: string
  identifiers: string[]
}

export const transformScriptSetup = memoizeByFirstArg(
  (ast: T.File, options: TransformScriptSetupOptions) => {
    const props = options.internalIdentifierPrefix + 'props'
    const emit = options.internalIdentifierPrefix + 'emits'
    const expose = options.internalIdentifierPrefix + 'expose'
    const defineComponent = options.internalIdentifierPrefix + 'defineComponent'
    const result: TransformScriptSetupResult = {
      code: '',
      map: null,
      exportIdentifier: options.internalIdentifierPrefix + 'SetupComponent',
      identifiers: [],
    }

    const hoists: T.Statement[] = [
      createNamedImport(
        'defineComponent',
        defineComponent,
        options.runtimeModuleName,
      ),
    ]
    const others: T.Statement[] = []

    ast.program.body.forEach((statement) => {
      if (
        T.isImportDeclaration(statement) ||
        T.isTSInterfaceDeclaration(statement) ||
        T.isTSTypeAliasDeclaration(statement) ||
        T.isTSEnumDeclaration(statement)
      ) {
        hoists.push(statement)
      } else if (T.isExpressionStatement(statement)) {
        if (T.isCallExpression(statement.expression)) {
          if (T.isIdentifier(statement.expression.callee)) {
            switch (statement.expression.callee.name) {
              case 'withDefaults': {
                const args = statement.expression.arguments
                if (args.length >= 1) {
                  result.propsIdentifier = props
                  invariant(T.isExpression(args[0]))
                  // create props declaration
                  hoists.push(createVariable(props, args[0]))

                  // replace withDefaults arguments
                  statement = T.cloneNode(statement, true)
                  invariant(T.isCallExpression(statement.expression))
                  statement.expression.arguments[0] = T.identifier(props)
                  hoists.push(statement)
                }
                break
              }

              case 'defineProps':
                hoists.push(createVariable(props, statement.expression))
                result.propsIdentifier = props
                break
              case 'defineEmits':
                hoists.push(
                  T.expressionStatement(
                    transformDefineEmits(statement.expression),
                  ),
                )

                break
              case 'defineExpose': {
                hoists.push(
                  T.expressionStatement(transformExpose(statement.expression)),
                )
                break
              }
              default:
                others.push(statement)
            }
          } else {
            others.push(statement)
          }
        } else {
          others.push(statement)
        }
      } else if (T.isVariableDeclaration(statement)) {
        const declarations: T.VariableDeclarator[] = []
        const extracted: T.VariableDeclarator[] = []
        for (const declaration of statement.declarations) {
          let isHandled = false
          if (T.isCallExpression(declaration.init)) {
            if (
              T.isIdentifier(declaration.init.callee) &&
              T.isIdentifier(declaration.id)
            ) {
              isHandled = true
              switch (declaration.init.callee.name) {
                case 'withDefaults': {
                  const args = declaration.init.arguments
                  if (args.length >= 1) {
                    result.propsIdentifier = props
                    invariant(T.isExpression(args[0]))
                    // create props declaration
                    hoists.push(createVariable(props, args[0]))

                    // replace withDefaults arguments
                    const statement = T.cloneNode(declaration.init, true)
                    invariant(T.isCallExpression(statement))
                    statement.arguments[0] = T.identifier(props)
                    hoists.push(createVariable(declaration.id.name, statement))
                  }

                  break
                }

                case 'defineProps':
                  hoists.push(createVariable(declaration.id, declaration.init))
                  result.propsIdentifier = declaration.id.name
                  break
                case 'defineEmits':
                  hoists.push(
                    createVariable(
                      declaration.id,
                      transformDefineEmits(declaration.init),
                    ),
                  )

                  break

                default:
                  isHandled = false
              }
            }
          }

          if (!isHandled) {
            declarations.push(declaration)
          } else {
            extracted.push(declaration)
          }
        }

        if (extracted.length > 0) {
          if (declarations.length > 0) {
            others.push(T.variableDeclaration(statement.kind, declarations))
          }
        } else {
          others.push(statement)
        }
      } else if (T.isExportNamedDeclaration(statement)) {
        if (
          T.isTSTypeAliasDeclaration(statement.declaration) ||
          T.isTSInterfaceDeclaration(statement.declaration) ||
          T.isTSEnumDeclaration(statement.declaration) ||
          statement.exportKind === 'type'
        ) {
          hoists.push(statement)
        } else {
          others.push(statement)
        }
      } else {
        others.push(statement)
      }
    })

    result.identifiers = findScopeBindings(ast.program.body)

    const exportsFromSetup = result.identifiers.slice()
    if (result.exposeIdentifier != null) {
      exportsFromSetup.push(result.exposeIdentifier)
    }

    const arg0 = T.identifier(options.internalIdentifierPrefix + 'arg0')
    const returnStatement = T.returnStatement(
      T.objectExpression(
        exportsFromSetup.map((id) =>
          T.objectProperty(T.identifier(id), T.identifier(id), false, true),
        ),
      ),
    )
    T.addComment(returnStatement, 'leading', '<vuedx:setupGlobals>', false)
    T.addComment(returnStatement, 'trailing', '</vuedx:setupGlobals>', false)
    const setup = T.arrowFunctionExpression(
      [arg0],
      T.blockStatement([...others, returnStatement]),

      isAsync(others),
    )
    if (result.propsIdentifier != null) {
      if (options.isTypeScript) {
        arg0.typeAnnotation = T.tsTypeAnnotation(
          T.tsTypeQuery(T.identifier(result.propsIdentifier)),
        )
      } else {
        T.addComment(
          setup,
          'leading',
          [
            `*`,
            ` * @param {typeof ${result.propsIdentifier}} ${options.internalIdentifierPrefix}arg0`,
            ` `,
          ].join('\n'),
          false,
        )
      }
    }

    const component = T.callExpression(T.identifier(defineComponent), [setup])
    const node = createVariable(result.exportIdentifier, component)
    const output = generate([...hoists, node])

    return { ...result, ...output }

    function transformDefineEmits(node: T.CallExpression): T.CallExpression {
      node = T.cloneNode(node, true)

      if (node.arguments.length > 0) {
        if (T.isExpression(node.arguments[0])) {
          hoists.push(createVariable(emit, node.arguments[0]))
          node.arguments[0] = T.identifier(emit)
          result.emitIdentifier = emit
        }
      } else if (node.typeParameters?.params?.[0] != null) {
        const emitType = `${emit}Type`
        hoists.push(
          T.tsTypeAliasDeclaration(
            T.identifier(emitType),
            null,
            node.typeParameters.params[0],
          ),
        )
        hoists.push(
          createVariable(
            emit,
            T.tsAsExpression(
              T.objectExpression([]),
              T.tsTypeReference(
                T.tsQualifiedName(
                  T.tsQualifiedName(
                    T.identifier(options.typeIdentifier),
                    T.identifier('internal'),
                  ),
                  T.identifier('EmitTypeToEmits'),
                ),

                T.tsTypeParameterInstantiation([
                  T.tsTypeReference(T.identifier(emitType)),
                ]),
              ),
            ),
          ),
        )

        node.typeParameters.params[0] = T.tsTypeReference(
          T.identifier(emitType),
        )

        result.emitIdentifier = emit
      }

      return node
    }

    function transformExpose(node: T.CallExpression): T.CallExpression {
      node = T.cloneNode(node, true)

      if (node.arguments.length > 0) {
        if (T.isExpression(node.arguments[0])) {
          hoists.push(createVariable(expose, node.arguments[0]))
          node.arguments[0] = T.identifier(expose)
          result.exposeIdentifier = expose
        }
      } else if (node.typeParameters?.params?.[0] != null) {
        const exposeType = `${expose}Type`
        hoists.push(
          T.tsTypeAliasDeclaration(
            T.identifier(exposeType),
            null,
            node.typeParameters.params[0],
          ),
        )

        node.typeParameters.params[0] = T.tsTypeReference(
          T.identifier(exposeType),
        )
        // TODO: add expose for type-only usage
        // result.exposeIdentifier = expose
      }

      return node
    }
  },
)

export interface TransformScriptResult extends GeneratorResult {
  exportIdentifier: string
  selfName?: string
  inheritAttrs?: boolean
  identifiers: string[]
}

export const transformScript = memoizeByFirstArg(
  (ast: T.File, options: TransformScriptSetupOptions) => {
    const result: TransformScriptResult = {
      code: '',
      map: null,
      exportIdentifier: options.internalIdentifierPrefix + 'Script_Component',
      identifiers: [],
    }

    const defineComponent =
      options.internalIdentifierPrefix + 'Script_defineComponent'
    let exportDefaultDecl: T.ExportDefaultDeclaration | undefined

    ast.program.body.forEach((statement) => {
      if (T.isExportDefaultDeclaration(statement)) {
        exportDefaultDecl = statement
      } else if (T.isExportNamedDeclaration(statement)) {
        if (T.isVariableDeclaration(statement.declaration)) {
          statement.declaration.declarations.forEach((decl) => {
            if (T.isIdentifier(decl.id)) {
              if (decl.id.name === 'inheritAttrs') {
                if (T.isBooleanLiteral(decl.init)) {
                  result.inheritAttrs = decl.init.value
                }
              } else if (decl.id.name === 'name') {
                if (T.isStringLiteral(decl.init)) {
                  result.selfName = decl.init.value
                }
              }
            }
          })
        }
      }
    })

    const statements: T.Statement[] = []

    let definition: T.CallExpression | undefined
    if (exportDefaultDecl != null) {
      if (T.isCallExpression(exportDefaultDecl.declaration)) {
        definition = exportDefaultDecl.declaration
        if (exportDefaultDecl.declaration.arguments.length > 0) {
          const arg = first(exportDefaultDecl.declaration.arguments)
          if (T.isObjectExpression(arg)) {
            arg.properties.forEach((prop) => {
              if (T.isObjectProperty(prop)) {
                if (T.isIdentifier(prop.key)) {
                  if (prop.key.name === 'inheritAttrs') {
                    if (T.isBooleanLiteral(prop.value)) {
                      result.inheritAttrs = prop.value.value
                    }
                  } else if (prop.key.name === 'name') {
                    if (T.isStringLiteral(prop.value)) {
                      result.selfName = prop.value.value
                    }
                  }
                }
              }
            })
          }
        }
      } else if (T.isExpression(exportDefaultDecl.declaration)) {
        statements.push(
          createNamedImport(
            'defineComponent',
            defineComponent,
            options.runtimeModuleName,
          ),
        )
        definition = T.callExpression(T.identifier(defineComponent), [
          exportDefaultDecl.declaration,
        ])

        if (T.isObjectExpression(exportDefaultDecl.declaration)) {
          exportDefaultDecl.declaration.properties.forEach((prop) => {
            if (T.isObjectProperty(prop)) {
              if (T.isIdentifier(prop.key)) {
                if (prop.key.name === 'inheritAttrs') {
                  if (T.isBooleanLiteral(prop.value)) {
                    result.inheritAttrs = prop.value.value
                  }
                } else if (prop.key.name === 'name') {
                  if (T.isStringLiteral(prop.value)) {
                    result.selfName = prop.value.value
                  }
                }
              }
            }
          })
        }
      }
    }

    if (definition == null) {
      statements.push(
        createNamedImport(
          'defineComponent',
          defineComponent,
          options.runtimeModuleName,
        ),
      )
      definition = T.callExpression(T.identifier(defineComponent), [
        T.objectExpression([]),
      ])

      statements.push(
        T.variableDeclaration('const', [
          T.variableDeclarator(
            T.identifier(result.exportIdentifier),
            definition,
          ),
        ]),
      )
    }

    result.identifiers = findScopeBindings(ast.program.body)

    const output = generate([
      ...statements,
      ...ast.program.body.map((statement) =>
        statement === exportDefaultDecl
          ? T.variableDeclaration('const', [
              T.variableDeclarator(
                T.identifier(result.exportIdentifier),
                definition,
              ),
            ])
          : statement,
      ),
    ])

    return { ...result, ...output }
  },
)

function createNamedImport(
  name: string,
  localName: string,
  source: string,
): T.ImportDeclaration {
  return T.importDeclaration(
    [T.importSpecifier(T.identifier(localName), T.identifier(name))],
    T.stringLiteral(source),
  )
}

function createVariable(
  name: string | T.LVal,
  init: T.Expression,
): T.VariableDeclaration {
  return T.variableDeclaration('const', [
    T.variableDeclarator(
      typeof name === 'string' ? T.identifier(name) : name,
      init,
    ),
  ])
}

function isAsync(statements: T.Statement[]): boolean {
  for (const statement of statements) {
    if (T.isExpressionStatement(statement)) {
      if (T.isAwaitExpression(statement.expression)) {
        return true
      }
    } else if (T.isVariableDeclaration(statement)) {
      for (const declaration of statement.declarations) {
        if (T.isAwaitExpression(declaration.init)) {
          return true
        }
      }
    }
  }

  return false
}

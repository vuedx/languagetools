import { GeneratorResult } from '@babel/generator'
import * as T from '@babel/types'
import { invariant, memoizeByFirstArg } from '@vuedx/shared'
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
              case 'defineExpose':
                others.push(createVariable(expose, statement.expression))
                result.exposeIdentifier = expose
                break
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
                case 'defineExpose':
                  others.push(
                    statement.declarations.length === 1
                      ? statement
                      : createVariable(declaration.id, declaration.init),
                  )
                  result.exposeIdentifier = declaration.id.name
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

    const arg0 = T.identifier(options.internalIdentifierPrefix + 'arg0')
    const returnStatement = T.returnStatement(
      T.objectExpression(
        result.identifiers.map((id) =>
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

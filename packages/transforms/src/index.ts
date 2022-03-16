import * as T from '@babel/types'
import template from '@babel/template'
import generator, { GeneratorResult, GeneratorOptions } from '@babel/generator'
import { parse, ParserOptions } from '@babel/parser'

interface ParseOptions extends ParserOptions {
  isScriptSetup: boolean
  lang: string
}

export function toAST(
  code: string,
  options: Partial<ParseOptions> = {},
): T.File {
  const { isScriptSetup = false, lang = 'js', ...config } = options
  const finalOptions = {
    sourceType: 'module' as const,
    ...config,
    errorRecovery: true,
    plugins: [
      'bigInt',
      'nullishCoalescingOperator',
      'optionalChaining',
      'optionalCatchBinding',
      'dynamicImport',
      'logicalAssignment',
    ] as Required<ParserOptions>['plugins'],
  }

  if (options.plugins != null) finalOptions.plugins.push(...options.plugins)

  if (isScriptSetup) {
    finalOptions.plugins.push('topLevelAwait')
  }

  if (lang.startsWith('ts')) {
    finalOptions.plugins.push('typescript')
  }

  if (lang.endsWith('x')) {
    finalOptions.plugins.push('jsx')
  }

  finalOptions.plugins = Array.from(new Set(finalOptions.plugins))

  return parse(code, finalOptions) as any
}

export function toCode(
  node: T.Node | T.Node[],
  options: GeneratorOptions = {},
): GeneratorResult {
  const nodes = Array.isArray(node) ? node : [node]
  const statement = T.program(
    nodes
      .map((node) => T.toStatement(node))
      .filter(
        (node): node is T.Statement => node !== false && T.isStatement(node),
      ),
  )

  return generator(statement as any, {
    comments: true,
    ...options,
  })
}

type Evictable<T extends (...args: any) => any> = T & {
  evict(...args: Parameters<T>): void
}

function memoize<F extends (...args: any) => any>(
  fn: F,
  getKey: (args: Parameters<F>) => object,
): Evictable<F> {
  const microcache = new WeakMap()

  const fnx = ((...args) => {
    const key = getKey(args)
    if (microcache.has(key)) return microcache.get(key)
    const value = fn(...args)

    microcache.set(key, value)

    return value
  }) as Evictable<F>

  fnx.evict = (...args) => microcache.delete(getKey(args))

  return fnx
}

function memoizeByFirstArg<F extends (...args: any) => any>(
  fn: F,
): Evictable<F> {
  return memoize(fn, (args) => args[0])
}

export interface CreateExportDeclarationOptions {
  exportName: string
  isScriptSetup: boolean
  shouldIncludeScriptSetup(id: string): boolean
}

export interface CreateExportDeclarationForScriptSetupOptions {
  defineComponent: string
  shouldIncludeBinding(id: string): boolean
}

/**
 * Create export statement from local components.
 */
export const createExportDeclarationForScriptSetup = memoizeByFirstArg(
  (
    ast: T.File,
    options?: Partial<CreateExportDeclarationForScriptSetupOptions>,
  ): T.ExportDefaultDeclaration => {
    const config: CreateExportDeclarationForScriptSetupOptions = {
      defineComponent: 'VueDX.internal.defineSetupComponent',
      shouldIncludeBinding: () => true,
      ...options,
    }

    const createExpr = template(
      `${config.defineComponent}(%%props%%, %%emits%%, %%bindings%%, %%extra%%)`,
    )

    const props = getExpressionOrReference(findDefinePropsStatement(ast))
    const emits = getExpressionOrReference(findDefineEmitsStatement(ast))
    const extra = getExpressionOrReference(null)
    const bindings = T.objectExpression(
      findScopeBindings(ast)
        .filter((id) => config.shouldIncludeBinding(id))
        .map((id) => T.identifier(id))
        .map((id) => T.objectProperty(id, id, false, false)),
    )

    const statement = createExpr({ props, emits, bindings, extra })

    if (Array.isArray(statement) || !T.isExpressionStatement(statement)) {
      throw new Error('Unexpected')
    }

    return T.exportDefaultDeclaration(statement.expression)
  },
)

export const findDefinePropsStatement = memoizeByFirstArg((ast: T.File) => {
  return findTopLevelCall(
    ast,
    findLocalName(ast, 'vue', 'defineProps') ?? 'defineProps',
  )
})

export const findDefineEmitsStatement = memoizeByFirstArg((ast: T.File) => {
  return findTopLevelCall(
    ast,
    findLocalName(ast, 'vue', 'defineEmits') ?? 'defineEmits',
  )
})

export const findDefineExposeStatement = memoizeByFirstArg((ast: T.File) => {
  return findTopLevelCall(
    ast,
    findLocalName(ast, 'vue', 'defineExpose') ?? 'defineExpose',
  )
})

/**
 * Create export statement from local components.
 */
export const createExportDeclarationForComponents = memoizeByFirstArg(
  (
    ast: T.File,
    options?: Partial<CreateExportDeclarationOptions>,
  ): T.ExportNamedDeclaration => {
    return createExportDeclarationFor(ast, 'components', options)
  },
)

/**
 * Create export statement from local directives.
 */
export const createExportDeclarationForDirectives = memoizeByFirstArg(
  (
    ast: T.File,
    options?: Partial<CreateExportDeclarationOptions>,
  ): T.ExportNamedDeclaration => {
    return createExportDeclarationFor(ast, 'directives', options)
  },
)

export const findScopeBindings = memoizeByFirstArg(
  (node: T.File | T.Program | T.BlockStatement): string[] => {
    const identifiers = new Set<string>()
    const statements = T.isFile(node) ? node.program.body : node.body

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

export const findComponentOptions = memoizeByFirstArg(
  (ast: T.File): T.ObjectExpression | null => {
    const node = ast.program.body.find(
      (node): node is T.ExportDefaultDeclaration =>
        T.isExportDefaultDeclaration(node),
    )

    if (node != null) {
      if (T.isObjectExpression(node.declaration)) {
        return node.declaration
      } else if (T.isCallExpression(node.declaration)) {
        if (node.declaration.arguments.length > 0) {
          const options = node.declaration.arguments[0]

          if (T.isObjectExpression(options)) {
            return options
          }
        }
      }
    }

    return null
  },
)

/**
 * Create export statement from local components.
 */
function createExportDeclarationFor(
  ast: T.File,
  kind: 'components' | 'directives',
  options?: Partial<CreateExportDeclarationOptions>,
): T.ExportNamedDeclaration {
  const config: CreateExportDeclarationOptions = {
    exportName: `__VueDX_${kind}`,
    isScriptSetup: false,
    shouldIncludeScriptSetup: () => true,
    ...options,
  }

  const RE = kind === 'components' ? /^[A-Z]/ : /^v[A-Z]/

  const expr = config.isScriptSetup
    ? T.objectExpression(
        findScopeBindings(ast)
          .filter((id) => RE.test(id) && config.shouldIncludeScriptSetup(id))
          .map((id) => T.identifier(id))
          .map((id) => T.objectProperty(id, id, false, false)),
      )
    : findComponentOption(ast, kind) ?? T.objectExpression([])

  return T.exportNamedDeclaration(
    T.variableDeclaration('const', [
      T.variableDeclarator(T.identifier(config.exportName), expr),
    ]),
  )
}

function findComponentOption(ast: T.File, name: string): T.Expression | null {
  const target = findComponentOptions(ast)
  if (target == null) return null
  return findObjectProperty(target, name)
}

function findObjectProperty(
  node: T.ObjectExpression,
  propertyName: string,
): T.Expression | null {
  return (
    (node.properties.find((property): property is T.ObjectProperty => {
      if (T.isObjectProperty(property)) {
        if (T.isStringLiteral(property.key)) {
          return property.key.value === propertyName
        } else if (T.isIdentifier(property.key)) {
          return property.key.name === propertyName
        }
      }
      return false
    })?.value as any) ?? null
  )
}

/**
 * Find local name of imported identifier (or namespaced identifier).
 */
const findLocalName = (
  ast: T.File,
  source: string,
  exportedName: string,
): string => {
  const RE = /[^a-z0-9$_].*$/i // Ignore unicode characters.
  const baseName = exportedName.replace(RE, '')
  const name = findLocalIdentifierName(ast, source, baseName)
  if (name == null) return exportedName

  return name + exportedName.substr(baseName.length)
}

/**
 * Find local identifier name of imported identifier.
 */
function findLocalIdentifierName(
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

function findTopLevelCall(
  ast: T.File,
  fn: string,
): T.Expression | T.VariableDeclarator | null {
  const isExpression = (exp: T.Expression): boolean =>
    T.isCallExpression(exp) &&
    T.isIdentifier(exp.callee) &&
    exp.callee.name === fn

  for (const statement of ast.program.body) {
    if (T.isExpressionStatement(statement)) {
      if (isExpression(statement.expression)) {
        return statement.expression
      }
    } else if (T.isVariableDeclaration(statement)) {
      for (const declaration of statement.declarations) {
        if (declaration.init != null && isExpression(declaration.init)) {
          return declaration
        }
      }
    }
  }

  return null
}

function getExpressionOrReference(
  statement: T.Expression | T.VariableDeclarator | null,
): T.Expression | T.Identifier {
  if (T.isExpression(statement)) return statement
  else if (T.isVariableDeclarator(statement)) {
    if (T.isIdentifier(statement.id)) return statement.id
    else if (statement.init != null) return statement.init
  }

  return T.objectExpression([])
}

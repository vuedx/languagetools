import * as T from '@babel/types'
import * as template from '@babel/template'
import {
  GeneratorResult,
  GeneratorOptions,
  CodeGenerator,
} from '@babel/generator'
import { parse, ParserOptions } from '@babel/parser'
import MagicString from 'magic-string'

interface ParseOptions extends ParserOptions {
  isScriptSetup: boolean
  lang: string
}

interface GenerateOptions extends GeneratorOptions {
  sourceText?: string
}

type RequiredProperties<T, K extends keyof T> = Pick<Required<T>, K> &
  Exclude<T, K>

export function toAST(
  code: string,
  options: Partial<ParseOptions> = {},
): T.File {
  const { isScriptSetup = false, lang = 'js', ...config } = options
  const finalOptions: RequiredProperties<ParserOptions, 'plugins'> = {
    sourceType: 'module' as const,
    allowAwaitOutsideFunction: isScriptSetup,
    ...config,
    ranges: true,
    errorRecovery: true,
    plugins: [
      'bigInt',
      'nullishCoalescingOperator',
      'optionalChaining',
      'optionalCatchBinding',
      'dynamicImport',
      'logicalAssignment',
    ],
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
  { sourceText, ...options }: GenerateOptions = {},
): GeneratorResult {
  const nodes = Array.isArray(node) ? node : [node]
  const statement = T.program(
    nodes
      .map((node) => T.toStatement(node))
      .filter(
        (node): node is T.Statement => node !== false && T.isStatement(node),
      ),
  )

  const result = new CodeGenerator(statement as any, {
    comments: true,
    ...options,
  }).generate()

  if (sourceText == null) return result

  const ranges = findAnnotatedTextRanges(
    result.code,
    '// @vuedx-copied-start',
    '// @vuedx-copied-from',
  )
  if (ranges.length === 0) return result // does not include copied code
  const code = result.code
  const magic = new MagicString(code, {
    filename: options.sourceFileName,
  })

  for (const range of ranges) {
    const matches = /\/\/ @vuedx-copied-from (.*)/.exec(code.slice(range.end))
    if (matches == null) continue
    const { column, start, end } = JSON.parse(matches[1] ?? '') as {
      column: number
      start: number
      end: number
    }
    magic.overwrite(
      range.start,
      range.end + (matches[0] ?? '').length,
      ' '.repeat(column) +
        sourceText.slice(start, end) +
        '// @vuedx-copied-from ' +
        JSON.stringify({ start: start - column, end }),
    )
  }

  return {
    ...result,
    code: magic.toString(),
    map: magic.generateMap(),
  }
}

function findAnnotatedTextRanges(
  code: string,
  openTag: string,
  closeTag: string,
): Array<{ start: number; end: number }> {
  let lastIndex = 0
  const ranges: Array<{ start: number; end: number }> = []
  while (lastIndex < code.length) {
    const start = code.indexOf(openTag, lastIndex)
    if (start < 0) break
    let end = code.indexOf(closeTag, start + openTag.length)
    if (end < 0) {
      end = code.length
    }

    ranges.push({ start, end })

    lastIndex = end
  }

  return ranges
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

interface DeclarationOptions {
  leadingCommentForCopiedSource: string
  trailingCommentForCopiedSource: string
  leadingCommentForIdentifiers: string
  trailingCommentForIdentifiers: string
}

export interface CreateExportDeclarationOptions extends DeclarationOptions {
  exportName: string
  isScriptSetup: boolean
  shouldIncludeScriptSetup(id: string): boolean
}

export interface CreateExportDeclarationForScriptSetupOptions
  extends CreateExportDeclarationOptions {
  defineComponent: string
}

/**
 * Create export statement from local components.
 */
export const createExportDeclarationForComponent = memoizeByFirstArg(
  (
    ast: T.File,
    options?: Partial<CreateExportDeclarationForScriptSetupOptions>,
  ): T.ExportNamedDeclaration => {
    const isScriptSetup = options?.isScriptSetup ?? true
    const config: CreateExportDeclarationForScriptSetupOptions = {
      defineComponent: isScriptSetup
        ? 'VueDX.internal.defineSetupComponent'
        : 'VueDX.internal.defineComponent',
      shouldIncludeScriptSetup: () => true,
      leadingCommentForCopiedSource: '',
      trailingCommentForCopiedSource: '',
      leadingCommentForIdentifiers: '',
      trailingCommentForIdentifiers: '',
      isScriptSetup: true,
      exportName: '__VueDX_DefineComponent',
      ...options,
    }

    const statement = isScriptSetup
      ? createDeclarationForScriptSetup()
      : createDeclarationForScript()

    if (!T.isDeclaration(statement)) {
      throw new Error('Unexpected')
    }

    return T.exportNamedDeclaration(statement)

    function createDeclarationForScriptSetup(): any {
      const createExpr = template.statement(
        `const ${config.exportName} = ${config.defineComponent}(
        %%props%%, 
        %%emits%%, 
        %%bindings%%, 
        %%extra%%
        )`,
      )

      const props = getExpressionOrReference(
        findDefinePropsStatement(ast),
        config,
      )
      const emits = getExpressionOrReference(
        findDefineEmitsStatement(ast),
        config,
      )
      const extra = getExpressionOrReference(null, config)
      const bindings = getExpressionOrReference(
        T.objectExpression(
          findScopeBindings(ast)
            .filter((id) => config.shouldIncludeScriptSetup(id))
            .map((id) => T.identifier(id))
            .map((id) => T.objectProperty(id, id, false, false)),
        ),
        config,
      )

      return createExpr({ props, emits, bindings, extra })
    }
    function createDeclarationForScript(): any {
      const createExpr = template.statement(
        `const ${config.exportName} = ${config.defineComponent}(%%options%%)`,
      )

      const options = findComponentOptions(ast)

      return createExpr({
        options:
          options == null
            ? findDefaultExportDeclaration(ast)
            : getExpressionOrReference(options, config),
      })
    }
  },
)

/**
 * Create export statement from expose.
 */
export const createExportDeclarationForExpose = memoizeByFirstArg(
  (
    ast: T.File,
    options?: Partial<CreateExportDeclarationOptions>,
  ): T.ExportNamedDeclaration => {
    return createExportDeclarationFor(ast, 'expose', options)
  },
)

export const findDefinePropsStatement = memoizeByFirstArg((ast: T.File) => {
  const withDefaults = findTopLevelCall(
    ast,
    findLocalName(ast, 'vue', 'withDefaults') ?? 'withDefaults',
  )

  if (withDefaults != null) {
    const fn = T.isCallExpression(withDefaults)
      ? withDefaults
      : withDefaults.init
    if (T.isCallExpression(fn)) {
      const args = fn.arguments
      if (T.isCallExpression(args[0])) return args[0]
      return null
    }
  }

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
  const result = findTopLevelCall(
    ast,
    findLocalName(ast, 'vue', 'defineExpose') ?? 'defineExpose',
  )
  if (!T.isCallExpression(result)) return null
  const node = result.arguments[0]
  if (node == null) return null
  if (T.isObjectExpression(node) || T.isIdentifier(node)) return node
  return null
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

const findDefaultExportDeclaration = memoizeByFirstArg(
  (ast: T.File): T.Node | null => {
    const node = ast.program.body.find(
      (node): node is T.ExportDefaultDeclaration =>
        T.isExportDefaultDeclaration(node),
    )

    if (node != null) {
      return node.declaration
    }

    return null
  },
)

/**
 * Create export statement from local components.
 */
function createExportDeclarationFor(
  ast: T.File,
  kind: 'components' | 'directives' | 'expose',
  options?: Partial<CreateExportDeclarationOptions>,
): T.ExportNamedDeclaration {
  const config: CreateExportDeclarationOptions = {
    exportName: `__VueDX_${kind}`,
    isScriptSetup: false,
    shouldIncludeScriptSetup: () => true,
    leadingCommentForCopiedSource: '',
    trailingCommentForCopiedSource: '',
    leadingCommentForIdentifiers: '',
    trailingCommentForIdentifiers: '',
    ...options,
  }

  const createExpr = template.statement(
    `const ${config.exportName} = %%value%%;`,
  )
  const declaration = createExpr({
    value: getExpressionOrReference(findTargetExpression(), config),
  })
  if (!T.isDeclaration(declaration)) throw new Error('Unexpected')

  return T.exportNamedDeclaration(declaration)

  function findTargetExpression(): T.Expression | null {
    if (config.isScriptSetup) {
      if (kind === 'expose') {
        return getExpressionOrReference(findDefineExposeStatement(ast), config)
      }

      const RE = kind === 'components' ? /^[A-Z]/ : /^v[A-Z]/

      return T.objectExpression(
        findScopeBindings(ast)
          .filter((id) => RE.test(id) && config.shouldIncludeScriptSetup(id))
          .map((id) => T.identifier(id))
          .map((id) => T.objectProperty(id, id, false, false)),
      )
    }

    return getExpressionOrReference(
      findComponentOption(ast, kind) ?? T.objectExpression([]),
      config,
    )
  }
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
): T.CallExpression | T.VariableDeclarator | null {
  const isExpression = (exp: T.Expression): exp is T.CallExpression =>
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
  options: DeclarationOptions,
): T.Expression | T.Identifier {
  if (T.isExpression(statement)) return wrapInComments(statement)
  else if (T.isVariableDeclarator(statement)) {
    if (T.isIdentifier(statement.id)) return statement.id
    else if (statement.init != null) return wrapInComments(statement.init)
  }

  return T.objectExpression([])

  function wrapInComments(e: T.Expression): T.Expression {
    if (T.isObjectExpression(e) && e.properties.length === 0) return e
    if (options == null) return e
    let isCopied = false
    if (e.start != null && e.end != null && e.loc != null) {
      isCopied = true
      const loc = JSON.stringify({
        line: e.loc.start.line,
        column: e.loc.start.column,
        start: e.start,
        end: e.end,
      })

      e = T.addComment(e, 'leading', ` @vuedx-copied-start`, true)
      e = T.addComment(e, 'trailing', ` @vuedx-copied-from ${loc}`, true)
    }

    const leading = isCopied
      ? options.leadingCommentForCopiedSource
      : options.leadingCommentForIdentifiers

    const trailing = isCopied
      ? options.trailingCommentForCopiedSource
      : options.trailingCommentForIdentifiers

    e = T.addComment(e, 'leading', leading.replace(/\/\*|\*\//g, ''))
    e = T.addComment(e, 'trailing', trailing.replace(/\/\*|\*\//g, ''))

    return e
  }
}

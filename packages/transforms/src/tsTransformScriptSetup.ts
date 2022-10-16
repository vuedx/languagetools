import {
  DecodedSourceMap,
  first,
  invariant,
  SourceTransformer,
} from '@vuedx/shared'
import type TypeScript from 'typescript/lib/tsserverlibrary'
import { findIdentifiers, KnownIdentifier } from './findIdentifiers'
import { TransformScriptOptions } from './TransformScriptOptions'
export interface TransformScriptSetupResult {
  code: string
  map: DecodedSourceMap
  identifiers: KnownIdentifier[]
  propsIdentifier: string
  emitsIdentifier: string
  exposeIdentifier: string
  scopeIdentifier: string
  componentIdentifier: string
  exports: Record<string, string>
}

export function transformScriptSetup(
  source: string,
  options: TransformScriptOptions,
): TransformScriptSetupResult {
  const key = `${options.fileName}:scriptSetup:program`
  const ts = options.lib
  const inputFile = `input.${options.lang}`
  const compilerHost: TypeScript.CompilerHost = {
    fileExists: () => true,
    getCanonicalFileName: (filename) => filename,
    getCurrentDirectory: () => '',
    getDefaultLibFileName: () => 'lib.d.ts',
    getNewLine: () => '\n',
    getSourceFile: (filename) => {
      if (filename !== inputFile) return

      return ts.createSourceFile(
        filename,
        source,
        ts.ScriptTarget.Latest,
        true,
        getScriptKind(options.lang),
      )
    },
    readFile: () => undefined,
    useCaseSensitiveFileNames: () => true,
    writeFile: () => undefined,
  }

  const program = ts.createProgram(
    [inputFile],
    {
      noResolve: true,
      target: ts.ScriptTarget.Latest,
      jsx: options.lang.endsWith('x') ? ts.JsxEmit.Preserve : undefined,
    },
    compilerHost,
    options.cache?.get(key) as TypeScript.Program,
  )
  options.cache?.set(key, program)
  const sourceFile = program.getSourceFile(inputFile)
  invariant(sourceFile != null, 'Source file not found.')

  let firstStatement: TypeScript.Statement | undefined
  let internalPropsIdentifier: TypeScript.Identifier | undefined
  let internalPropsInitializer: TypeScript.Expression | undefined
  let propsIdentifier: TypeScript.Identifier | undefined
  let propsType: TypeScript.TypeNode | undefined
  let propsOptions: TypeScript.Node | undefined
  let emitsType: TypeScript.Node | undefined
  let emitsOptions: TypeScript.Node | undefined
  let exposeOptions: TypeScript.Node | undefined
  const exportedNodes: Array<
    | TypeScript.ExportDeclaration
    | TypeScript.TypeAliasDeclaration
    | TypeScript.InterfaceDeclaration
    | TypeScript.EnumDeclaration
  > = []
  const exportedNames: Record<string, string> = {}

  const vars = {
    internalProps: `${options.internalIdentifierPrefix}_ScriptSetup_internalProps`,
    scope: `${options.internalIdentifierPrefix}_ScriptSetup_scope`,
    Component: `${options.internalIdentifierPrefix}_ScriptSetup_Component`,
    emits: `${options.internalIdentifierPrefix}_ScriptSetup_emits`,
    props: `${options.internalIdentifierPrefix}_ScriptSetup_props`,
    expose: `${options.internalIdentifierPrefix}_ScriptSetup_expose`,
  }
  const code = new SourceTransformer(inputFile, source)

  findNodes(sourceFile)

  const identifiers = findIdentifiers(ts, program, sourceFile)

  const offset =
    firstStatement == null ? source.length : firstStatement.getFullStart()

  if (exportedNodes.length > 0) {
    genExportedNodes(0, offset)
  } else {
    code.clone(0, offset)
  }
  const { line } = code.sourceLineColumnMapper.positionAt(offset)

  // annotate range
  code.append(`\n`, { mappings: [[[0, 0, line + 1, 0]]] })
  code.append(
    `const ${vars.scope} = ${options.typeIdentifier}.internal.scope(async () => {`,
    { mappings: [[[0, 0, line + 1, 0]]] },
  )

  if (exportedNodes.length > 0) {
    genExportedNodes(offset, source.length)
  } else {
    code.clone(offset, source.length)
  }

  code.nextLine()

  if (exportedNodes.length > 0) {
    for (const node of exportedNodes) {
      if (ts.isExportDeclaration(node)) {
        if (node.exportClause != null && ts.isNamedExports(node.exportClause)) {
          for (const specifier of node.exportClause.elements) {
            const name = (specifier.propertyName ?? specifier.name).getText()
            const internalName = `${options.internalIdentifierPrefix}_export_${name}`
            exportedNames[name] = internalName
            // TODO: check if typeof is required or not.
            code.append(
              `const ${internalName} = null as unknown as typeof ${specifier.name.getText()};`,
            )
            code.nextLine()
          }
        }
      } else {
        const name = node.name.getText()
        const internalName = `${options.internalIdentifierPrefix}_export_${name}`
        exportedNames[name] = internalName
        code.append(`const ${internalName} = null as unknown as ${name};`)
        code.nextLine()
      }
    }
  }

  if (internalPropsIdentifier == null && internalPropsInitializer != null) {
    code.clone(offset, internalPropsInitializer.getStart())
    code.append(`const ${vars.internalProps} = `)
    code.clone(
      internalPropsInitializer.getStart(),
      internalPropsInitializer.getEnd(),
    )
    code.append(';\n')
  }
  // define props
  if (propsIdentifier != null) {
    code.append(`const ${vars.props} = ${propsIdentifier.text};\n`)
  } else if (propsType != null) {
    code.append(`const ${vars.props} = defineProps<`)
    code.clone(propsType.getStart(), propsType.getEnd())
    code.append(`>();\n`)
  } else if (propsOptions != null) {
    code.append(`const ${vars.props} = defineProps(`)
    code.clone(propsOptions.getStart(), propsOptions.getEnd())
    code.append(`);\n`)
  } else {
    code.append(`const ${vars.props} = defineProps({});\n`)
  }

  // define emits
  if (emitsType != null) {
    code.append(
      `const ${vars.emits} = ({} as unknown as ${options.typeIdentifier}.internal.EmitTypeToEmits<`,
    )
    code.clone(emitsType.getStart(), emitsType.getEnd())
    code.append(`>);\n`)
  } else if (emitsOptions != null) {
    code.append(`const ${vars.emits} = (`)
    code.clone(emitsOptions.getStart(), emitsOptions.getEnd())
    code.append(`);\n`)
  } else {
    code.append(`const ${vars.emits} = ({});\n`)
  }

  // define expose
  if (exposeOptions != null) {
    code.append(`const ${vars.expose} = (`)
    code.clone(exposeOptions.getStart(), exposeOptions.getEnd())
    code.append(`);\n`)
  } else {
    code.append(`const ${vars.expose} = {};\n`)
  }

  if (internalPropsIdentifier == null && internalPropsInitializer == null) {
    code.append(`const ${vars.internalProps} = {};\n`)
  }

  code.append(
    [
      `const ${vars.Component} = ${
        options.internalIdentifierPrefix
      }defineComponent((_: typeof ${
        internalPropsIdentifier?.getText() ?? vars.internalProps
      })=> {});\n`,
    ].join('\n'),
  )

  code.append(`\n`)
  const result = code.end()

  return {
    code: result.code,
    map: result.map,
    identifiers,
    componentIdentifier: vars.Component,
    propsIdentifier: vars.props,
    emitsIdentifier: vars.emits,
    exposeIdentifier: vars.expose,
    scopeIdentifier: vars.scope,
    exports: exportedNames,
  }

  function genExportedNodes(start: number, end: number): void {
    let cursor = start
    for (const node of exportedNodes) {
      const s = node.getStart()
      const e = node.getEnd()
      if (s > cursor && s < end) {
        code.clone(cursor, s)
        if (!ts.isExportDeclaration(node)) {
          const modifier = getExportModifier(node)
          if (modifier != null) {
            code.clone(modifier.getEnd(), node.getEnd())
          }
        }
        cursor = e
      }
    }

    code.clone(cursor, end)
  }

  function getExportModifier(
    node: TypeScript.Node,
  ): TypeScript.ExportKeyword | null {
    if (!ts.canHaveModifiers(node)) return null
    const modifier = node.modifiers?.find(
      (modifier): modifier is ts.ExportKeyword =>
        modifier.kind === ts.SyntaxKind.ExportKeyword,
    )
    if (modifier == null) return null
    return modifier as TypeScript.ExportKeyword
  }

  function getScriptKind(
    lang: TransformScriptOptions['lang'],
  ): TypeScript.ScriptKind {
    switch (lang) {
      case 'js':
        return ts.ScriptKind.JS
      case 'ts':
        return ts.ScriptKind.TS
      case 'tsx':
        return ts.ScriptKind.TSX
      case 'jsx':
        return ts.ScriptKind.JSX
      default:
        throw new Error(`Unknown lang`)
    }
  }

  function findNodes(sourceFile: TypeScript.SourceFile): void {
    sourceFile.statements.forEach((statement) => {
      if (!ts.isImportDeclaration(statement)) {
        if (firstStatement == null) {
          firstStatement = statement
        }
      }

      if (ts.isVariableStatement(statement)) {
        statement.declarationList.declarations.forEach((declaration) => {
          if (declaration.initializer != null) {
            if (isFnCall(declaration.initializer, 'defineProps')) {
              if (ts.isIdentifier(declaration.name)) {
                internalPropsIdentifier = declaration.name
                propsIdentifier = declaration.name
              } else {
                internalPropsInitializer = declaration.initializer
              }
            } else if (isFnCall(declaration.initializer, 'withDefaults')) {
              if (ts.isIdentifier(declaration.name)) {
                internalPropsIdentifier = declaration.name
              } else {
                internalPropsInitializer = declaration.initializer
              }

              const definePropsExp = declaration.initializer.arguments[0]
              if (definePropsExp != null) {
                if (isFnCall(definePropsExp, 'defineProps')) {
                  processProps(definePropsExp)
                }
              }
            } else if (isFnCall(declaration.initializer, 'defineEmits')) {
              processEmits(declaration.initializer)
            } else if (isFnCall(declaration.initializer, 'defineExpose')) {
              processExpose(declaration.initializer)
            }
          }
        })
      } else if (ts.isExpressionStatement(statement)) {
        if (isFnCall(statement.expression, 'defineProps')) {
          internalPropsInitializer = statement.expression
          processProps(statement.expression)
        } else if (isFnCall(statement.expression, 'withDefaults')) {
          internalPropsInitializer = statement.expression
          const definePropsExp = statement.expression.arguments[0]
          if (definePropsExp != null) {
            if (isFnCall(definePropsExp, 'defineProps')) {
              processProps(definePropsExp)
            }
          }
        } else if (isFnCall(statement.expression, 'defineEmits')) {
          processEmits(statement.expression)
        } else if (isFnCall(statement.expression, 'defineExpose')) {
          processExpose(statement.expression)
        }
      } else if (ts.isExportDeclaration(statement)) {
        if (statement.isTypeOnly) exportedNodes.push(statement)
        // TODO: support `export { type foo }`
      } else if (
        ts.isTypeAliasDeclaration(statement) ||
        ts.isInterfaceDeclaration(statement) ||
        ts.isEnumDeclaration(statement)
      ) {
        const modifier = getExportModifier(statement)
        if (modifier != null) {
          exportedNodes.push(statement)
        }
      }
    })

    function isFnCall(
      node: TypeScript.Node,
      name: string,
    ): node is TypeScript.CallExpression {
      return (
        ts.isCallExpression(node) &&
        ts.isIdentifier(node.expression) &&
        node.expression.escapedText === name
      )
    }

    function processProps(node: TypeScript.CallExpression): void {
      if (node.typeArguments != null && node.typeArguments.length > 0) {
        propsType = first(node.typeArguments)
      } else if (node.arguments != null && node.arguments.length > 0) {
        propsOptions = first(node.arguments)
      }
    }

    function processEmits(node: TypeScript.CallExpression): void {
      if (node.typeArguments != null && node.typeArguments.length > 0) {
        emitsType = first(node.typeArguments)
      } else if (node.arguments != null && node.arguments.length > 0) {
        emitsOptions = first(node.arguments)
      }
    }

    function processExpose(node: TypeScript.CallExpression): void {
      if (node.arguments != null && node.arguments.length > 0) {
        exposeOptions = first(node.arguments)
      }
    }
  }
}

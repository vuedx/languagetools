import {
  DecodedSourceMap,
  first,
  invariant,
  SourceTransformer,
} from '@vuedx/shared'
import type TypeScript from 'typescript/lib/tsserverlibrary'
import { createProgram } from './createProgram'
import { findIdentifiers, KnownIdentifier } from './findIdentifiers'
import { TransformScriptOptions } from './TransformScriptOptions'
export interface TransformScriptSetupResult {
  code: string
  map: DecodedSourceMap
  identifiers: KnownIdentifier[]
  scopeIdentifier: string
  privateComponentIdentifier: string
  publicComponentIdentifier: string
  exports: Record<string, string>
}

export interface TransformScriptSetupOptions extends TransformScriptOptions {
  generic?: string
  attrsIdentifier: string
  slotsIdentifier: string
}

export function transformScriptSetup(
  source: string,
  options: TransformScriptSetupOptions,
): TransformScriptSetupResult {
  const key = `${options.fileName}:scriptSetup:program`
  const ts = options.lib
  const inputFile = `input.${options.lang}`
  const program = createProgram(
    ts,
    source,
    inputFile,
    options.lang,
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
  const _ = options.internalIdentifierPrefix
  const vars = {
    internalProps: `${_}ScriptSetup_internalProps`,
    internalComponent: `${_}ScriptSetup_ComponentPrivate`,
    publicComponent: `${_}ScriptSetup_Component`,
    scope: `${_}ScriptSetup_scope`,
    emits: `${_}ScriptSetup_emits`,
    props: `${_}ScriptSetup_props`,
    expose: `${_}ScriptSetup_expose`,
  }
  const generic = options.generic != null ? `<${options.generic}>` : ''
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

  // wrap setup code in a function
  code.append(`\n`, { mappings: [[[0, 0, line + 1, 0]]] })

  code.append(`function ${vars.scope}${generic}() {`, {
    mappings: [[[0, 0, line + 1, 0]]],
  })

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

  // define private props (withDefaults)
  if (internalPropsIdentifier == null && internalPropsInitializer != null) {
    code.clone(offset, internalPropsInitializer.getStart())
    code.append(`const ${vars.internalProps} = `)
    code.clone(
      internalPropsInitializer.getStart(),
      internalPropsInitializer.getEnd(),
    )
    code.append(';\n')
  } else if (
    internalPropsIdentifier == null &&
    internalPropsInitializer == null
  ) {
    code.append(`const ${vars.internalProps} = {};\n`)
  }
  code.append(
    `const ${vars.internalComponent} = ${_}defineComponent((_: typeof ${
      internalPropsIdentifier?.getText() ?? vars.internalProps
    })=> {});\n`,
  )

  // define expose
  let expose = ''
  if (exposeOptions != null) {
    code.append(`const ${vars.expose} = (`)
    code.clone(exposeOptions.getStart(), exposeOptions.getEnd())
    code.append(`);\n`)
    code.append(
      `const ${vars.expose}_API = null as unknown as new () => typeof ${vars.expose};\n`,
    )
    expose = ` extends ${vars.expose}_API`
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

  // define public component
  code.append(`class ${vars.publicComponent}${generic}${expose} {\n`)
  // define $props using mergeAttrs
  code.append(
    `$props = null as unknown as ${options.typeIdentifier}.internal.MergeAttrs<`,
  )
  // <props>
  if (propsType != null) {
    code.clone(propsType.getStart(), propsType.getEnd())
  } else {
    code.append(`typeof ${vars.props}`)
  }
  // <emits>
  code.append(` & ${options.typeIdentifier}.internal.EmitsToProps<`)
  if (emitsType != null) {
    code.append(`${options.typeIdentifier}.internal.EmitTypeToEmits<`)
    code.clone(emitsType.getStart(), emitsType.getEnd())
    code.append(`>`)
  } else {
    code.append(`typeof ${vars.emits}`)
  }
  code.append(`>`)
  // <attrs>
  code.append(`, typeof ${options.attrsIdentifier}>;\n`)
  code.append(
    `$slots = null as unknown as ${options.typeIdentifier}.internal.Slots<ReturnType<typeof ${options.slotsIdentifier}>>;\n`,
  )
  code.append('}\n')

  code.append(`\n`)
  const result = code.end()

  return {
    code: result.code,
    map: result.map,
    identifiers,
    privateComponentIdentifier: vars.internalComponent,
    publicComponentIdentifier: vars.publicComponent,
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
      (modifier): modifier is TypeScript.ExportKeyword =>
        modifier.kind === ts.SyntaxKind.ExportKeyword,
    )
    if (modifier == null) return null
    return modifier as TypeScript.ExportKeyword
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
              processProps(declaration.initializer)
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

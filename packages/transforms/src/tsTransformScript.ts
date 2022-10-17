import {
  DecodedSourceMap,
  getComponentName,
  invariant,
  SourceTransformer,
} from '@vuedx/shared'
import type TypeScript from 'typescript/lib/tsserverlibrary'
import { createProgram } from './createProgram'
import { findIdentifiers, KnownIdentifier } from './findIdentifiers'
import { TransformScriptOptions } from './TransformScriptOptions'
export interface TransformScriptResult {
  code: string
  map: DecodedSourceMap
  identifiers: KnownIdentifier[]
  componentIdentifier: string
  name: string
  inheritAttrs: boolean
}

export function transformScript(
  source: string,
  options: TransformScriptOptions,
): TransformScriptResult {
  const key = `${options.fileName}:script:program`
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

  let defaultExport: TypeScript.ExportAssignment | undefined
  let inheritAttrs: boolean = true
  let name: string = getComponentName(options.fileName)

  const vars = {
    defineComponent: `${options.internalIdentifierPrefix}defineComponent`,
    Component: `${options.internalIdentifierPrefix}_Script_Component`,
  }

  const code = new SourceTransformer(inputFile, source)

  findNodes(sourceFile)

  const identifiers = findIdentifiers(ts, program, sourceFile)

  if (defaultExport != null) {
    const needsDefineComponent = ts.isObjectLiteralExpression(
      defaultExport.expression,
    )

    code.clone(0, defaultExport.getFullStart())
    code.nextLine()
    code.append(`const ${vars.Component} = `)
    if (needsDefineComponent) {
      code.append(`${vars.defineComponent}(`)
    }
    code.clone(
      defaultExport.expression.getFullStart(),
      defaultExport.expression.getEnd(),
    )
    if (needsDefineComponent) {
      code.append(');')
      code.nextLine()
    }
    code.clone(defaultExport.expression.getEnd(), source.length)
  } else {
    code.nextLine()
    code.clone(0, source.length)
    code.nextLine()
    code.append(`const ${vars.Component} = ${vars.defineComponent}({});`)
  }

  code.nextLine()

  const result = code.end()

  return {
    code: result.code,
    map: result.map,
    identifiers,
    componentIdentifier: vars.Component,
    name,
    inheritAttrs,
  }

  function findNodes(sourceFile: TypeScript.SourceFile): void {
    sourceFile.statements.forEach((statement) => {
      if (ts.isExportAssignment(statement)) {
        defaultExport = statement
      }

      if (ts.canHaveModifiers(statement)) {
        const modifiers = ts.getModifiers(statement)
        if (
          modifiers?.some(
            (modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword,
          ) === true
        ) {
          if (ts.isVariableStatement(statement)) {
            statement.declarationList.declarations.forEach((declaration) => {
              if (ts.isIdentifier(declaration.name)) {
                if (
                  declaration.name.text === 'name' &&
                  declaration.initializer != null &&
                  ts.isStringLiteral(declaration.initializer)
                ) {
                  name = declaration.initializer.getText().slice(1, -1)
                } else if (
                  declaration.name.text === 'inheritAttrs' &&
                  declaration.initializer != null
                ) {
                  inheritAttrs =
                    declaration.initializer.kind === ts.SyntaxKind.TrueKeyword
                }
              }
            })
          }
        }
      }
    })
  }
}

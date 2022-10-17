import TypeScript from 'typescript/lib/tsserverlibrary'
import { TransformScriptOptions } from './TransformScriptOptions'

export function createProgram(
  ts: typeof TypeScript,
  source: string,
  fileName: string = 'input.ts',
  lang: TransformScriptOptions['lang'] = 'ts',
  previous?: TypeScript.Program,
): TypeScript.Program {
  const compilerHost: TypeScript.CompilerHost = {
    fileExists: () => true,
    getCanonicalFileName: (filename) => filename,
    getCurrentDirectory: () => '',
    getDefaultLibFileName: () => 'lib.d.ts',
    getNewLine: () => '\n',
    getSourceFile: (id) => {
      if (id !== fileName) return

      return ts.createSourceFile(
        id,
        source,
        ts.ScriptTarget.Latest,
        true,
        getScriptKind(lang),
      )
    },
    readFile: () => undefined,
    useCaseSensitiveFileNames: () => true,
    writeFile: () => undefined,
  }

  const program = ts.createProgram(
    [fileName],
    {
      noResolve: true,
      target: ts.ScriptTarget.Latest,
      jsx: lang.endsWith('x') ? ts.JsxEmit.Preserve : undefined,
    },
    compilerHost,
    previous,
  )

  return program

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
}

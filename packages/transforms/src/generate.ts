import {
  CodeGenerator,
  GeneratorOptions,
  GeneratorResult,
} from '@babel/generator'
import * as T from '@babel/types'

export function generate(
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

  const result = new CodeGenerator(statement as any, {
    comments: true,
    compact: false,
    concise: false,
    sourceMaps: true,
    retainFunctionParens: true,
    sourceFileName: 'input.ts',
    sourceRoot: '',
    ...options,
  }).generate()

  return result
}

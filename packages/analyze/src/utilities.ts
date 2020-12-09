import { Node } from '@babel/types'
import { SourceRange } from './component'
import { Context, ScriptAnalyzerContext } from './types'

export function createSourceRange(
  context: Context | ScriptAnalyzerContext,
  node: Node,
): SourceRange {
  if (node.start == null || node.end == null || node.loc == null) {
    return {
      source: '',
      start: { offset: 0, line: 0, column: 0 },
      end: { offset: 0, line: 0, column: 0 },
    }
  } else {
    const source =
      'source' in context ? context.source : context.descriptor.source

    return {
      source: source.substring(node.start, node.end),
      start: {
        offset: node.start,
        line: node.loc.start.line,
        column: node.loc.start.column,
      },
      end: {
        offset: node.end,
        line: node.loc.end.line,
        column: node.loc.end.column,
      },
    }
  }
}

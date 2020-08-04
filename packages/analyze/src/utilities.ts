import { ScriptAnalyzerContext } from './types';
import { Node } from '@babel/types';
import { SourceRange } from './component';

export function isNotNull<T>(value: T | null | undefined): value is T {
  return value != null;
}

export function createSourceRange(context: ScriptAnalyzerContext, node: Node): SourceRange {
  return {
    source: context.source.substring(node.start!, node.end!),
    start: { offset: node.start!, line: node.loc!.start.line, column: node.loc!.start.column },
    end: { offset: node.end!, line: node.loc!.end.line, column: node.loc!.end.column },
  } as any;
}

import { parse } from '@babel/parser';
import {
  ExportNamedDeclaration,
  FunctionDeclaration,
  isExportNamedDeclaration,
  isReturnStatement,
  ReturnStatement,
} from '@babel/types';
import { baseParse, transform, CodegenResult } from '@vue/compiler-core';
import { compile as baseCompile } from './compile';
import { match } from './matcher';
import { transformExpression as transformExpressionAlternate } from './nodes/transformExpression';
import { Options } from './options';

export * from '@vue/compiler-core';
export * from './mapper';
export * from './runtimeHelpers';
export * from './interfaces';

export function compile(source: string, options: Options): CodegenResult {
  const ast = baseParse(source, options);
  const { code, map } = baseCompile(clone(ast), options);
  const renderAST = parse(code, {
    ranges: true,
    sourceType: 'module',
    plugins: options.useJavaScript ? [] : ['typescript'],
  });
  const renderFn: FunctionDeclaration = (renderAST.program.body.find((statement) =>
    isExportNamedDeclaration(statement)
  ) as ExportNamedDeclaration).declaration;
  const generated = (renderFn.body.body.find((statement) => isReturnStatement(statement)) as ReturnStatement).argument!;

  transform(ast, {
    nodeTransforms: [transformExpressionAlternate],
  });

  match(ast, null as any, generated);

  return { code, ast, map };
}

function clone<T>(object: T): T {
  return JSON.parse(JSON.stringify(object)) as T;
}

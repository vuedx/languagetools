import { baseParse, CodegenResult } from '@vue/compiler-core';
import { compile as baseCompile } from './compile';
import { Options } from './options';

export * from '@vue/compiler-core';
export * from './interfaces';
export * from './runtimeHelpers';

export function compile(source: string, options: Options): CodegenResult {
  const ast = baseParse(source, options);
  const { code, map } = baseCompile(ast, options);

  return { code, ast, map };
}

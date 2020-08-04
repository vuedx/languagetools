import { Context, Plugin } from './types';
import { ScriptBlockAnalyzer, ComponentsOptionAnalyzer, PropsOptionsAnalyzer } from './analyzers';
import { createAnalyzer } from './analyzer';

export * from './analyzer';
export * from './analyzers';
export * from './component';
export * from './types';

export function createFullAnalyzer(plugins: Plugin[] = [], options: Partial<Context['parsers']> = {}) {
  plugins.push(ScriptBlockAnalyzer, ComponentsOptionAnalyzer, PropsOptionsAnalyzer);

  return createAnalyzer(plugins, options);
}

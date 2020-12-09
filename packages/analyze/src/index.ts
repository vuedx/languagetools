import { createAnalyzer } from './analyzer'
import {
  ComponentsOptionAnalyzer,
  EmitsOptionsAnalyzer,
  PropsOptionsAnalyzer,
  ScriptBlockAnalyzer,
  SetupOptionsAnalyzer,
  ScriptIdentifierSourceAnalyzer,
  TemplateBlockAnalyzer,
} from './analyzers'
import { Context, Plugin } from './types'

export * from './analyzer'
export * from './analyzers'
export * from './component'
export * from './project/ConfiguredVueProject'
export * from './project/InferredVueProject'
export * from './project/VueProject'
export * from './transforms'
export * from './types'
export * from './utilities'

export function createFullAnalyzer(
  plugins: Plugin[] = [],
  options: Partial<Context['parsers']> = {},
): ReturnType<typeof createAnalyzer> {
  plugins.push(
    ScriptBlockAnalyzer,
    TemplateBlockAnalyzer,
    ComponentsOptionAnalyzer,
    EmitsOptionsAnalyzer,
    PropsOptionsAnalyzer,
    SetupOptionsAnalyzer,
    ScriptIdentifierSourceAnalyzer,
  )
  return createAnalyzer(plugins, options)
}

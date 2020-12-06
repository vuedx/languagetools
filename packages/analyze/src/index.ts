import { Context, Plugin } from './types'
import {
  ScriptBlockAnalyzer,
  ComponentsOptionAnalyzer,
  PropsOptionsAnalyzer,
} from './analyzers'
import { createAnalyzer } from './analyzer'

export * from './analyzer'
export * from './analyzers'
export * from './component'
export * from './types'
export * from './transforms'
export * from './utilities'
export * from './project/VueProject'
export * from './project/InferredVueProject'
export * from './project/ConfiguredVueProject'

export function createFullAnalyzer(
  plugins: Plugin[] = [],
  options: Partial<Context['parsers']> = {},
): ReturnType<typeof createAnalyzer> {
  plugins.push(
    ScriptBlockAnalyzer,
    ComponentsOptionAnalyzer,
    PropsOptionsAnalyzer,
  )

  return createAnalyzer(plugins, options)
}

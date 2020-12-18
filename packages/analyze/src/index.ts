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

export { toVeturData, VeturData } from './output/vetur'
export { toWebTypes, WebTypes } from './output/web-types'
export { Analyzer, createAnalyzer } from './analyzer'
export {
  ScriptBlockAnalyzer,
  ScriptIdentifierSourceAnalyzer,
  SetupOptionsAnalyzer,
  TemplateBlockAnalyzer,
  ComponentsOptionAnalyzer,
  EmitsOptionsAnalyzer,
  PropsOptionsAnalyzer,
  ImplicitEmitsAnalyzer,
} from './analyzers'
export {
  ComponentInfo,
  PropInfo,
  EmitInfo,
  SetupInfo,
  ScriptSetupInfo,
  SourceRange,
  IdentifierSource,
  SyntaxError,
  ImportSource,
  ImportSourceWithLocation,
  ComponentRegistrationInfo,
  LocalComponentRegistrationInfo,
} from './component'
export { ConfiguredVueProject } from './project/ConfiguredVueProject'
export { InferredVueProject } from './project/InferredVueProject'
export { VueProject } from './project/VueProject'
export { transformToFunction } from './transforms'
export { Plugin } from './types'
export { createSourceRange } from './utilities'

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

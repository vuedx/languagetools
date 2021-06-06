import { createAnalyzer } from './analyzer'
import {
  ComponentsOptionAnalyzer,
  EmitsOptionsAnalyzer,
  PropsOptionsAnalyzer,
  ScriptBlockAnalyzer,
  ScriptIdentifierSourceAnalyzer,
  SetupOptionsAnalyzer,
  TemplateBlockAnalyzer,
} from './analyzers'
import type { Context, Plugin } from './types'

export { Analyzer, createAnalyzer } from './analyzer'
export {
  ComponentsOptionAnalyzer,
  EmitsOptionsAnalyzer,
  ImplicitEmitsAnalyzer,
  PropsOptionsAnalyzer,
  ScriptBlockAnalyzer,
  ScriptIdentifierSourceAnalyzer,
  SetupOptionsAnalyzer,
  TemplateBlockAnalyzer,
} from './analyzers'
export {
  ComponentInfo,
  ComponentRegistrationInfo,
  EmitInfo,
  IdentifierSource,
  ImportSource,
  ImportSourceWithLocation,
  LocalComponentRegistrationInfo,
  PropInfo,
  ScriptSetupInfo,
  SetupInfo,
  SourceRange,
  SyntaxError,
  TypeInfo,
} from './component'
export { toVeturData, VeturData } from './output/vetur'
export { toWebTypes, WebTypes } from './output/web-types'
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

import { InferredComponentDiagnosticsProvider } from './InferredComponentDiagnosticsProvider'
import { TemplateCompilerDiagnosticsProvider } from './TemplateCompilerDiagnosticsProvider'
import { TSProxyDiagnosticsProvider } from './TSProxyDiagnosticsProvider'

export const TEMPLATE_DIAGNOSTICS_PROVIDERS = [
  TSProxyDiagnosticsProvider,
  InferredComponentDiagnosticsProvider,
  TemplateCompilerDiagnosticsProvider,
]

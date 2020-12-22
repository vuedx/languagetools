import { createCoreContext, translate } from '@intlify/core'

export const enum DiagnosticCode {
  InferredGlobalComponent_Unknown = 59001,
  InferredGlobalComponent_Known,
  InferredGlobalComponent_PossibleSource,
}

const context = createCoreContext({
  locale: 'en',
  messages: {
    en: {
      [DiagnosticCode.InferredGlobalComponent_Unknown]: `The component '{tag}' cannot be resolved.`,
      [DiagnosticCode.InferredGlobalComponent_Known]: `The component '{tag}' is inferred as global component. It may not be available at runtime.`,
      [DiagnosticCode.InferredGlobalComponent_PossibleSource]: `The component '{tag}' can be imported from '{source}'.`,
    },
  },
})

export function getMessage(
  code: DiagnosticCode,
  options: Record<string, string | boolean | undefined | null | number> = {},
): string {
  try {
    return String(translate(context, String(code), options))
  } catch {
    return 'Error in message translation'
  }
}

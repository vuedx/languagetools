import type { TS } from '../../interfaces'
import { defineDiagnosticProvider } from './abstract'

export const TemplateCompilerDiagnosticsProvider = defineDiagnosticProvider({
  version: '*',

  semantic(_, _fileName) {
    return []
  },

  suggestions(_context, _fileName) {
    return []
  },

  syntax({ context, helpers, service }, fileName) {
    const document = helpers.getRenderDoc(fileName)
    const diagnostics: TS.DiagnosticWithLocation[] = []
    if (document != null && document.parserErrors.length > 0) {
      const sourceFile = helpers.getSourceFile(document.fsPath, service)
      const block = document.container.descriptor.template
      if (sourceFile != null && block != null) {
        const start = block.loc.start.offset

        document.parserErrors.forEach((error) => {
          if (error.code === 43) return // JS expression parsing error. Ignore it.
          diagnostics.push({
            category: context.typescript.DiagnosticCategory.Error,
            code: 60000 + Math.max(0, error.code),
            file: sourceFile,
            start: error.loc != null ? error.loc.start.offset : start,
            length:
              error.loc != null
                ? Math.max(1, error.loc.end.offset - error.loc.start.offset)
                : 1,
            messageText: error.message,
          })
        })
      }
    }

    return diagnostics
  },
})

import { TS } from '../../interfaces'
import { defineDiagnosticProvider } from './abstract'

export const TemplateCompilerDiagnosticsProvider = defineDiagnosticProvider({
  version: '*',

  semantic({ context, helpers, service }, fileName) {
    return []
  },

  suggestions(context, fileName) {
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
        const length = block.loc.end.offset - start

        document.parserErrors.forEach((error) => {
          diagnostics.push({
            category: context.typescript.DiagnosticCategory.Error,
            code: 60000 + error.code,
            file: sourceFile,
            source: error.loc?.source,
            start: error.loc != null ? error.loc.start.offset : start,
            length:
              error.loc != null
                ? error.loc.end.offset - error.loc.start.offset
                : length,
            messageText: error.message,
          })
        })
      }
    }

    return diagnostics
  },
})

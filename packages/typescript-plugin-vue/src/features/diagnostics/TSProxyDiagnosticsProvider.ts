import {
  isSimpleExpressionNode,
  SimpleExpressionNode,
  traverseFast,
} from '@vuedx/template-ast-types'
import { RenderFunctionTextDocument } from '@vuedx/vue-virtual-textdocument'
import { TS } from '../../interfaces'
import { defineDiagnosticProvider } from './abstract'

export const TSProxyDiagnosticsProvider = defineDiagnosticProvider({
  version: '*',

  semantic({ helpers, service }, fileName) {
    const document = helpers.getRenderDoc(fileName)

    return document != null
      ? helpers
          .getLanguageServiceFor(document.fsPath, service)
          .getSemanticDiagnostics(document.fsPath)
          .map(createDiagnosticsHandler(document))
          .flat()
      : []
  },

  suggestions({ helpers, service }, fileName) {
    const document = helpers.getRenderDoc(fileName)

    return document != null
      ? helpers
          .getLanguageServiceFor(document.fsPath, service)
          .getSuggestionDiagnostics(document.fsPath)
          .map(createDiagnosticsHandler(document))
          .flat()
      : []
  },

  syntax({ helpers, service }, fileName) {
    const document = helpers.getRenderDoc(fileName)

    return document != null
      ? helpers
          .getLanguageServiceFor(document.fsPath, service)
          .getSyntacticDiagnostics(document.fsPath)
          .map(createDiagnosticsHandler(document))
          .flat()
      : []
  },
})

function createDiagnosticsHandler<T extends TS.Diagnostic>(
  document: RenderFunctionTextDocument,
): (value: T) => T[] {
  let reason: string | null = null
  let isInTemplate = (diagnostic: T): T[] => [diagnostic]
  if (document.container.descriptor.template != null) {
    const start = document.container.descriptor.template.loc.start.offset
    const end = document.container.descriptor.template.loc.end.offset
    isInTemplate = (diagnostic) => {
      const result =
        diagnostic.start == null ||
        diagnostic.length == null ||
        (start <= diagnostic.start &&
          diagnostic.start + diagnostic.length <= end)

      if (result) return [diagnostic]
      else {
        reason = 'Outside <template> block'
        return []
      }
    }
  }

  return (item: T): T[] => {
    const diagnostic: T = { ...item } // To avoid mutating as TS server reuses diagnostics.
    try {
      if (diagnostic.file == null) {
        diagnostic.file = ({
          fileName: document.fsPath,
        } as unknown) as TS.SourceFile
      }
      if (diagnostic.file.fileName !== document.fsPath) {
        // In case of async diagnostics, the service may be wrapped twice.
        if (diagnostic.file.fileName === document.container.fsPath) {
          return [diagnostic]
        }

        return []
      }
      if (diagnostic.start != null) {
        if (document.isInGeneratedRange(diagnostic.start)) {
          const position = document.getOriginalOffsetAt(diagnostic.start)

          if (position != null) {
            diagnostic.start = position.offset
            if (diagnostic.length != null) {
              diagnostic.length = Math.max(
                1,
                Math.min(position.length, diagnostic.length),
              )
            }
          }

          return isInTemplate(diagnostic)
        } else if (document.isInTemplateIdentifierRange(diagnostic.start)) {
          if (document.ast != null) {
            const identifier = getIdentifier(diagnostic)
            if (identifier != null) {
              const diagnostics: T[] = []
              const nodes: SimpleExpressionNode[] = []
              traverseFast(document.ast, (node) => {
                if (
                  isSimpleExpressionNode(node) &&
                  node.scope.identifiers.includes(identifier) &&
                  node.scope.getBinding(identifier) == null
                ) {
                  nodes.push(node)
                }
              })

              if (nodes.length > 0) {
                nodes.forEach((node) => {
                  const RE = new RegExp(
                    `(?!<\\.)${identifier}(?=[^A-Za-z0-9_$]|$)`,
                    'gm',
                  )
                  let matches: RegExpExecArray | null
                  while ((matches = RE.exec(node.content)) != null) {
                    diagnostics.push({
                      ...diagnostic,
                      start: node.loc.start.offset + matches.index,
                      length: diagnostic.length,
                    })
                  }
                })

                return diagnostics
              }
            }
          }

          reason = 'Cannot find identifier'

          return []
        } else {
          reason = `Outside generated`
          return []
        }
      } else {
        return isInTemplate(diagnostic)
      }
    } finally {
      if (__DEV__ && reason != null) {
        console.debug(
          `@@debug Filtered: "${reason}" - ${diagnostic.code} ${JSON.stringify(
            diagnostic.messageText,
          )}`,
        )
        reason = null
      }
    }
  }
}

function getIdentifier(diagnostic: TS.Diagnostic): string | undefined {
  switch (diagnostic.code) {
    case 2339:
      {
        const result = /Property '([^']+)' does not exist on type/.exec(
          JSON.stringify(diagnostic.messageText),
        )

        if (result != null) {
          return result[1]
        }
      }
      break

    default:
      break
  }
}

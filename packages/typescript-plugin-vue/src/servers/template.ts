import { GOTO_PROVIDERS } from '../features/goto'
import { REFACTOR_PROVIDERS } from '../features/refactors'
import { RENAME_PROVIDERS } from '../features/renames'
import { wrapInTrace } from '../helpers/logger'
import { isNotNull } from '../helpers/utils'
import { TS } from '../interfaces'
import { LanguageServiceOptions } from '../types'
import { noop } from './noop'

interface AdditionalFunctions {
  getEditsForFileRenameIn(
    fileName: string,
    oldFilePath: string,
    newFilePath: string,
  ): TS.FileTextChanges[]
}

export const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/
export function createTemplateLanguageServer(
  config: LanguageServiceOptions,
): TS.LanguageService & AdditionalFunctions {
  const { helpers: h, service, context } = config

  return wrapInTrace('TemplateLanguageServer', {
    ...noop,

    getQuickInfoAtPosition(fileName, position) {
      const document = h.getRenderDoc(fileName)
      if (!document) return

      const loc = document.getGeneratedOffsetAt(position)
      if (!loc) return
      const result = service.getQuickInfoAtPosition(fileName, loc.offset)

      if (result) {
        const textSpan = h.getTextSpan(document, result.textSpan)
        if (textSpan) {
          result.textSpan = textSpan

          return result
        }
      }
    },

    getSemanticDiagnostics(fileName) {
      const document = h.getRenderDoc(fileName)
      if (!document) return []

      context.log(`[DEBUG] CallInner "${document.fsPath}"`)

      const diagnostics = service
        .getSemanticDiagnostics(document.fsPath)
        .map((diagnostic) => {
          if (diagnostic.file && diagnostic.file.fileName != document.fsPath) {
            throw new Error(
              `Unexpected file "${diagnostic.file.fileName}" in diagnostics of "${document.fsPath}"`,
            )
          }

          if (diagnostic.start != null) {
            if (document.isInGeneratedRange(diagnostic.start)) {
              const position = document.getOriginalOffsetAt(diagnostic.start)

              if (position == null) {
                context.log(
                  `Cannot find mapping at ${JSON.stringify(
                    document.positionAt(diagnostic.start),
                  )} in "${document.container.fsPath}"`,
                )
              } else {
                context.log(
                  `RenderMapping: ${JSON.stringify(
                    document.positionAt(diagnostic.start),
                  )} -> ${JSON.stringify(
                    document.container
                      .getDocument({ type: 'template' })
                      .positionAt(position.offset),
                  )} in "${diagnostic.file?.fileName}"`,
                )
              }

              diagnostic.start = position?.offset ?? diagnostic.start

              return diagnostic
            } else {
              context.log(
                `Cannot find mapping at ${JSON.stringify(
                  document.positionAt(diagnostic.start),
                )} in "${document.container.fsPath}"`,
              )
            }
          } else {
            return diagnostic
          }
        })
        .filter(isNotNull)

      return diagnostics
    },

    getSuggestionDiagnostics(fileName) {
      const document = h.getRenderDoc(fileName)
      if (!document) return []

      const diagnostics = service
        .getSuggestionDiagnostics(document.fsPath)
        .map((diagnostic) => {
          if (document.isInGeneratedRange(diagnostic.start)) {
            diagnostic.start =
              document.getOriginalOffsetAt(diagnostic.start)?.offset ??
              diagnostic.start
            return diagnostic
          }

          return diagnostic
        })
        .filter(isNotNull)

      return diagnostics
    },

    getSyntacticDiagnostics(fileName) {
      const document = h.getRenderDoc(fileName)
      if (!document) return []

      const diagnostics = service
        .getSyntacticDiagnostics(document.fsPath)
        .map((diagnostic) => {
          if (document.isInGeneratedRange(diagnostic.start)) {
            diagnostic.start =
              document.getOriginalOffsetAt(diagnostic.start)?.offset ??
              diagnostic.start
            return diagnostic
          }
        })
        .filter(isNotNull)
      if (document.parserErrors.length) {
        const sourceFile = service.getProgram()?.getSourceFile(document.fsPath)
        const block = document.container.getBlock({ type: 'template' })
        if (sourceFile != null && block != null) {
          const start = block.loc.start.offset
          const length = block.loc.end.offset - start

          document.parserErrors.forEach((error) => {
            diagnostics.push({
              category: context.typescript.DiagnosticCategory.Error,
              code: error.code,
              file: sourceFile,
              source: error.loc?.source,
              start: error.loc ? error.loc.start.offset : start,
              length: error.loc
                ? error.loc.end.offset - error.loc.start.offset
                : length,
              messageText: error.message,
            })
          })
        }
      }

      return diagnostics
    },

    getRenameInfo(fileName, position, preferences = {}): TS.RenameInfo {
      for (const provider of RENAME_PROVIDERS) {
        const result = provider.canRename(
          config,
          fileName,
          position,
          preferences,
        )
        if (result != null) return result
      }

      return {
        canRename: false,
        localizedErrorMessage: 'You cannot rename this element.',
      }
    },

    findRenameLocations(fileName, position, findInStrings, findInComments) {
      for (const provider of RENAME_PROVIDERS) {
        const result = provider.applyRename(
          config,
          fileName,
          position,
          findInStrings,
          findInComments,
        )
        if (result) return result
      }

      return []
    },

    getEditsForFileRenameIn(fileName, oldFilePath, newFilePath) {
      for (const provider of RENAME_PROVIDERS) {
        const result = provider.applyFileRename(
          config,
          fileName,
          oldFilePath,
          newFilePath,
          {},
          {},
        )
        if (result) return result
      }

      return []
    },

    getApplicableRefactors(fileName, position, preferences = {}) {
      const refactors: TS.ApplicableRefactorInfo[] = []

      for (const provider of REFACTOR_PROVIDERS) {
        const result = provider.findRefactors(
          config,
          fileName,
          position,
          preferences,
        )

        if (result) refactors.push(...result)
      }

      return refactors
    },

    getEditsForRefactor(
      fileName,
      formatOptions,
      positionOrRange,
      refactorName,
      actionName,
      preferences = {},
    ) {
      for (const provider of REFACTOR_PROVIDERS) {
        const result = provider.applyRefactor(
          config,
          fileName,
          formatOptions,
          positionOrRange,
          refactorName,
          actionName,
          preferences,
        )

        if (result != null) return result
      }
    },

    getDefinitionAndBoundSpan(
      fileName,
      position,
    ): TS.DefinitionInfoAndBoundSpan | undefined {
      for (const provider of GOTO_PROVIDERS) {
        const result = provider.getDefinitionAndBoundSpan(
          config,
          fileName,
          position,
        )

        if (result != null) return result
      }
    },
  })
}

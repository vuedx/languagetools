import {
  isInterpolationNode,
  isSimpleExpressionNode,
} from '@vuedx/template-ast-types'
import { GOTO_PROVIDERS } from '../features/goto'
import { REFACTOR_PROVIDERS } from '../features/refactors'
import { RENAME_PROVIDERS } from '../features/renames'
import { wrapInTrace } from '../helpers/logger'
import { isNotNull } from '../helpers/utils'
import { TS } from '../interfaces'
import { LanguageServiceOptions } from '../types'
import { noop } from './noop'

interface AdditionalFunctions {
  getEditsForFileRenameIn: (
    fileName: string,
    oldFilePath: string,
    newFilePath: string,
  ) => TS.FileTextChanges[]
}

export const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/
export function createTemplateLanguageServer(
  config: LanguageServiceOptions,
): TS.LanguageService & AdditionalFunctions {
  const { helpers: h, service, context } = config

  return wrapInTrace('TemplateLanguageServer', {
    ...noop,

    getCompletionEntryDetails(
      fileName,
      position,
      entryName,
      formatOptions,
      source,
      preferences,
    ) {
      const document = h.getRenderDoc(fileName)
      if (document == null) return

      const loc = document.getGeneratedOffsetAt(position)

      const result =
        loc != null
          ? service.getCompletionEntryDetails(
              fileName,
              loc.offset,
              entryName,
              formatOptions,
              source,
              preferences,
            )
          : service.getCompletionEntryDetails(
              fileName,
              document.contextCompletionsTriggerOffset,
              entryName,
              formatOptions,
              source,
              preferences,
            )

      return result
    },

    getCompletionsAtPosition(fileName, position, options) {
      const document = h.getRenderDoc(fileName)

      const result: TS.CompletionInfo = {
        isGlobalCompletion: false,
        isMemberCompletion: false,
        isNewIdentifierLocation: false,
        entries: [],
      }

      if (document == null) return result

      const nodeAtCursor = h.findNodeAtPosition(document.fsPath, position)
      const loc = document.getGeneratedOffsetAt(position)

      if (loc != null) {
        Object.assign(
          result,
          service.getCompletionsAtPosition(
            document.fsPath,
            loc.offset,
            options,
          ),
        )
      }

      const isInExpression =
        isSimpleExpressionNode(nodeAtCursor.node) ||
        isInterpolationNode(nodeAtCursor.node)

      if (isInExpression) {
        const contextCompletion = service.getCompletionsAtPosition(
          document.fsPath,
          document.contextCompletionsTriggerOffset,
          {
            ...options,
            triggerCharacter: '.',
            includeAutomaticOptionalChainCompletions: true,
            includeCompletionsForModuleExports: false,
            includeCompletionsWithInsertText: true,
            includePackageJsonAutoImports: 'off',
            provideRefactorNotApplicableReason: false,
            disableSuggestions: true,
          },
        )

        if (contextCompletion?.entries != null) {
          result.entries = result.entries ?? []
          result.entries.push(...contextCompletion.entries)
        }
      }

      if (result?.entries != null) {
        const disallowedIdentifiers = new Set([
          'arguments',
          'globalThis',
          'default',
        ])
        const allowedGlobals = new Set([
          'Infinity',
          'undefined',
          'NaN',
          'isFinite',
          'isNaN',
          'parseFloat',
          'parseInt',
          'decodeURI',
          'decodeURIComponent',
          'encodeURI',
          'encodeURIComponent',
          'Math',
          'Number',
          'Date',
          'Array',
          'Object',
          'Boolean',
          'String',
          'RegExp',
          'Map',
          'Set',
          'JSON',
          'Intl',
        ])

        if (isInExpression) {
          const { components } = h.getComponentInfo(document.container)
          components.forEach((component) =>
            component.aliases.forEach((alias) =>
              disallowedIdentifiers.add(alias),
            ),
          )
        }

        result.entries = result.entries.filter((entry) => {
          if (entry.source != null) return // Ignore external module import
          if (disallowedIdentifiers.has(entry.name)) return false
          if (entry.name.startsWith('_')) return false // Ignore Vue internals
          if (entry.kindModifiers != null) {
            if (entry.kindModifiers.includes('export')) {
              if (entry.kind !== 'property') return false // Ignore non-property exports
            }
            if (entry.kindModifiers.includes('deprecated')) return false // Ignore deprecated
            if (entry.kindModifiers.includes('declare')) {
              if (entry.kind !== 'property') {
                if (!allowedGlobals.has(entry.name)) return false
              }
            }
          }
          if (entry.source === 'constants') return false // Ignore typescript constants
          if (entry.kind === 'keyword') return false // Only helpful in v-on but we discourage big inline handlers.
          if (entry.name.startsWith('$')) {
            entry.sortText = '9'
          }

          return true
        })
      }

      return result
    },

    getQuickInfoAtPosition(fileName, position) {
      const document = h.getRenderDoc(fileName)
      if (document == null) return

      const loc = document.getGeneratedOffsetAt(position)
      if (loc == null) return
      const result = service.getQuickInfoAtPosition(fileName, loc.offset)

      if (result != null) {
        const textSpan = h.getTextSpan(document, result.textSpan)
        if (textSpan != null) {
          result.textSpan = textSpan

          return result
        }
      }
    },

    getSemanticDiagnostics(fileName) {
      const document = h.getRenderDoc(fileName)
      if (document == null) return []

      context.log(`[DEBUG] CallInner "${document.fsPath}"`)

      const diagnostics = service
        .getSemanticDiagnostics(document.fsPath)
        .map((diagnostic) => {
          if (
            diagnostic.file != null &&
            diagnostic.file.fileName !== document.fsPath
          ) {
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
                  )} in "${diagnostic.file?.fileName ?? ''}"`,
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
      if (document == null) return []

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
      if (document == null) return []

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
      if (document.parserErrors.length > 0) {
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
        if (result != null) return result
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
        if (result != null) return result
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

        if (result != null) refactors.push(...result)
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

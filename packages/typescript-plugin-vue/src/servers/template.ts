import QuickLRU from 'quick-lru'
import { TS } from '../interfaces'
import { LanguageServiceOptions } from '../types'
import { isNotNull } from '../helpers/utils'
import { noop } from './noop'
import { RENAME_PROVIDERS } from '../features/renames'
import { REFACTOR_PROVIDERS } from '../features/refactors'

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

  const cache = new QuickLRU<string, any>({ maxSize: 1000 })

  return {
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

      const key = `getSemanticDiagnostics::${document.container.version}::${fileName}`

      if (cache.has(key)) return cache.get(key)

      const diagnostics = service
        .getSemanticDiagnostics(fileName)
        .map((diagnostic) => {
          if (Number.isInteger(diagnostic.start)) {
            const position = document.findExpression(
              diagnostic.start!,
              diagnostic.length || 1,
            )
            if (!position) return

            diagnostic.start = position.offset
            diagnostic.length = position.length
          }

          return diagnostic
        })
        .filter(isNotNull)

      cache.set(key, diagnostics)

      return diagnostics
    },

    getSuggestionDiagnostics(fileName) {
      const document = h.getRenderDoc(fileName)
      if (!document) return []

      const key = `getSuggestionDiagnostics::${document.container.version}::${fileName}`
      if (cache.has(key)) return cache.get(key)

      const diagnostics = service
        .getSuggestionDiagnostics(fileName)
        .map((diagnostic) => {
          if (Number.isInteger(diagnostic.start)) {
            const position = document.findExpression(
              diagnostic.start!,
              diagnostic.length || 1,
            )

            if (!position) return

            diagnostic.start = position.offset
            diagnostic.length = position.length
          }

          return diagnostic
        })
        .filter(isNotNull)
      cache.set(key, diagnostics)
      return diagnostics
    },

    getSyntacticDiagnostics(fileName) {
      const document = h.getRenderDoc(fileName)
      if (!document) return []

      const key = `getSyntacticDiagnostics::${document.container.version}::${fileName}`
      if (cache.has(key)) return cache.get(key)
      const diagnostics = service
        .getSyntacticDiagnostics(fileName)
        .map((diagnostic) => {
          if (Number.isInteger(diagnostic.start)) {
            const position = document.findExpression(
              diagnostic.start!,
              diagnostic.length || 1,
            )

            if (!position) return

            diagnostic.start = position.offset
            diagnostic.length = position.length
          }

          return diagnostic
        })
        .filter(isNotNull)
      cache.set(key, diagnostics)
      return diagnostics
    },

    getRenameInfo(fileName, position, preferences = {}) {
      for (const provider of RENAME_PROVIDERS) {
        const result = provider.canRename(
          config,
          fileName,
          position,
          preferences,
        )
        if (result) return result
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

        if (result) return result
      }
    },

    getDefinitionAndBoundSpan(fileName, position) {
      const document = h.getRenderDoc(fileName)
      if (document == null) return

      const location = document.getGeneratedOffsetAt(position)
      if (location == null) return

      const result = service.getDefinitionAndBoundSpan(
        fileName,
        location.offset,
      )
      if (result == null) return

      console.log('Raw Bound Info', JSON.stringify(result, null, 2))

      const definitions: TS.DefinitionInfo[] = []

      result.definitions?.forEach((definition) => {
        if (h.isRenderFunctionFileName(definition.fileName)) {
          if (definition.fileName !== document.fsPath) {
            context.log(
              `Unexpected bound span in ${document.fsPath} resolved to ${definition.fileName}`,
            )
            return
          }

          if (!document.isInGeneratedRange(definition.textSpan.start)) {
            // possibly de-structured from context.
            const newResult = service.getDefinitionAndBoundSpan(
              definition.fileName,
              definition.textSpan.start,
            )

            if (newResult?.definitions != null) {
              definitions.push(...newResult.definitions)
              result.textSpan = newResult.textSpan
            } else if (definition.kind === 'var') {
              // could be a prop
              const componentInfo = h.getComponentInfo(document.container)
              console.log(
                'Trying as prop',
                JSON.stringify(componentInfo, null, 2),
              )
              const prop = componentInfo.props.find(
                (prop) => prop.name === definition.name,
              )

              if (prop != null) {
                definitions.push({
                  ...definition,
                  fileName: document.container.fsPath,
                  textSpan: {
                    start: prop.loc.start.offset,
                    length: prop.loc.source.length,
                  },
                  containerKind: context.typescript.ScriptElementKind.unknown,
                  containerName: '',
                  contextSpan:
                    componentInfo.options?.properties['props'] != null
                      ? {
                          start:
                            componentInfo.options.properties['props'].loc.start
                              .offset,
                          length:
                            componentInfo.options.properties['props'].loc.source
                              .length,
                        }
                      : undefined,
                })
              }
            }
          } else {
            const textSpan = h.getTextSpan(document, definition.textSpan)
            if (textSpan) {
              definition.textSpan = textSpan
              if (definition.contextSpan != null) {
                definition.contextSpan = h.getTextSpan(
                  document,
                  definition.contextSpan,
                )
              }
              definition.fileName = document.container.fsPath
              definitions.push(definition)
            }
          }
        } else {
          definitions.push(definition)
        }
      })
      result.definitions = definitions
      console.log('Processed Bound Info', JSON.stringify(result, null, 2))
      return result
    },
  }
}

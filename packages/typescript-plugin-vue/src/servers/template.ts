import { isNotNull } from '@vuedx/shared'
import {
  isComponentNode,
  isElementNode,
  traverseFast,
} from '@vuedx/template-ast-types'
import { inspect } from 'util'
import { TEMPLATE_COMPLETION_PROVIDERS } from '../features/completions'
import { GOTO_PROVIDERS } from '../features/goto'
import { REFACTOR_PROVIDERS } from '../features/refactors'
import { RENAME_PROVIDERS } from '../features/renames'
import { wrapInTrace } from '../helpers/logger'
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
  const { helpers: h, context, service } = config
  const choose = (fileName: string): TS.LanguageService => {
    try {
      service.getProgram()?.getSourceFile(fileName) // This should throw if {fileName} is not part of program.

      return service
    } catch {
      return (
        context.projectService
          .getDefaultProjectForFile(
            context.typescript.server.toNormalizedPath(fileName),
            false,
          )
          ?.getLanguageService() ?? service
      )
    }
  }

  return wrapInTrace('TemplateLanguageServer', {
    ...noop,

    getCompletionsAtPosition(fileName, position, options) {
      const result: TS.CompletionInfo = {
        isGlobalCompletion: false,
        isMemberCompletion: false,
        isNewIdentifierLocation: false,
        entries: [],
      }

      for (const provider of TEMPLATE_COMPLETION_PROVIDERS) {
        const providerResults = provider.getCompletionsAtPosition(
          config,
          fileName,
          position,
          options,
        )
        if (isNotNull(providerResults)) {
          result.entries.push(...providerResults.entries)
          if (isNotNull(providerResults.metadata)) {
            context.log(
              `@@DEBUG Found some completion metadata: ${inspect(
                providerResults.metadata,
              )}`,
            )
          }
        }
      }

      return result
    },

    getCompletionEntryDetails(
      fileName,
      position,
      entryName,
      formatOptions,
      source,
      preferences,
    ) {
      for (const provider of TEMPLATE_COMPLETION_PROVIDERS) {
        const result = provider.getCompletionEntryDetails(
          config,
          fileName,
          position,
          entryName,
          formatOptions,
          source,
          preferences,
        )
        if (isNotNull(result)) return result
      }
    },

    getCompletionEntrySymbol(fileName, position, name, source) {
      for (const provider of TEMPLATE_COMPLETION_PROVIDERS) {
        const result = provider.getCompletionEntrySymbol(
          config,
          fileName,
          position,
          name,
          source,
        )
        if (isNotNull(result)) return result
      }
    },

    getSignatureHelpItems(fileName, position, options) {
      const document = h.getRenderDoc(fileName)
      const loc = document?.getGeneratedOffsetAt(position)

      if (loc != null && document != null) {
        return choose(document.fsPath).getSignatureHelpItems(
          document.fsPath,
          loc.offset,
          options,
        )
      }
    },

    getQuickInfoAtPosition(fileName, position) {
      const document = h.getRenderDoc(fileName)
      if (document == null) return

      const loc = document.getGeneratedOffsetAt(position)
      if (loc == null) return

      const nodeAtCursor = h.findTemplateNodeAtPosition(
        document.fsPath,
        position,
      )
      const result = choose(document.fsPath).getQuickInfoAtPosition(
        fileName,
        loc.offset,
      )

      if (result != null) {
        const textSpan = h.getTextSpan(
          document,
          result.textSpan,
          nodeAtCursor.node,
        )
        if (textSpan != null) {
          result.textSpan = textSpan
        } else {
          return
        }
        result.displayParts?.forEach((displayPart) => {
          if (displayPart.text === 'JSX attribute') {
            displayPart.text = 'prop' // TODO: Maybe event or prop or attribute?
          }
        })
      }
      return result
    },

    getSemanticDiagnostics(fileName) {
      const document = h.getRenderDoc(fileName)
      if (document == null) return []

      const diagnostics = choose(document.fsPath)
        .getSemanticDiagnostics(document.fsPath)
        .map((diagnostic) => {
          if (
            diagnostic.file != null &&
            diagnostic.file.fileName !== document.fsPath
          ) {
            return diagnostic
          }

          if (diagnostic.start != null) {
            if (document.isInGeneratedRange(diagnostic.start)) {
              const position = document.getOriginalOffsetAt(diagnostic.start)

              diagnostic.start = position?.offset ?? diagnostic.start

              return diagnostic
            } else {
              return null
            }
          } else {
            return diagnostic
          }
        })
        .filter(isNotNull)

      // TODO: Cache it.
      const project = context.getVueProjectForFile(document.container.fsPath)
      if (document.ast != null && project?.kind === 'inferred') {
        const info = h.getComponentInfo(document.container)
        const localComponentNames = new Set(
          info.components.flatMap((component) => component.aliases),
        )
        const globalComponentNames = new Set(
          project.globalComponents.flatMap((component) => component.aliases),
        )
        const projectComponentNames = new Set(
          project.components.flatMap((component) => component.aliases),
        )
        const projectComponents = project.components
        const file = choose(document.fsPath)
          .getProgram()
          ?.getSourceFile(document.fsPath)
        traverseFast(document.ast, (node) => {
          if (isComponentNode(node)) {
            if (
              !localComponentNames.has(node.tag) &&
              !globalComponentNames.has(node.tag) &&
              projectComponentNames.has(node.tag)
            ) {
              const components = projectComponents.filter((component) =>
                component.aliases.includes(node.tag),
              )

              let messageText = `The component '${node.tag}' is inferred as global component. It may not be available at runtime.`
              const relatedInformation: TS.DiagnosticRelatedInformation[] = []

              if (!components[0].source.moduleName.endsWith('.vue')) {
                messageText = `The component '${node.tag}' is found in '${components[0].source.moduleName}' and it inferred as global component. It may not be available at runtime.`
              }

              if (components.length > 1) {
                components.forEach((component) => {
                  relatedInformation.push({
                    code: 59002,
                    category: context.typescript.DiagnosticCategory.Warning,
                    messageText: `Found in '${component.source.moduleName}'`,
                    file: undefined,
                    start: undefined,
                    length: undefined,
                  })
                })
              }

              diagnostics.push({
                category: context.typescript.DiagnosticCategory.Warning,
                code: 59001,
                start: node.loc.start.offset + 1,
                length: node.tag.length,
                messageText,
                file,
                relatedInformation,
              })
            }
          }
        })
      }

      if (document.container.descriptor.template != null) {
        const start = document.container.descriptor.template.loc.start.offset
        const end = document.container.descriptor.template.loc.end.offset
        return diagnostics.filter(
          (item) =>
            item.start == null ||
            item.length == null ||
            (start <= item.start && item.start + item.length <= end),
        )
      }

      return diagnostics
    },

    getSuggestionDiagnostics(fileName) {
      const document = h.getRenderDoc(fileName)
      if (document == null) return []

      const diagnostics = choose(document.fsPath)
        .getSuggestionDiagnostics(document.fsPath)
        .map((diagnostic) => {
          if (diagnostic.start != null) {
            if (document.isInGeneratedRange(diagnostic.start)) {
              const position = document.getOriginalOffsetAt(diagnostic.start)

              diagnostic.start = position?.offset ?? diagnostic.start

              return diagnostic
            } else {
              return null
            }
          } else {
            return diagnostic
          }
        })
        .filter(isNotNull)

      if (document.container.descriptor.template != null) {
        const start = document.container.descriptor.template.loc.start.offset
        const end = document.container.descriptor.template.loc.end.offset
        return diagnostics.filter(
          (item) =>
            item.start == null ||
            item.length == null ||
            (start <= item.start && item.start + item.length <= end),
        )
      }

      return diagnostics
    },

    getSyntacticDiagnostics(fileName) {
      const document = h.getRenderDoc(fileName)
      if (document == null) return []

      const diagnostics = choose(document.fsPath)
        .getSyntacticDiagnostics(document.fsPath)
        .map((diagnostic) => {
          if (diagnostic.start != null) {
            if (document.isInGeneratedRange(diagnostic.start)) {
              const position = document.getOriginalOffsetAt(diagnostic.start)

              diagnostic.start = position?.offset ?? diagnostic.start

              return diagnostic
            } else {
              return null
            }
          } else {
            return diagnostic
          }
        })
        .filter(isNotNull)
      if (document.parserErrors.length > 0) {
        const sourceFile = choose(document.fsPath)
          .getProgram()
          ?.getSourceFile(document.fsPath)
        const block = document.container.getBlock({ type: 'template' })
        if (sourceFile != null && block != null) {
          const start = block.loc.start.offset
          const length = block.loc.end.offset - start

          document.parserErrors.forEach((error) => {
            diagnostics.push({
              category: context.typescript.DiagnosticCategory.Error,
              code: 50000 + error.code,
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

      if (document.container.descriptor.template != null) {
        const start = document.container.descriptor.template.loc.start.offset
        const end = document.container.descriptor.template.loc.end.offset
        return diagnostics.filter(
          (item) =>
            item.start == null ||
            item.length == null ||
            (start <= item.start && item.start + item.length <= end),
        )
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
        if (result != null) {
          context.log(`@@DEBUG found getRenameInfo using "${provider.name}"`)

          return result
        }
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

        if (result != null) {
          context.log(
            `@@DEBUG found findRenameLocations using "${provider.name}"`,
          )

          return result
        }
      }
    },

    getEditsForFileRenameIn(fileName, oldFilePath, newFilePath) {
      const fileTextChanges: TS.FileTextChanges[] = []
      for (const provider of RENAME_PROVIDERS) {
        const result = provider.applyFileRename(
          config,
          fileName,
          oldFilePath,
          newFilePath,
          {},
          {},
        )
        if (result != null) fileTextChanges.push(...result)
      }

      return fileTextChanges
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
      const provider = REFACTOR_PROVIDERS.find(
        (provider) => provider.name === refactorName,
      )

      if (provider != null) {
        context.log(`@@DEBUG: Using ${provider.name}`)
        return provider.applyRefactor(
          config,
          fileName,
          formatOptions,
          positionOrRange,
          refactorName,
          actionName,
          preferences,
        )
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

    getJsxClosingTagAtPosition(fileName, position) {
      const { node } = h.findTemplateNodeAtPosition(fileName, position)

      if (isElementNode(node)) {
        return { newText: `</${node.tag}>` }
      }
    },
  })
}

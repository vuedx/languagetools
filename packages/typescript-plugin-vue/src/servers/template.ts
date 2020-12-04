import {
  isComponentNode,
  isDirectiveNode,
  isElementNode,
  isInterpolationNode,
  isSimpleExpressionNode,
  t,
  traverseFast,
} from '@vuedx/template-ast-types'
import {
  getContainingFile,
  isVirtualFile,
  isVueFile,
  MODULE_SELECTOR,
  RenderFunctionTextDocument,
  VIRTUAL_FILENAME_SEPARATOR,
} from '@vuedx/vue-virtual-textdocument'
import { PluginContext } from '../context'
import { GOTO_PROVIDERS } from '../features/goto'
import { REFACTOR_PROVIDERS } from '../features/refactors'
import { RENAME_PROVIDERS } from '../features/renames'
import { wrapInTrace } from '../helpers/logger'
import { getComponentName, isNotNull } from '../helpers/utils'
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
      const loc = document.tryGetGeneratedOffset(position)
      const result =
        (loc != null
          ? choose(document.fsPath).getCompletionEntryDetails(
              document.fsPath,
              loc,
              entryName,
              formatOptions,
              source,
              preferences,
            )
          : undefined) ??
        choose(document.fsPath).getCompletionEntryDetails(
          document.fsPath,
          document.tagCompletionsTriggerOffset,
          entryName,
          formatOptions,
          source,
          preferences,
        ) ??
        choose(document.fsPath).getCompletionEntryDetails(
          document.fsPath,
          document.contextCompletionsTriggerOffset,
          entryName,
          formatOptions,
          source,
          preferences,
        )

      result?.codeActions?.forEach((codeAction) => {
        if (
          source != null &&
          isVirtualFile(source) &&
          entryName === 'component'
        ) {
          const { script, scriptSetup } = document.container.descriptor
          codeAction.changes.forEach((change) => {
            const additionalTextChanges: TS.TextChange[] = []
            if (change.fileName === document.fsPath) {
              change.fileName = document.container.fsPath
              change.textChanges.forEach((textChange) => {
                if (textChange.newText.startsWith('import component from')) {
                  if (scriptSetup != null) {
                    textChange.newText = textChange.newText.replace(
                      'import component ',
                      'export { default as component } ',
                    )
                    textChange.span.start =
                      scriptSetup.loc.start.offset +
                      scriptSetup.loc.source.indexOf('\n') +
                      1 // Insert after first new line
                    textChange.span.length = 0
                  } else if (script != null) {
                    // Register component code.
                  }
                }
              })
            }

            change.textChanges = [
              ...change.textChanges,
              ...additionalTextChanges,
            ]
          })
        }
      })

      return result
    },

    // TODO: Extract this to features directory and modularize.
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
      const loc = document.tryGetGeneratedOffset(position)
      const {
        isTagCompletion,
        isInExpression,
        charAtCursor,
      } = detectCompletionType(
        context,
        document,
        position,
        options?.triggerCharacter,
        nodeAtCursor.node,
      )

      if (isTagCompletion) {
        Object.assign(
          result,
          choose(document.fsPath).getCompletionsAtPosition(
            document.fsPath,
            document.tagCompletionsTriggerOffset,
            options,
          ),
        )
        const info = h.getComponentInfo(document.container)

        info.components.forEach((component) => {
          result.entries.push({
            name: component.name,
            kind: context.typescript.ScriptElementKind.jsxAttribute,
            sortText: '4',
            source: h.getResolvedModule(
              document.fsPath,
              component.source.moduleName,
            )?.resolvedFileName,
          })
        })
        // TODO: Add global components
        const project = context.projectService.getDefaultProjectForFile(
          context.typescript.server.toNormalizedPath(document.fsPath),
          false,
        )

        if (project != null) {
          const fileNames = Array.from(
            new Set(
              project
                .getFileNames(false)
                .map((fileName) => fileName.toString())
                .filter(
                  (fileName) => isVirtualFile(fileName) || isVueFile(fileName),
                )
                .map((fileName) => getContainingFile(fileName)),
            ),
          )

          fileNames.forEach((fileName) => {
            const name = getComponentName(fileName)
            result.entries.push({
              name: name,
              kind: context.typescript.ScriptElementKind.jsxAttribute,
              sortText: '4',
              source: fileName + VIRTUAL_FILENAME_SEPARATOR + MODULE_SELECTOR,
              hasAction: true,
            })
          })
        }
      } else if (loc != null) {
        Object.assign(
          result,
          choose(document.fsPath).getCompletionsAtPosition(
            document.fsPath,
            loc,
            options,
          ),
        )
      } else if (isElementNode(nodeAtCursor.node)) {
        const loc = document.tryGetGeneratedOffset(
          nodeAtCursor.node.loc.start.offset + 1,
        )

        if (loc != null) {
          Object.assign(
            result,
            choose(document.fsPath).getCompletionsAtPosition(
              document.fsPath,
              loc + nodeAtCursor.node.tag.length + 1, // TODO: Handle kebab-cased tags.
              options,
            ),
          )
        }
      } else if (isDirectiveNode(nodeAtCursor.node)) {
        const parent =
          nodeAtCursor.ancestors[nodeAtCursor.ancestors.length - 1].node
        if (isElementNode(parent)) {
          const loc = document.tryGetGeneratedOffset(
            parent.loc.start.offset + 1,
          )

          if (loc != null) {
            Object.assign(
              result,
              choose(document.fsPath).getCompletionsAtPosition(
                document.fsPath,
                loc + parent.tag.length + 1, // TODO: Handle kebab-cased tags.
                options,
              ),
            )
          }
        }
      }

      if (isInExpression && /^[ {+/*-]$/.test(charAtCursor)) {
        const contextCompletion = choose(
          document.fsPath,
        ).getCompletionsAtPosition(
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
          if (entry.source != null && entry.kind !== 'JSX attribute') return // Ignore external module import
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

          if (isTagCompletion && entry.kind !== 'JSX attribute') {
            return false
          }

          return true
        })
      }

      return result
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

      const nodeAtCursor = h.findNodeAtPosition(document.fsPath, position)
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
      const locs: TS.RenameLocation[] = []
      for (const provider of RENAME_PROVIDERS) {
        const result = provider.applyRename(
          config,
          fileName,
          position,
          findInStrings,
          findInComments,
        )

        if (result != null) locs.push(...result)
      }
      return locs
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

function detectCompletionType(
  context: PluginContext,
  document: RenderFunctionTextDocument,
  position: number,
  triggerCharacter?: string,
  node?: t.Node | null,
): { isTagCompletion: boolean; isInExpression: boolean; charAtCursor: string } {
  const templateSource = document.container.getDocument('template').getText()
  let isTagCompletion = triggerCharacter === '<'
  const index = isTagCompletion
    ? 0
    : templateSource.substr(0, position).lastIndexOf('<')
  if (index > 0) {
    const text = templateSource.substring(index, position)
    isTagCompletion = /^<[A-Za-z0-9-]*$/.test(text)
  }

  const isInExpression =
    !isTagCompletion &&
    (isSimpleExpressionNode(node) || isInterpolationNode(node))

  return {
    isTagCompletion,
    isInExpression,
    charAtCursor: templateSource.substr(position - 1, 1),
  }
}

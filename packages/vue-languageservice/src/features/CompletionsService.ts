import { isNotNull, isPascalCase } from '@vuedx/shared'
import {
  findTemplateNodeAt,
  isElementNode,
  isInterpolationNode,
  isSimpleExpressionNode,
  SearchResult,
} from '@vuedx/template-ast-types'
import type {
  TextDocument,
  VueBlockDocument,
  VueSFCDocument,
} from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import type Typescript from 'typescript/lib/tsserverlibrary'
import { FilesystemService } from '../services/FilesystemService'
import { LoggerService } from '../services/LoggerService'
import { TypescriptService } from '../services/TypescriptService'

interface TSCompletionsInVueFile {
  blockFile: VueBlockDocument
  vueFile: VueSFCDocument
  tsFile: TextDocument
  fileName: string
  cursor: {
    original: number
    generated: number
    template: SearchResult | undefined
    setup: number | undefined
  }
  completions: {
    ts: Typescript.WithMetadata<Typescript.CompletionInfo> | undefined
    tsx: Typescript.WithMetadata<Typescript.CompletionInfo> | undefined
    offset: Typescript.WithMetadata<Typescript.CompletionInfo> | undefined
    setup: Typescript.WithMetadata<Typescript.CompletionInfo> | undefined
  }
}

@injectable()
export class CompletionsService {
  private readonly logger = LoggerService.getLogger('Completions')

  constructor(
    @inject(TypescriptService)
    private readonly ts: TypescriptService,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
  ) {}

  private readonly ignoreList = new Set('arguments'.split(','))

  private getTSCompletionsAtPositionInVueFile(
    fileName: string,
    position: number,
    options: Typescript.GetCompletionsAtPositionOptions | undefined,
  ): undefined | TSCompletionsInVueFile {
    const service = this.ts.getServiceFor(fileName)
    if (service == null) return
    const vueFile = this.fs.getVueFile(fileName)
    if (vueFile == null) return
    const blockFile = vueFile.getDocAt(position)
    if (blockFile == null) return
    const tsFile = blockFile.generated
    const tsFileName = blockFile.tsFileName
    if (tsFile == null || tsFileName == null) return

    const offset = blockFile.generatedOffetAt(position)
    const template =
      blockFile.block.type === 'template' && vueFile.templateAST != null
        ? findTemplateNodeAt(
            vueFile.templateAST,
            position - blockFile.block.loc.start.offset,
          )
        : undefined

    return {
      vueFile,
      blockFile,
      tsFile,
      fileName: tsFileName,
      cursor: {
        original: position - blockFile.block.loc.start.offset,
        generated: offset,
        template,
        setup:
          vueFile.descriptor.scriptSetup != null
            ? (vueFile
                .getDoc(vueFile.descriptor.scriptSetup)
                ?.generated?.getText().length ?? 1) - 1
            : undefined,
      },
      completions: {
        ts:
          blockFile.tsCompletionsOffset != null
            ? service.getCompletionsAtPosition(
                tsFileName,
                blockFile.tsCompletionsOffset,
                this.getContextCompletionOptions(options),
              )
            : undefined,
        tsx:
          blockFile.tsxCompletionsOffset != null
            ? service.getCompletionsAtPosition(
                tsFileName,
                blockFile.tsxCompletionsOffset,
                this.getTsxCompletionOptions(options),
              )
            : undefined,
        offset: service.getCompletionsAtPosition(tsFileName, offset, options),
        setup: this.getScriptSetupCompletions(fileName),
      },
    }
  }

  private getScriptSetupCompletions(
    fileName: string,
  ): Typescript.WithMetadata<Typescript.CompletionInfo> | undefined {
    const service = this.ts.getServiceFor(fileName)
    if (service == null) return
    const vueFile = this.fs.getVueFile(fileName)
    if (vueFile == null) return
    const scriptSetup = vueFile.descriptor.scriptSetup
    if (scriptSetup != null) {
      const file = vueFile.getDoc(scriptSetup)
      if (file?.tsFileName != null && file.generated != null) {
        const position = file.generated.getText().length - 1
        return service.getCompletionsAtPosition(file.tsFileName, position, {
          /* TODO: Put some options */
        })
      }
    }

    return undefined
  }

  private getTsxCompletionOptions(
    options: Typescript.GetCompletionsAtPositionOptions | undefined,
  ): Typescript.GetCompletionsAtPositionOptions {
    return {
      ...options,
      allowTextChangesInNewFiles: false,
      disableSuggestions: false,
      includeAutomaticOptionalChainCompletions: true,
      includeCompletionsForImportStatements: true,
      includeCompletionsForModuleExports: true,
      includePackageJsonAutoImports: 'off',
      triggerCharacter: '<',
    }
  }

  private getContextCompletionOptions(
    options: Typescript.GetCompletionsAtPositionOptions | undefined,
  ): Typescript.GetCompletionsAtPositionOptions {
    return {
      ...options,
      allowTextChangesInNewFiles: false,
      disableSuggestions: true,
      includeAutomaticOptionalChainCompletions: true,
      includeCompletionsForImportStatements: false,
      includeCompletionsForModuleExports: false,
      includePackageJsonAutoImports: 'off',
      triggerCharacter: '.',
    }
  }

  public getCompletionsAtPosition(
    fileName: string,
    position: number,
    options: Typescript.GetCompletionsAtPositionOptions | undefined,
  ): Typescript.WithMetadata<Typescript.CompletionInfo> | undefined {
    this.logger.debug(`Find completions at ${position} in ${fileName}`)
    const service = this.ts.getServiceFor(fileName)
    if (service == null) return
    if (this.fs.isVueFile(fileName)) {
      const result = this.getTSCompletionsAtPositionInVueFile(
        fileName,
        position,
        options,
      )
      if (result == null) return
      const { cursor, completions } = result

      if (cursor.template != null) {
        const { node } = cursor.template
        if (isSimpleExpressionNode(node) || isInterpolationNode(node)) {
          return this.combine(
            [
              completions.ts,
              completions.offset,
              completions.setup,
            ].map((info) => this.filterCompletionsInExpression(info)),
          )
        } else if (isElementNode(node)) {
          if (cursor.original <= node.loc.start.offset + node.tag.length + 1) {
            return this.combine(
              [
                completions.tsx,
                completions.offset,
                completions.setup,
              ].map((info) => this.filterCompletionsInElementTag(info)),
            )
          }
        }
      }

      return this.combine([completions.offset])
    } else {
      return this.combine([
        service.getCompletionsAtPosition(fileName, position, options),
      ])
    }
  }

  public getCompletionEntryDetails(
    fileName: string,
    position: number,
    entryName: string,
    formatOptions:
      | Typescript.FormatCodeOptions
      | Typescript.FormatCodeSettings
      | undefined,
    source: string | undefined,
    preferences: Typescript.UserPreferences | undefined,
    data: Typescript.CompletionEntryData | undefined,
  ): Typescript.CompletionEntryDetails | undefined {
    const service = this.ts.getServiceFor(fileName)
    if (service == null) return

    if (this.fs.isVueFile(fileName)) {
      const result = this.getTSCompletionsAtPositionInVueFile(
        fileName,
        position,
        undefined,
      )

      if (result == null) return

      const { blockFile, completions } = result

      const fromTS = completions.ts?.entries.find((entry) =>
        this.testCompletionEntry(entry, entryName, source),
      )
      if (fromTS != null && blockFile.tsCompletionsOffset != null) {
        return service.getCompletionEntryDetails(
          result.fileName,
          blockFile.tsCompletionsOffset,
          entryName,
          formatOptions,
          fromTS.source,
          preferences,
          data,
        )
      }
      const fromTSX = completions.tsx?.entries.find((entry) =>
        this.testCompletionEntry(entry, entryName, source),
      )
      if (fromTSX != null && blockFile.tsxCompletionsOffset != null) {
        return service.getCompletionEntryDetails(
          result.fileName,
          blockFile.tsxCompletionsOffset,
          entryName,
          formatOptions,
          fromTSX.source,
          preferences,
          data,
        )
      }
      const fromOffset = completions.offset?.entries.find((entry) =>
        this.testCompletionEntry(entry, entryName, source),
      )
      if (fromOffset != null) {
        return service.getCompletionEntryDetails(
          result.fileName,
          result.cursor.generated,
          entryName,
          formatOptions,
          fromOffset.source,
          preferences,
          data,
        )
      }

      const fromSetup = completions.setup?.entries.find((entry) =>
        this.testCompletionEntry(entry, entryName, source),
      )
      if (fromSetup != null && result.cursor.setup != null) {
        return service.getCompletionEntryDetails(
          result.fileName,
          result.cursor.setup,
          entryName,
          formatOptions,
          fromSetup.source,
          preferences,
          data,
        )
      }

      return undefined
    } else {
      return service.getCompletionEntryDetails(
        fileName,
        position,
        entryName,
        formatOptions,
        source,
        preferences,
        data,
      )
    }
  }

  private testCompletionEntry(
    entry: Typescript.CompletionEntry,
    entryName: string,
    source: string | undefined,
  ): boolean {
    if (entry.name !== entryName) return false
    const a = source ?? ''
    const b = entry.source ?? ''
    return a === b || a === this.fs.getRealFileName(b)
  }

  private filterCompletionsInExpression(
    info: Typescript.WithMetadata<Typescript.CompletionInfo> | undefined,
  ): Typescript.WithMetadata<Typescript.CompletionInfo> | undefined {
    if (info == null) return

    info.entries = info.entries.filter((entry) => {
      if (entry.name.startsWith('_') || entry.name === '$') return false // Internal properties
      if (entry.source == null) {
        if (this.ignoreList.has(entry.name)) return false // Global ignore list
      }

      // Move dollar properties at the bottom
      if (entry.name.startsWith('$')) {
        entry.sortText = '9:' + entry.sortText
      }

      return true
    })

    return info
  }

  private filterCompletionsInElementTag(
    info: Typescript.WithMetadata<Typescript.CompletionInfo> | undefined,
  ): Typescript.WithMetadata<Typescript.CompletionInfo> | undefined {
    if (info == null) return

    info.entries = info.entries.filter((entry) => {
      return isPascalCase(entry.name)
    })

    return info
  }

  private combine(
    completions: Array<
      Typescript.WithMetadata<Typescript.CompletionInfo> | undefined
    >,
  ): Typescript.WithMetadata<Typescript.CompletionInfo> | undefined {
    const onlyValid = completions.filter(isNotNull)
    if (onlyValid[0] == null) return

    const completion = onlyValid[0]

    onlyValid.slice(1).forEach((result) => {
      completion.entries.push(...result.entries)
    })

    const ids = new Set<string>()

    completion.entries = completion.entries.filter((entry) => {
      // Check virtuals.
      if (entry.source != null) {
        if (this.fs.isVueVirtualFile(entry.source)) {
          return false
        }
      }

      // Check duplicates.
      const id = this.getCompletionEntryId(entry)
      if (ids.has(id)) return false
      ids.add(id)

      return true
    })

    completion.entries.forEach((entry) => {
      if (entry.source != null) {
        if (
          this.fs.isVueVirtualFile(entry.source) ||
          this.fs.isVueTsFile(entry.source)
        ) {
          entry.source = this.fs.getRealFileName(entry.source)
        }
      }
    })

    return completion
  }

  private getCompletionEntryId(entry: Typescript.CompletionEntry): string {
    return JSON.stringify({
      source: entry.source,
      name: entry.name,
    })
  }
}

import { VueSFCDocument } from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import type { TSLanguageService, TypeScript } from '../contracts/TypeScript'
import { FilesystemService } from '../services/FilesystemService'
import { LoggerService } from '../services/LoggerService'
import { TypescriptContextService } from '../services/TypescriptContextService'

@injectable()
export class CompletionsService
  implements
    Pick<
      TSLanguageService,
      | 'getCompletionsAtPosition'
      | 'getCompletionEntryDetails'
      | 'getCompletionEntrySymbol'
      | 'getDocCommentTemplateAtPosition'
      | 'getJsxClosingTagAtPosition'
    >
{
  public readonly logger = new LoggerService(CompletionsService)

  constructor(
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
  ) {}

  // TODO: provide template completions, e.g. v-model, v-for, etc.
  // TODO: provide v-bind and v-on completions for props and events.
  // TODO: provide modifiers completions for directives.

  public getCompletionsAtPosition(
    fileName: string,
    position: number,
    options: TypeScript.GetCompletionsAtPositionOptions | undefined,
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    return this.pick(fileName, position, {
      script: (file) => {
        const generatedPosition = file.generatedOffsetAt(position)
        if (generatedPosition == null) return
        return this.processCompletionInfo(
          this.ts.service.getCompletionsAtPosition(
            file.generatedFileName,
            generatedPosition,
            options,
          ),
        )
      },
    })
  }

  public getCompletionEntryDetails(
    fileName: string,
    position: number,
    entryName: string,
    formatOptions:
      | TypeScript.FormatCodeOptions
      | TypeScript.FormatCodeSettings
      | undefined,
    source: string | undefined,
    preferences: TypeScript.UserPreferences | undefined,
    data: TypeScript.CompletionEntryData | undefined,
  ): TypeScript.CompletionEntryDetails | undefined {
    return this.pick(fileName, position, {
      script: (file) => {
        const generatedPosition = file.generatedOffsetAt(position)
        if (generatedPosition == null) return
        return this.processCompletionEntryDetails(
          this.ts.service.getCompletionEntryDetails(
            file.generatedFileName,
            generatedPosition,
            entryName,
            formatOptions,
            source,
            preferences,
            data,
          ),
        )
      },
    })
  }

  public getCompletionEntrySymbol(
    fileName: string,
    position: number,
    name: string,
    source: string | undefined,
  ): TypeScript.Symbol | undefined {
    return this.pick(fileName, position, {
      script: (file) => {
        const generatedPosition = file.generatedOffsetAt(position)
        if (generatedPosition == null) return
        return this.ts.service.getCompletionEntrySymbol(
          file.generatedFileName,
          generatedPosition,
          name,
          source,
        )
      },
    })
  }

  public getDocCommentTemplateAtPosition(
    fileName: string,
    position: number,
    options?: TypeScript.DocCommentTemplateOptions,
  ): TypeScript.TextInsertion | undefined {
    return this.pick(fileName, position, {
      script: (file) => {
        const generatedPosition = file.generatedOffsetAt(position)
        if (generatedPosition == null) return
        return this.ts.service.getDocCommentTemplateAtPosition(
          file.generatedFileName,
          generatedPosition,
          options,
        )
      },
    })
  }

  public getJsxClosingTagAtPosition(
    fileName: string,
    position: number,
  ): TypeScript.JsxClosingTagInfo | undefined {
    return this.pick(fileName, position, {
      script: (file) => {
        const generatedPosition = file.generatedOffsetAt(position)
        if (generatedPosition == null) return
        return this.ts.service.getJsxClosingTagAtPosition(
          file.generatedFileName,
          generatedPosition,
        )
      },
    })
  }

  private pick<R>(
    fileName: string,
    position: number,
    fns: Record<string, (file: VueSFCDocument) => R>,
  ): R | undefined {
    const file = this.fs.getVueFile(fileName)
    if (file == null) return
    const block = file.getBlockAt(position)
    if (block == null) return
    const fn = fns[block.type]
    if (fn == null) return
    return fn(file)
  }

  public processCompletionInfo<T extends TypeScript.CompletionInfo | undefined>(
    info: T,
  ): T {
    if (info == null) return info

    return {
      ...info,
      entries: info.entries.flatMap((entry) => {
        if (entry.name.startsWith('__VueDX_')) return [] // exclude internals

        return [entry]
      }),
    }
  }

  public processCompletionEntryDetails(
    entryDetails: TypeScript.CompletionEntryDetails | undefined,
  ): TypeScript.CompletionEntryDetails | undefined {
    if (entryDetails == null) return entryDetails

    return {
      ...entryDetails,
      codeActions: entryDetails.codeActions?.flatMap((action) => {
        const changes = this.fs.resolveAllFileTextChanges(action.changes)
        if (changes.length === 0) return []
        return { ...action, changes }
      }),
    }
  }
}

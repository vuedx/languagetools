import { inject, injectable } from 'inversify'
import type Typescript from 'typescript/lib/tsserverlibrary'
import { FilesystemService } from '../services/FilesystemService'
import { TypescriptService } from '../services/TypescriptService'

@injectable()
export class CompletionsService {
  constructor(
    @inject(TypescriptService)
    private readonly ts: TypescriptService,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
  ) {}

  public getCompletionsAtPosition(
    fileName: string,
    position: number,
    options: Typescript.GetCompletionsAtPositionOptions | undefined,
  ): Typescript.WithMetadata<Typescript.CompletionInfo> | undefined {
    const service = this.ts.getServiceFor(fileName)
    if (service == null) return
    if (this.fs.isVueFile(fileName)) {
      const vueFile = this.fs.getVueFile(fileName)
      if (vueFile == null) return
      const blockFile = vueFile.getDocAt(position)
      if (blockFile == null) return

      // TODO: Find AST node for position when in <template> block.
      if (blockFile.tsFileName != null) {
        const offset = blockFile.generatedOffetAt(position)

        if (blockFile.block.type === 'template') {
          options = {
            ...options,
            allowTextChangesInNewFiles: false,
            disableSuggestions: true,
            includeAutomaticOptionalChainCompletions: true,
            includeCompletionsForImportStatements: false, // TODO: Support auto-import in vue files
            includePackageJsonAutoImports: 'off',
          }
        }

        const completionInfo = service.getCompletionsAtPosition(
          blockFile.tsFileName,
          offset,
          options,
        )

        if (completionInfo != null) {
          const { entries, ...others } = completionInfo
          console.error(`[VueDX] Completions: ${JSON.stringify(others)}`)
          if (options == null || options.triggerCharacter === ' ') {
            if (blockFile.tsCompletionsOffset != null) {
              const result = service.getCompletionsAtPosition(
                blockFile.fileName,
                blockFile.tsCompletionsOffset,
                options,
              )
              if (result != null) {
                completionInfo.entries.push(...result.entries)
              }
            }
          } else if (
            options?.triggerCharacter === '<' &&
            blockFile.tsxCompletionsOffset != null
          ) {
            const result = service.getCompletionsAtPosition(
              blockFile.fileName,
              blockFile.tsxCompletionsOffset,
              options,
            )
            if (result != null) {
              completionInfo.entries.push(...result.entries)
            }
          }
        }

        return completionInfo
      }

      return undefined
    } else {
      return service.getCompletionsAtPosition(fileName, position, options)
    }
  }
}

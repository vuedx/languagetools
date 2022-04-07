import { debug } from '@vuedx/shared'
import { inject, injectable } from 'inversify'
import type { TSLanguageService, TypeScript } from '../contracts/TypeScript'
import { FilesystemService } from '../services/FilesystemService'
import { LoggerService } from '../services/LoggerService'
import { TypescriptContextService } from '../services/TypescriptContextService'

@injectable()
export class CodeFixService
  implements
    Pick<TSLanguageService, 'getCodeFixesAtPosition' | 'getCombinedCodeFix'> {
  private readonly logger = LoggerService.getLogger(CodeFixService.name)

  constructor(
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
  ) {}

  @debug()
  public getCodeFixesAtPosition(
    fileName: string,
    start: number,
    end: number,
    errorCodes: readonly number[],
    formatOptions: TypeScript.FormatCodeSettings,
    preferences: TypeScript.UserPreferences,
  ): readonly TypeScript.CodeFixAction[] {
    if (this.fs.isVueSchemeFile(fileName)) {
      return [] // scheme files are read-only
    }

    return this.#resolveCodeFixActions(
      this.fs.isVueFile(fileName)
        ? this.#getVueCodeFixesAtPosition(
            fileName,
            start,
            end,
            errorCodes,
            formatOptions,
            preferences,
          )
        : this.ts.service.getCodeFixesAtPosition(
            fileName,
            start,
            end,
            errorCodes,
            formatOptions,
            preferences,
          ),
    )
  }

  #getVueCodeFixesAtPosition(
    fileName: string,
    start: number,
    end: number,
    errorCodes: readonly number[],
    formatOptions: TypeScript.FormatCodeSettings,
    preferences: TypeScript.UserPreferences,
  ): readonly TypeScript.CodeFixAction[] {
    const [file, block] = this.fs.findFilesAt(fileName, start)
    if (
      file == null ||
      block == null ||
      block.generated == null ||
      block.tsFileName == null
    ) {
      return []
    }

    if (end > block.block.loc.end.offset) {
      this.logger.debug('end is greater than block end')
      return []
    }

    return this.ts.service.getCodeFixesAtPosition(
      block.tsFileName,
      block.toBlockOffset(start),
      block.toBlockOffset(end),
      errorCodes,
      formatOptions,
      preferences,
    )
  }

  #resolveCodeFixActions(
    fixes: readonly TypeScript.CodeFixAction[],
  ): TypeScript.CodeFixAction[] {
    return fixes.map((fix) => ({
      ...fix,
      changes: this.fs.resolveAllFileTextChanges(fix.changes),
    }))
  }

  @debug()
  public getCombinedCodeFix(
    scope: TypeScript.CombinedCodeFixScope,
    fixId: {},
    formatOptions: TypeScript.FormatCodeSettings,
    preferences: TypeScript.UserPreferences,
  ): TypeScript.CombinedCodeActions {
    if (this.fs.isVueSchemeFile(scope.fileName)) {
      return { changes: [] } // scheme files are read-only
    }

    const result = this.fs.isVueFile(scope.fileName)
      ? this.#getVueCombinedCodeFix(scope, fixId, formatOptions, preferences)
      : this.ts.service.getCombinedCodeFix(
          scope,
          fixId,
          formatOptions,
          preferences,
        )

    return {
      commands: result.commands,
      changes: this.fs.resolveAllFileTextChanges(result.changes),
    }
  }

  #getVueCombinedCodeFix(
    scope: TypeScript.CombinedCodeFixScope,
    fixId: {},
    formatOptions: TypeScript.FormatCodeSettings,
    preferences: TypeScript.UserPreferences,
  ): TypeScript.CombinedCodeActions {
    const file = this.fs.getVueFile(scope.fileName)
    if (file == null) return { changes: [] }

    return Array.from(file.getActiveTSDocIDs()).reduce<
      TypeScript.CombinedCodeActions
    >(
      (all, fileName) => {
        const result = this.ts.service.getCombinedCodeFix(
          { type: 'file', fileName },
          fixId,
          formatOptions,
          preferences,
        )

        return {
          changes: [...all.changes, ...result.changes],
          commands: [...(all.commands ?? []), ...(result.commands ?? [])],
        }
      },
      { changes: [], commands: [] },
    )
  }
}

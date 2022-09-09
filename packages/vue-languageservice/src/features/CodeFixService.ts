import { debug } from '@vuedx/shared'
import { inject, injectable } from 'inversify'
import type { TSLanguageService, TypeScript } from '../contracts/TypeScript'
import { FilesystemService } from '../services/FilesystemService'
import { TypescriptContextService } from '../services/TypescriptContextService'

@injectable()
export class CodeFixService
  implements
    Pick<TSLanguageService, 'getCodeFixesAtPosition' | 'getCombinedCodeFix'>
{
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
    const block = this.fs.getVueFile(fileName)
    if (block == null) return []

    const genreatedStart = block.generatedOffsetAt(start)
    const generatedEnd = block.generatedOffsetAt(end)
    if (genreatedStart == null || generatedEnd == null) return []

    return this.ts.service.getCodeFixesAtPosition(
      block.geneartedFileName,
      genreatedStart,
      generatedEnd,
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

    return this.ts.service.getCombinedCodeFix(
      { type: 'file', fileName: file.geneartedFileName },
      fixId,
      formatOptions,
      preferences,
    )
  }
}

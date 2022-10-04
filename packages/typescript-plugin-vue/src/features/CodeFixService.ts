import { VueSFCDocument } from '@vuedx/vue-virtual-textdocument'
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

  public getCodeFixesAtPosition(
    fileName: string,
    start: number,
    end: number,
    errorCodes: readonly number[],
    formatOptions: TypeScript.FormatCodeSettings,
    preferences: TypeScript.UserPreferences,
  ): readonly TypeScript.CodeFixAction[] {
    return (
      this.pick(fileName, start, {
        script: (file) => {
          const span = file.findGeneratedTextSpan({
            start,
            length: end - start,
          })
          if (span == null) return []

          return this.processCodeFixActions(
            this.ts.service.getCodeFixesAtPosition(
              file.generatedFileName,
              span.start,
              span.start + span.length,
              errorCodes,
              formatOptions,
              preferences,
            ),
          )
        },
      }) ?? []
    )
  }

  public getCombinedCodeFix(
    scope: TypeScript.CombinedCodeFixScope,
    fixId: {},
    formatOptions: TypeScript.FormatCodeSettings,
    preferences: TypeScript.UserPreferences,
  ): TypeScript.CombinedCodeActions {
    const file = this.fs.getVueFile(scope.fileName)
    if (file == null) return { changes: [], commands: [] }

    const result = this.ts.service.getCombinedCodeFix(
      { ...scope, fileName: file.generatedFileName },
      fixId,
      formatOptions,
      preferences,
    )

    return {
      ...result,
      changes: this.fs.resolveAllFileTextChanges(result.changes),
    }
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

  public processCodeFixActions(
    fixes: readonly TypeScript.CodeFixAction[],
  ): TypeScript.CodeFixAction[] {
    return fixes.map((fix) => ({
      ...fix,
      changes: this.fs.resolveAllFileTextChanges(fix.changes),
    }))
  }
}

import { inject, injectable } from 'inversify'
import type { TSLanguageService, TypeScript } from '../contracts/TypeScript'
import { FilesystemService } from '../services/FilesystemService'
import { TypescriptContextService } from '../services/TypescriptContextService'

@injectable()
export class RefactorService
  implements Pick<TSLanguageService, 'organizeImports'>
{
  constructor(
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
  ) {}

  public organizeImports(
    args: TypeScript.OrganizeImportsArgs,
    formatOptions: TypeScript.FormatCodeSettings,
    preferences: TypeScript.UserPreferences | undefined,
  ): readonly TypeScript.FileTextChanges[] {
    const file = this.fs.getVueFile(args.fileName)
    if (file == null) return []

    return this.fs.resolveAllFileTextChanges(
      this.ts.service.organizeImports(
        { ...args, fileName: file.generatedFileName },
        formatOptions,
        preferences,
      ),
    )
  }
}

import { inject, injectable } from 'inversify'
import type { TSLanguageService, TypeScript } from '../contracts/TypeScript'
import { TypescriptContextService } from '../services/TypescriptContextService'

@injectable()
export class RefactorService
  implements Pick<TSLanguageService, 'organizeImports'>
{
  constructor(
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
  ) {}

  public organizeImports(
    args: TypeScript.OrganizeImportsArgs,
    formatOptions: TypeScript.FormatCodeSettings,
    preferences: TypeScript.UserPreferences | undefined,
  ): readonly TypeScript.FileTextChanges[] {
    return this.ts.service.organizeImports(args, formatOptions, preferences)
  }
}

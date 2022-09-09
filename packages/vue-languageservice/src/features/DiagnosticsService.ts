import { inject, injectable } from 'inversify'
import type Typescript from 'typescript/lib/tsserverlibrary'
import type { TSLanguageService } from '../contracts/TypeScript'
import { FilesystemService } from '../services/FilesystemService'
import { TypescriptContextService } from '../services/TypescriptContextService'

@injectable()
export class DiagnosticsService
  implements
    Pick<
      TSLanguageService,
      | 'getSemanticDiagnostics'
      | 'getSyntacticDiagnostics'
      | 'getSuggestionDiagnostics'
    >
{
  constructor(
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
  ) {}

  public getCompilerOptionsDiagnostics(): Typescript.Diagnostic[] {
    return this.ts.service.getCompilerOptionsDiagnostics()
  }

  public getSemanticDiagnostics(fileName: string): Typescript.Diagnostic[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.getSemanticDiagnostics(fileName)
  }

  public getSyntacticDiagnostics(
    fileName: string,
  ): Typescript.DiagnosticWithLocation[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.getSyntacticDiagnostics(fileName)
  }

  public getSuggestionDiagnostics(
    fileName: string,
  ): Typescript.DiagnosticWithLocation[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.getSuggestionDiagnostics(fileName)
  }
}

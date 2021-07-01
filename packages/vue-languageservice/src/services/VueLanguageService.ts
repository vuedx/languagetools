import { inject, injectable } from 'inversify'
import type { Diagnostic } from 'vscode-languageserver-types'
import type { LanguageService } from '../contracts/LanguageService'
import { DiagnosticsService } from '../features/DiagnosticsService'

@injectable()
export class VueLanguageService implements LanguageService {
  constructor(
    @inject(DiagnosticsService)
    private readonly diagnostics: DiagnosticsService,
  ) {}

  public getDiagnositcs(fileName: string): Diagnostic[] {
    return this.diagnostics.getDiagnostics(fileName)
  }
}

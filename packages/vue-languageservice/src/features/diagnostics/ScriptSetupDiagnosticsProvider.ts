import { inject, injectable } from 'inversify'
import type { Diagnostic } from 'vscode-languageserver-types'
import { CacheService } from '../../services/CacheService'
import { FilesystemService } from '../../services/FilesystemService'
import { TypescriptContextService } from '../../services/TypescriptContextService'

const enum SetupCodes {
  EXPORT_DEFAULT_NOT_ALLOWED = 1000,
  EXPORT_NOT_ALLOWED,
}

const messages = {
  [SetupCodes.EXPORT_DEFAULT_NOT_ALLOWED]:
    'A <script setup> block cannot have default exports.',
  [SetupCodes.EXPORT_NOT_ALLOWED]:
    'A <script setup> block cannot have exports.',
} as const

@injectable()
export class ScriptSetupDiagnosticsProvider {
  private readonly cache = new CacheService<Diagnostic[]>(
    (fileName) => `${this.fs.getVueFile(fileName)?.version ?? '0'}`,
  )

  constructor(
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
  ) {}

  public getDiagnostics(fileName: string): Diagnostic[] {
    return this.cache.withCache(fileName, (prevDiagnostics) => {
      if (prevDiagnostics != null) return prevDiagnostics
      const diagnostics: Diagnostic[] = []
      const sourceFile = this.ts.getSourceFile(fileName)
      if (sourceFile != null) {
        const lib = this.ts.lib
        sourceFile.statements.forEach((statement) => {
          if (lib.isTypeAliasDeclaration(statement)) return
          if (lib.isExportAssignment(statement)) {
            diagnostics.push({
              message: messages[SetupCodes.EXPORT_DEFAULT_NOT_ALLOWED],
              range: {
                start: sourceFile.getLineAndCharacterOfPosition(
                  statement.getStart(),
                ),
                end: sourceFile.getLineAndCharacterOfPosition(
                  statement.getEnd(),
                ),
              },
              code: SetupCodes.EXPORT_DEFAULT_NOT_ALLOWED,
              severity: 1, // Error
              source: 'Script Setup API',
            })
          }

          if (lib.isExportDeclaration(statement)) {
            if (statement.isTypeOnly) return

            diagnostics.push({
              message: messages[SetupCodes.EXPORT_NOT_ALLOWED],
              range: {
                start: sourceFile.getLineAndCharacterOfPosition(
                  statement.getStart(),
                ),
                end: sourceFile.getLineAndCharacterOfPosition(
                  statement.getEnd(),
                ),
              },
              code: SetupCodes.EXPORT_NOT_ALLOWED,
              severity: 1, // Error
              source: 'Script Setup API',
            })
          }

          if (
            statement.modifiers?.some(
              (modifier) => modifier.kind === lib.SyntaxKind.ExportKeyword,
            ) === true
          ) {
            if (
              lib.isTypeAliasDeclaration(statement) ||
              lib.isInterfaceDeclaration(statement)
            ) {
              return
            }

            diagnostics.push({
              message: messages[SetupCodes.EXPORT_NOT_ALLOWED],
              range: {
                start: sourceFile.getLineAndCharacterOfPosition(
                  statement.getStart(),
                ),
                end: sourceFile.getLineAndCharacterOfPosition(
                  statement.getEnd(),
                ),
              },
              code: SetupCodes.EXPORT_NOT_ALLOWED,
              severity: 1, // Error
              source: 'Script Setup API',
            })
          }
        })
      }

      return diagnostics
    })
  }
}

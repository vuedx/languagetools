import { inject, injectable } from 'inversify'

import type { TSLanguageService, TypeScript } from '../contracts/TypeScript'
import { FilesystemService } from '../services/FilesystemService'
import { LoggerService } from '../services/LoggerService'
import { TemplateDeclarationsService } from '../services/TemplateDeclarationsService'
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
  public readonly logger = new LoggerService(DiagnosticsService.name)

  constructor(
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
    @inject(TemplateDeclarationsService)
    private readonly declarations: TemplateDeclarationsService,
  ) {}

  public getCompilerOptionsDiagnostics(): TypeScript.Diagnostic[] {
    return this.ts.service.getCompilerOptionsDiagnostics()
  }

  public getSemanticDiagnostics(fileName: string): TypeScript.Diagnostic[] {
    return this.run(fileName, (fileName) =>
      this.ts.service.getSemanticDiagnostics(fileName),
    )
  }

  public getSyntacticDiagnostics(
    fileName: string,
  ): TypeScript.DiagnosticWithLocation[] {
    return this.run(fileName, (fileName) =>
      this.ts.service.getSyntacticDiagnostics(fileName),
    )
  }

  public getSuggestionDiagnostics(
    fileName: string,
  ): TypeScript.DiagnosticWithLocation[] {
    return this.run(fileName, (fileName) =>
      this.ts.service.getSuggestionDiagnostics(fileName),
    )
  }

  public getVueCompilerDiagnostic(
    fileName: string,
  ): TypeScript.DiagnosticWithLocation[] {
    const file = this.fs.getVueFile(fileName)
    if (file == null) return []
    const diagnostics: TypeScript.DiagnosticWithLocation[] = []

    const category = this.ts.lib.DiagnosticCategory.Error
    const fakeSourceFile =
      file.getSourceFile() as unknown as TypeScript.SourceFile
    const syntax: SyntaxError[] = []
    for (const error of file.errors) {
      if ('loc' in error && error.loc != null) {
        this.logger.error('Vue Compiler Error', error.message, error.loc)
        diagnostics.push({
          category,
          code: Number(error.code),
          file: fakeSourceFile,
          start: error.loc.start.offset,
          length: error.loc.end.offset - error.loc.start.offset,
          messageText: error.message,
          source: 'VueDX/Compiler',
        })
      } else {
        syntax.push(error)
      }
    }

    if (syntax.length > 0) {
      diagnostics.push({
        category,
        code: 0,
        file: fakeSourceFile,
        start: 0,
        length: 1,
        messageText: 'Vue Compiler Syntax Error',
        source: 'VueDX/Compiler',
        relatedInformation: syntax.map((error) => ({
          category,
          code: 0,
          messageText: error.message,
          file: fakeSourceFile,
          start: 0,
          length: 1,
        })),
      })
    }

    const setupVariables = new Map(
      this.declarations
        .getTemplateDeclaration(file.originalFileName)
        .declarations.filter((declaration) => declaration.kind === 'setup')
        .map((declaration) => [declaration.id, declaration]),
    )

    file.snapshot.unusedIdentifiers.forEach((identifier) => {
      const declaration = setupVariables.get(identifier)
      if (declaration == null) return
      if (declaration.references.length > 0) return
      const span = file.findOriginalTextSpan(declaration.initializer)
      if (span == null) return
      const diagnostic: TypeScript.DiagnosticWithLocation = {
        category: this.ts.lib.DiagnosticCategory.Suggestion,
        code: 6133,
        source: 'VueDX/Compiler',
        file: fakeSourceFile,
        ...span,
        messageText: `'${declaration.id}' is declared but its value is never read.`, // TODO: localize.
        reportsUnnecessary: true,
      }
      diagnostics.push(diagnostic)
    })

    diagnostics.push(
      ...this.declarations
        .getUndefinedGlobals(fileName)
        .flatMap((declaration) =>
          declaration.references.flatMap(
            (reference): TypeScript.DiagnosticWithLocation[] => {
              const span = file.findOriginalTextSpan(reference)
              if (span == null) return []
              return [
                {
                  category: this.ts.lib.DiagnosticCategory.Error,
                  code: 2322,
                  source: 'VueDX/Compiler',
                  file: fakeSourceFile,
                  ...span,
                  messageText: `Cannot find name '${declaration.id}'.`,
                },
              ]
            },
          ),
        ),
    )

    return diagnostics
  }

  private run<
    T extends TypeScript.Diagnostic | TypeScript.DiagnosticWithLocation,
  >(fileName: string, fn: (fileName: string) => T[]): T[] {
    const file = this.fs.getVueFile(fileName)
    if (file == null) return []

    return fn(file.generatedFileName).flatMap((diagnostic) =>
      this.processDiagnostic(diagnostic),
    )
  }

  /**
   * Replace generated .vue.tsx/.vue.jsx file name to original .vue file.
   * @returns list of diagnostics
   */
  public processDiagnosticRelatedInformation(
    info: TypeScript.DiagnosticRelatedInformation,
  ): TypeScript.DiagnosticRelatedInformation[] {
    if (info.file == null || info.start == null) return [info]
    else if (this.fs.isGeneratedVueFile(info.file.fileName)) {
      const file = this.fs.getVueFile(info.file.fileName)
      if (file == null) return []

      const span = file.findOriginalTextSpan({
        start: info.start,
        length: info.length ?? 1,
      })

      if (span == null) return []

      return [
        {
          ...info,
          ...span,
          file: file.getSourceFile() as unknown as TypeScript.SourceFile,
        },
      ]
    } else {
      return [info]
    }
  }

  /**
   * Replace generated .vue.tsx/.vue.jsx file with original .vue file.
   * @returns list of diagnostics
   */
  public processDiagnostic<
    T extends TypeScript.Diagnostic | TypeScript.DiagnosticWithLocation,
  >(diagnostic: T): T[] {
    if (diagnostic.file == null) return [diagnostic]
    if (this.fs.isGeneratedVueFile(diagnostic.file.fileName)) {
      const file = this.fs.getVueFile(diagnostic.file.fileName)
      if (file == null) return []
      const base: T = {
        ...diagnostic,
        relatedInformation: diagnostic.relatedInformation?.flatMap((info) =>
          this.processDiagnosticRelatedInformation(info),
        ),
        file: file.getSourceFile() as unknown as TypeScript.SourceFile,
      }

      if (diagnostic.start != null) {
        const position = file.generated.positionAt(diagnostic.start)
        const declaration = this.declarations
          .getTemplateDeclaration(file.originalFileName)
          .byLine.get(position.line)

        if (declaration != null) {
          if (declaration.kind === 'setup') {
            const span = file.findOriginalTextSpan(declaration.initializer)
            if (span == null) return []

            return [{ ...base, ...span }]
          } else {
            return declaration.references.flatMap((reference) => {
              const span = file.findOriginalTextSpan({
                start: reference.start,
                length: reference.length,
              })

              if (span == null) return []
              return [{ ...base, ...span }]
            })
          }
        } else {
          const span = file.findOriginalTextSpan({
            start: diagnostic.start,
            length: diagnostic.length ?? 1,
          })

          this.logger.debug('@@@ Debug Directive', span, position, diagnostic)

          if (span == null) return []
          return [{ ...base, ...span }]
        }
      }

      return [base]
    }
    return [diagnostic]
  }
}

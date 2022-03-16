/* eslint-disable spaced-comment */
import type { MarkupContent } from 'vscode-languageserver-types'
import type { Disposable } from '../contracts/Disposable'
import type { LanguageService } from '../contracts/LanguageService'

export class AggregateLanguageService implements LanguageService, Disposable {
  private readonly services: LanguageService[]

  constructor(service: LanguageService, ...services: LanguageService[]) {
    this.services = [service, ...services]
  }

  public register(service: LanguageService): void {
    this.services.push(service)
  }

  public dispose(): void {
    this._each((service) => service.dispose())
  }

  //#region LanguageService

  public getDiagnostics(fileName: string): LanguageService.Diagnostic[] {
    return this._map((service) => service.getDiagnostics(fileName)).flat()
  }

  public getDefinitionAt(
    fileName: string,
    position: LanguageService.Position,
  ): LanguageService.Definition[] {
    return this._map((service) =>
      service.getDefinitionAt(fileName, position),
    ).flat()
  }

  public getTypeDefinitionAt(
    fileName: string,
    position: LanguageService.Position,
  ): LanguageService.Definition[] {
    return this._map(
      (service) => service.getTypeDefinitionAt?.(fileName, position) ?? [],
    ).flat()
  }

  public getQuickInfoAtPosition(
    fileName: string,
    position: LanguageService.Position,
  ): LanguageService.QuickInfo | null {
    return this._reduce((aggregated, service) => {
      const result = service.getQuickInfoAtPosition(fileName, position)
      if (result == null) return aggregated
      if (aggregated == null) return result

      return {
        contents: mergeMarkupContent(
          aggregated.contents as MarkupContent,
          result.contents as MarkupContent,
        ),
        range: mergeRange(aggregated.range, result.range),
      }
    })
  }

  //#endregion

  private _each(fn: (service: LanguageService) => void): void {
    return this.services.forEach(fn)
  }

  private _map<R>(fn: (service: LanguageService) => R): R[] {
    return this.services.map(fn)
  }

  private _reduce<R>(
    fn: (reduced: R | null, service: LanguageService) => R | null,
  ): R | null {
    return this.services.reduce(fn, null)
  }
}

function mergeMarkupContent(a: MarkupContent, b: MarkupContent): MarkupContent {
  if (a.kind === b.kind) {
    return { kind: a.kind, value: [a.value, b.value].join('\n') }
  }

  return { kind: 'markdown', value: [a.value, b.value].join('\n') }
}

function mergeRange(
  a?: LanguageService.Range,
  b?: LanguageService.Range,
): LanguageService.Range | undefined {
  if (a == null) return b
  if (b == null) return a

  return {
    start: {
      line: Math.min(a.start.line, b.start.line),
      character: Math.min(a.start.character, b.start.character),
    },
    end: {
      line: Math.min(a.end.line, b.end.line),
      character: Math.min(a.end.character, b.end.character),
    },
  }
}

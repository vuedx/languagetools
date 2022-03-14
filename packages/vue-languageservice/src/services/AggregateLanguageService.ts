/* eslint-disable spaced-comment */
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
    return this._map((service) =>
      service.getTypeDefinitionAt(fileName, position),
    ).flat()
  }

  //#endregion

  private _each(fn: (service: LanguageService) => void): void {
    return this.services.forEach(fn)
  }

  private _map<R>(fn: (service: LanguageService) => R): R[] {
    return this.services.map(fn)
  }
}

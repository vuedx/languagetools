import { inject, injectable } from 'inversify'
import type { Disposable } from '../contracts/Disposable'
import type { LanguageService } from '../contracts/LanguageService'
import { AggregateLanguageService } from './AggregateLanguageService'
import { FilesystemService } from './FilesystemService'

/**
 * Provide embedded language services.
 */
@injectable()
export class LanguageServiceProvider implements Disposable {
  private readonly services = new Map<string, AggregateLanguageService>()

  constructor(
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
  ) {}

  public getLanguageService(fileName: string): LanguageService | null {
    return this.services.get(this.fs.getLaguageId(fileName)) ?? null
  }

  public registerLanguageService(
    language: string,
    service: LanguageService,
  ): void {
    const current = this.services.get(language)
    if (current == null) {
      this.services.set(language, new AggregateLanguageService(service))
    } else {
      current.register(service)
    }
  }

  dispose(): void {}
}

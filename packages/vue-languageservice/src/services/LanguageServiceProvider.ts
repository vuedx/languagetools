import { inject, injectable } from 'inversify'
import type { Disposable } from '../contracts/Disposable'
import type { LanguageService } from '../contracts/LanguageService'
import { FilesystemService } from './FilesystemService'

/**
 * Provide embedded language services.
 */
@injectable()
export class LanguageServiceProvider implements Disposable {
  private readonly services: Record<string, LanguageService> = {}

  constructor(
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
  ) {}

  public getLanguageService(fileName: string): LanguageService | null {
    const language = this.fs.getLaguageId(fileName)

    return this.services[language] ?? null
  }

  public registerLanguageService(
    language: string,
    service: LanguageService,
  ): void {
    this.services[language] = service // TODO: Handle duplicate language services by combining them.
  }

  dispose(): void {}
}

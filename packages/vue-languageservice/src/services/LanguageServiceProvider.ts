import { inject, injectable } from 'inversify'
import type { Disposable } from '../contracts/Disposable'
import type { LanguageService } from '../contracts/LanguageService'
import { AggregateLanguageService } from './AggregateLanguageService'
import { FilesystemService } from './FilesystemService'
import { LoggerService } from './LoggerService'

/**
 * Provide embedded language services.
 */
@injectable()
export class LanguageServiceProvider implements Disposable {
  private readonly logger = LoggerService.getLogger('languages')
  private readonly services = new Map<string, AggregateLanguageService>()

  constructor(
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
  ) {}

  public getLanguageService(fileName: string): LanguageService | null {
    const language = fileName.includes('.')
      ? this.fs.getLanguageId(fileName)
      : fileName

    const service = this.services.get(language)
    if (service == null) {
      this.logger.debug(
        `No language service for ${language}. Supported: ${JSON.stringify(
          Array.from(this.services.keys()),
        )}`,
      )
      return null
    }

    return service
  }

  public registerLanguageService(
    language: string,
    service: LanguageService,
  ): void {
    this.logger.debug(`Registering language service for ${language}`)
    const current = this.services.get(language)
    if (current == null) {
      this.services.set(language, new AggregateLanguageService(service))
    } else {
      current.register(service)
    }
  }

  dispose(): void {}
}

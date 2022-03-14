import { inject, injectable } from 'inversify'
import { LoggerService } from '../services/LoggerService'
import { TypescriptContextService } from '../services/TypescriptContextService'

@injectable()
export class NavigationService {
  private readonly logger = LoggerService.getLogger('Navigation')

  constructor(
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
  ) {
    this.logger.debug('init', this.ts)
  }
}

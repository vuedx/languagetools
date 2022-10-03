import { injectable } from 'inversify'
import { LoggerService } from '../services/LoggerService'

@injectable()
export class HighlightsService {
  private readonly logger = LoggerService.getLogger('Highlights')

  constructor() {
    this.logger.debug('To implement')
  }
}

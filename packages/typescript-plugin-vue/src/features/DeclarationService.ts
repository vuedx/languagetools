import { injectable } from 'inversify'
import { LoggerService } from '../services/LoggerService'

@injectable()
export class DeclarationService {
  private readonly logger = LoggerService.getLogger('Declaration')

  constructor() {
    this.logger.debug('To implement')
  }
}

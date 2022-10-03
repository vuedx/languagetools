import { injectable } from 'inversify'
import { LoggerService } from '../services/LoggerService'

@injectable()
export class EmitService {
  private readonly logger = LoggerService.getLogger('Emit')

  constructor() {
    this.logger.debug('To implement')
  }
}

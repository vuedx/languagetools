import { injectable } from 'inversify'
import { LoggerService } from '../services/LoggerService'

@injectable()
export class CommentsService {
  private readonly logger = LoggerService.getLogger('Comments')

  constructor() {
    this.logger.debug('To implement')
  }
}

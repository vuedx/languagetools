import { injectable } from 'inversify'
import { LoggerService } from '../services/LoggerService'

@injectable()
export class CallHierarchyService {
  private readonly logger = LoggerService.getLogger('CallHierarchy')

  constructor() {
    this.logger.debug('To implement')
  }
}

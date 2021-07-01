import { inject, injectable } from 'inversify'
import { INJECTABLE_TS_PROJECT } from '../constants'
import type { TSProject } from '../contracts/Typescript'
import * as util from 'util'

@injectable()
export class LoggerService {
  constructor(
    @inject(INJECTABLE_TS_PROJECT)
    private readonly project: TSProject, // TODO
  ) {}

  private write(message: string): void {
    this.project.projectService.logger.info(`[VueDX] ${message}`)
  }

  public info(message: string, ...args: any[]): void {
    this.write(
      util.formatWithOptions(
        { breakLength: Infinity, colors: false },
        message,
        ...args,
      ),
    )
  }
}

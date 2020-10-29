import { injectable } from 'inversify'

@injectable()
export abstract class Installable {
  private isInstalled = false

  install() {
    if (this.isInstalled) throw new Error('Service already installed.')
  }
}

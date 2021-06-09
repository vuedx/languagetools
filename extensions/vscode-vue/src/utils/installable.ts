import { injectable } from 'inversify'

@injectable()
export class Installable {
  private isInstalled = false

  install(): void {
    if (this.isInstalled) throw new Error('Service already installed.')
    this.isInstalled = true
  }
}

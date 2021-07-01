import { Container } from 'inversify'

export const container = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
  skipBaseClassChecks: true,
})

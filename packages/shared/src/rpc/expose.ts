import type { Endpoint } from './channel'
import { createExposed } from './handlers'

export function expose<T extends object>(target: T, endpoint: Endpoint): void {
  createExposed(target, endpoint)
}

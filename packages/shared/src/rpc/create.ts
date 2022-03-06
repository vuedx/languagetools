import type { Endpoint } from './channel'
import type { Remote } from './types'
import { createEndpointProxy } from './handlers'

export function create<T>(endpoint: Endpoint): Remote<T> {
  return createEndpointProxy(endpoint, [])
}

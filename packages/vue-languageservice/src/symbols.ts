import { ClientCapabilities } from 'vscode-languageserver-protocol'

export type InjectKey<T> = symbol & { __type: T }
export type Injected<T extends InjectKey<any>> = T['__type']
export const CLIENT_CAPABILITIES = Symbol(
  'CLIENT_CAPABILITIES',
) as InjectKey<ClientCapabilities>

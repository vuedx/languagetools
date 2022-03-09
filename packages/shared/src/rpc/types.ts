import type { ExposedObject } from './handlers'

const release = Symbol('release')

export const Symbols = { release } as const

interface RemoteObjectAPI {
  [Symbols.release](): Promise<void>
}

// Convert properties and methods to promise (and inverse operation)
type Promisify<T> = T extends Promise<unknown> ? T : Promise<T>
type Unpromisify<T> = T extends Promise<infer P> ? P : T

type RemoteProperty<T> = T extends Function | ExposedObject<unknown>
  ? Remote<T>
  : Promisify<T>
type LocalProperty<T> = T extends Function | ExposedObject<unknown>
  ? Local<T>
  : Unpromisify<T>

type RemoteObject<T> = { [P in keyof T]: RemoteProperty<T[P]> }
type LocalObject<T> = { [P in keyof T]: LocalProperty<T[P]> }

type ProxyOrClone<T> = T extends ExposedObject<unknown> ? Remote<T> : T
type UnproxyOrClone<T> = T extends RemoteObject<ExposedObject<unknown>>
  ? Local<T>
  : T

export type Remote<T> =
  // Handle properties
  RemoteObject<T> &
    // Handle call signature (if present)
    (T extends (...args: infer TArguments) => infer TReturn
      ? (
          ...args: { [I in keyof TArguments]: UnproxyOrClone<TArguments[I]> }
        ) => Promisify<ProxyOrClone<Unpromisify<TReturn>>>
      : unknown) &
    // Handle construct signature (if present)
    // The return of construct signatures is always proxied (whether marked or not)
    (T extends new (...args: infer TArguments) => infer TInstance
      ? new (
          ...args: {
            [I in keyof TArguments]: UnproxyOrClone<TArguments[I]>
          }
        ) => Promisify<Remote<TInstance>>
      : unknown) &
    // Include additional special comlink methods available on the proxy.
    RemoteObjectAPI

export type Local<T> =
  // Omit the special proxy methods (they don't need to be supplied, comlink adds them)
  Omit<LocalObject<T>, keyof RemoteObjectAPI> &
    // Handle call signatures (if present)
    (T extends (...args: infer TArguments) => infer TReturn
      ? (
          ...args: { [I in keyof TArguments]: ProxyOrClone<TArguments[I]> }
        ) => // The raw function could either be sync or async, but is always proxied automatically
        MaybePromise<UnproxyOrClone<Unpromisify<TReturn>>>
      : unknown) &
    // Handle construct signature (if present)
    // The return of construct signatures is always proxied (whether marked or not)
    (T extends new (...args: infer TArguments) => infer TInstance
      ? new (
          ...args: {
            [I in keyof TArguments]: ProxyOrClone<TArguments[I]>
          }
        ) => // The raw constructor could either be sync or async, but is always proxied automatically
        MaybePromise<Local<Unpromisify<TInstance>>>
      : unknown)

/**
 * Expresses that a type can be either a sync or async.
 */
type MaybePromise<T> = Promise<T> | T

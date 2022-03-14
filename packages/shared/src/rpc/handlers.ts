import { isObject } from '../object'
import { DisposableScope } from '../reactivity'
import { generateUUID } from '../string'
import type { Endpoint } from './channel'
import { Message, MessageType, ReturnMessage } from './message'
import type { Remote } from './types'
import { Symbols as PublicSymbols } from './types'
import { Value, ValueType } from './value'

export interface Handler {
  canHandle(value: unknown): boolean
  serialize(value: unknown): unknown
  deserialize(value: unknown): unknown
}

const EXPOSED = Symbol('RPC.exposed')
const THROWN = Symbol('RPC.thrown')

const Symbols = {
  exposed: EXPOSED,
  thrown: THROWN,
} as const

function isObjectOrFunction(value: unknown): value is object {
  return isObject(value) || typeof value === 'function'
}

interface Throwable {
  value: unknown
  [Symbols.thrown]: true
}

function isThrowable(value: unknown): value is Throwable {
  return isObjectOrFunction(value) && Symbols.thrown in value
}

function createThrowable(value: unknown): Throwable {
  return { value, [Symbols.thrown]: true }
}

type SerializedThrowable =
  | { isError: true; value: Error }
  | { isError: false; value: unknown }

const throwHandler: Handler = {
  canHandle(value) {
    return isThrowable(value)
  },
  serialize({ value }: Throwable): SerializedThrowable {
    return value instanceof Error
      ? {
          isError: true,
          value: {
            name: value.name,
            message: value.message,
            stack: value.stack,
          },
        }
      : { isError: false, value }
  },
  deserialize(serializedValue: SerializedThrowable) {
    if (serializedValue.isError) {
      throw Object.assign(
        new Error(serializedValue.value.message),
        serializedValue.value,
      )
    } else {
      throw serializedValue.value
    }
  },
}

export function isExposed<T>(obj: T): obj is ExposedObject<T> {
  return isObjectOrFunction(obj) && Symbols.exposed in obj
}

export type ExposedObject<T> = T & {
  [Symbols.exposed]: string
}

let currentEndpoint: Endpoint | null = null

export function withEndpoint<T>(endpoint: Endpoint, fn: () => T): T {
  try {
    currentEndpoint = endpoint
    return fn()
  } finally {
    currentEndpoint = null
  }
}

export function createExposed<T>(
  value: T,
  endpoint: Endpoint,
): ExposedObject<T> {
  const target = Object.assign(value, {
    [Symbols.exposed]: endpoint.id,
  }) as ExposedObject<T>

  const scope = new DisposableScope()
  scope.emitter(endpoint).on('message', async (event) => {
    const message = event.detail
    let returnValue: unknown
    try {
      switch (message.type) {
        case MessageType.get:
          returnValue = get(target, message.path)
          break
        case MessageType.set:
          {
            const { parent, property } = getParent(target, message.path)
            parent[property] = fromValue(endpoint, message.value)
            returnValue = true
          }
          break
        case MessageType.apply:
          {
            const { parent, property } = getParent(target, message.path)
            returnValue = parent[property].apply(
              parent,
              message.argumentList.map((arg) => fromValue(endpoint, arg)),
            )
          }
          break
        case MessageType.construct:
          {
            const Constructor = get(target, message.path) as new (
              ...args: unknown[]
            ) => unknown

            returnValue = createExposed(
              new Constructor(
                ...message.argumentList.map((arg) => fromValue(endpoint, arg)),
              ),
              endpoint.create(),
            )
          }
          break
      }
    } catch (error) {
      returnValue = createThrowable(error)
    }

    await Promise.resolve(returnValue)
      .catch((error) => createThrowable(error))
      .then((returnValue) => {
        endpoint.dispatchEvent('message', {
          id: message.id,
          type: MessageType.RETURN,
          value: toValue(endpoint, returnValue),
        })

        if (message.type === MessageType.RELEASE) {
          scope.dispose()
        }
      })
  })

  function get(target: any, path: string[]): unknown {
    return path.reduce((obj, prop) => obj[prop], target)
  }

  function getParent(
    target: any,
    path: string[],
  ): { parent: any; property: string } {
    if (path.length === 0) {
      return {
        parent: [target],
        property: '0',
      }
    }

    path = path.slice()
    const property = path.pop() as string
    return {
      parent: path.reduce((obj, prop) => obj[prop], target),
      property,
    }
  }

  return target
}

const endpoints = new Map<string, Remote<unknown>>()
const proxyHandler: Handler = {
  canHandle(value) {
    return isExposed(value)
  },
  serialize(value: ExposedObject<unknown>) {
    return value[Symbols.exposed]
  },
  deserialize(key: string) {
    if (!endpoints.has(key)) {
      if (currentEndpoint == null) {
        throw new Error(
          'Cannot deserialize proxy value without active endpoint',
        )
      }

      const endpoint = currentEndpoint.create(key)
      endpoint.addEventListener('closed', () => {
        endpoints.delete(key)
      })
      endpoints.set(key, createEndpointProxy(endpoint, []))
    }

    return endpoints.get(key)
  },
}

const callbackHandler: Handler = {
  canHandle(value) {
    return typeof value === 'function' && !isExposed(value)
  },
  serialize(value: (...args: unknown[]) => unknown) {
    if (currentEndpoint == null) {
      throw new Error('Cannot serialize function without active endpoint')
    }

    return proxyHandler.serialize(
      createExposed(value, currentEndpoint.create()),
    )
  },
  deserialize(key: string) {
    return proxyHandler.deserialize(key)
  },
}

export const Handlers = new Map([
  ['throw', throwHandler],
  ['proxy', proxyHandler],
  ['callback', callbackHandler],
])

export function toValue(endpoint: Endpoint, value: unknown): Value {
  return withEndpoint(endpoint, () => {
    for (const [name, handler] of Handlers.entries()) {
      if (handler.canHandle(value)) {
        return {
          type: ValueType.HANDLER,
          name: name,
          value: handler.serialize(value),
        }
      }
    }

    return {
      type: ValueType.RAW,
      value: value,
    }
  })
}

export function fromValue(endpoint: Endpoint, value: Value): unknown {
  return withEndpoint(endpoint, () => {
    switch (value.type) {
      case ValueType.RAW:
        return value.value
      case ValueType.HANDLER: {
        const handler = Handlers.get(value.name)
        if (handler != null) return handler.deserialize(value.value)
        return value.value
      }
      default:
        throw new Error(`Unknown type: ${(value as Value).type}`)
    }
  })
}

export function createEndpointProxy<T>(
  endpoint: Endpoint,
  path: Array<string | number | symbol>,
  target: any = function () {},
  boundArgs: unknown[] = [],
): Remote<T> {
  let isReleased = false
  const proxy = new Proxy(target, {
    get(_, property) {
      throwIfProxyReleased(isReleased)
      if (property === PublicSymbols.release) {
        return async () => {
          isReleased = true
          try {
            await sendRequest(endpoint, {
              id: generateUUID(),
              type: MessageType.RELEASE,
              path: path.map((p) => p.toString()),
            })
          } finally {
            endpoint.close()
          }
        }
      } else if (property === 'then') {
        if (path.length === 0) return { then: () => proxy }
        const value = sendRequest(endpoint, {
          id: generateUUID(),
          type: MessageType.get,
          path: path.map((p) => p.toString()),
        }).then((response) => fromValue(endpoint, response.value))

        return value.then.bind(value)
      } else {
        return createEndpointProxy(endpoint, [...path, property], target)
      }
    },
    set(_, property, value) {
      throwIfProxyReleased(isReleased)

      void sendRequest(endpoint, {
        id: generateUUID(),
        type: MessageType.set,
        path: [...path, property].map((p) => p.toString()),
        value: toValue(endpoint, value),
      })

      return true
    },
    apply(_, _this, args) {
      throwIfProxyReleased(isReleased)

      const last = path[path.length - 1]

      if (last === 'bind') {
        return createEndpointProxy(
          endpoint,
          path.slice(0, -1),
          target,
          args.slice(1),
        )
      } else {
        return sendRequest(endpoint, {
          id: generateUUID(),
          type: MessageType.apply,
          path: path.map((p) => p.toString()),
          argumentList: [...boundArgs, ...args].map((arg) =>
            toValue(endpoint, arg),
          ),
        }).then((response) => fromValue(endpoint, response.value))
      }
    },
    async construct(_, args) {
      throwIfProxyReleased(isReleased)

      const response = await sendRequest(endpoint, {
        id: generateUUID(),
        type: MessageType.construct,
        path: path.map((p) => p.toString()),
        argumentList: args.map((arg) => toValue(endpoint, arg)),
      })

      return fromValue(endpoint, response.value)
    },
  })

  return (proxy as unknown) as Remote<T>
}

async function sendRequest(
  endpoint: Endpoint,
  request: Message,
): Promise<ReturnMessage> {
  const scope = new DisposableScope()

  try {
    return await new Promise((resolve, reject) => {
      scope
        .emitter(endpoint)
        .on('message', (event) => {
          const response = event.detail as ReturnMessage
          if (response.id === request.id) resolve(response)
        })
        .on('closed', () => {
          reject(new Error('Endpoint closed'))
        })

      endpoint.dispatchEvent('message', request)
    })
  } finally {
    scope.dispose()
  }
}

function throwIfProxyReleased(isReleased: boolean): void {
  if (isReleased) {
    throw new Error('Proxy has been released and is not useable')
  }
}

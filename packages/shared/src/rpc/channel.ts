import { EventEmitter, EventProducer, EventSource } from '../reactivity'
import { generateUUID, isString } from '../string'
import type { Message } from './message'

function debug(..._args: any[]): void {
  // console.debug(..._args)
}

const serializer = {
  serialize(obj: unknown): string {
    return JSON.stringify(obj, (_key, value) => {
      if (typeof value === 'bigint') return `${value.toString()}n`

      return value
    })
  },
  deserialize<T = unknown>(text: string): T {
    return JSON.parse(text, (_key, value) => {
      if (isString(value) && value.endsWith('n') && /^[0-9]+n$/.test(value)) {
        return BigInt(value.slice(0, -1))
      }

      return value
    })
  },
}

export interface Channel {
  send(data: Buffer): void
  receive(handler: (data: Buffer) => void): void
}

interface EndpointProducerEvents {
  message: Message
}

interface EndpointSourceEvents extends EndpointProducerEvents {
  closed: null
}

export interface Endpoint
  extends EventSource<EndpointSourceEvents>,
    EventProducer<EndpointProducerEvents> {
  id: string
  close(): void
  create(id?: string): Endpoint
}

export function createEndpoint(channel: Channel): Endpoint {
  let defaultSource: EventEmitter<EndpointSourceEvents>
  const sources = new Map<string, EventEmitter<EndpointSourceEvents>>()

  function create(id: string): Endpoint {
    const emitter = new EventEmitter<EndpointSourceEvents>()

    if (defaultSource == null) {
      defaultSource = emitter
    }

    sources.set(id, emitter)

    return {
      id,
      addEventListener: (event, listener) =>
        emitter.addEventListener(event, listener),
      removeEventListener: (event, listener) =>
        emitter.removeEventListener(event, listener),
      dispatchEvent: (_event, detail) => {
        debug(`SEND(${id}): `, detail)
        channel.send(Buffer.from(serializer.serialize([id, detail])))
      },
      close: () => {
        emitter.dispatchEvent('closed', null)
        emitter.dispose()
        if (id != null) sources.delete(id)
      },
      create: (id) => create(id ?? generateUUID()),
    }
  }

  channel.receive((data) => {
    const [id, message] = serializer.deserialize<[string, Message]>(
      data.toString('utf-8'),
    )

    const source = sources.get(id) ?? defaultSource
    debug(`RECV(${id}): `, message)
    source.dispatchEvent('message', message)
  })

  return create(generateUUID())
}

import { BidirectionalMap } from '../map'
import { EventEmitter, EventProducer, EventSource } from '../reactivity'
import { generateUUID } from '../string'
import type { Message } from './message'

function debug(..._args: any[]): void {
  // console.debug(..._args)
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
  const sources = new BidirectionalMap<
    string,
    EventEmitter<EndpointSourceEvents>
  >()

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
      dispatchEvent: (event, detail) => {
        if (event !== 'message') return
        debug(`SEND(${id}): `, detail)
        channel.send(Buffer.from(JSON.stringify([id, detail])))
      },
      close: () => {
        emitter.dispatchEvent('closed', null)
        emitter.dispose()
        if (id != null) sources.deleteKey(id)
      },
      create: (id) => create(id ?? generateUUID()),
    }
  }

  channel.receive((data) => {
    const [id, message] = JSON.parse(data.toString('utf-8')) as [
      string,
      Message,
    ]

    const source = sources.getValue(id) ?? defaultSource
    debug(`RECV(${sources.getKey(source) ?? -1}): `, message)
    source.dispatchEvent('message', message)
  })

  return create('-1')
}

import { DisposableScope, EventEmitter, RPC, generateUUID } from '@vuedx/shared'
import { inject, injectable } from 'inversify'
import { ConfigService } from './ConfigService'
import { Client, IPCModule } from 'node-ipc'
import { LanguageServiceAPI } from './LanguageServiceAPI'
import { LoggerService } from './LoggerService'

export interface ExtensionEvents {
  connected: null
  disconnected: null
  message: null
}

@injectable()
export class IPCService extends EventEmitter<ExtensionEvents> {
  private readonly ipc: IPCModule
  private readonly cleanup: DisposableScope
  private readonly logger = new LoggerService('IPCService')

  public constructor(
    @inject(ConfigService) private readonly config: ConfigService,
    @inject(LanguageServiceAPI) private readonly api: LanguageServiceAPI,
  ) {
    super()

    this.ipc = new IPCModule()
    this.ipc.config.id = `vue-languageservice-${generateUUID()}`
    this.ipc.config.maxRetries = 3
    this.ipc.config.appspace = 'vuedx'
    this.ipc.config.encoding = 'utf8'

    this.ipc.config.logInColor = false
    this.ipc.config.logger = (message) => this.logger.info(message)

    this.cleanup = new DisposableScope()

      .emitter(this.config.state)
      .on('extensionSocketId', (event) => {
        const { value, previousValue } = event.detail
        this.logger.debug('Received extensionSocketId:', value)

        // Disconnect from previous server
        if (previousValue != null) {
          this.ipc.disconnect(previousValue)
        }

        // Connect to new server
        this.createClient()
      })
      .end()

    this.createClient()
  }

  private createClient(): void {
    const id = this.config.state.extensionSocketId
    if (id == null) return

    this.logger.debug(`Connecting to ${id}`)
    this.ipc.connectTo(id, () => {
      const client = this.ipc.of[id]
      if (client != null) {
        this.logger.debug(`Connected to ${id}`)
        this.setupNewClient(client)
      } else {
        this.logger.debug(`Connection failed: ${id}`)
      }
    })
  }

  private setupNewClient(client: Client): void {
    const scope = new DisposableScope()
    const eventTarget = scope.wrap(client)

    let isClosed = false
    eventTarget.on('destroy', () => {
      scope.dispose()
    })

    eventTarget.on('connect', () => {
      this.dispatchEvent('connected', null)

      const channel: RPC.Channel = {
        send: (data) => {
          if (isClosed) return
          client.emit('message', data.toString('utf-8'))
        },
        receive: (handler) => {
          eventTarget.on('message', handler)
        },
      }

      const endpoint = RPC.createEndpoint(channel)
      scope.add(() => endpoint.close())

      RPC.expose(this.api, endpoint)
    })

    eventTarget.on('disconnect', () => {
      isClosed = true
      this.dispatchEvent('disconnected', null)
    })

    client.emit('ping', JSON.stringify({ id: this.ipc.config.id }))
  }

  public dispose(): void {
    super.dispose()
    this.cleanup.dispose()
  }
}

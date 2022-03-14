import { RPC } from '@vuedx/shared'
import type { PluginSideChannel } from '@vuedx/typescript-plugin-vue'
import { injectable } from 'inversify'
import { IPCModule } from 'node-ipc'
import * as vscode from 'vscode'
import { Installable } from '../utils/installable'

@injectable()
export class PluginCommunicationService extends Installable {
  private readonly ipc: IPCModule
  private readonly _connections = new Map<
    string,
    RPC.Remote<PluginSideChannel>
  >()

  private readonly onConnectChangeEmitter = new vscode.EventEmitter()
  public onChange = this.onConnectChangeEmitter.event

  public get connections(): Array<RPC.Remote<PluginSideChannel>> {
    return Array.from(this._connections.values())
  }

  public async first<R>(
    fn: (connection: RPC.Remote<PluginSideChannel>) => Promise<R | undefined>,
  ): Promise<R | undefined> {
    for (const connection of this.connections) {
      const result = await fn(connection)
      if (result !== undefined) return result
    }

    return undefined
  }

  constructor() {
    super()

    this.ipc = new IPCModule()
    this.ipc.config.id = `vscode-vue-language-features-${getRandomId()}`
    this.ipc.config.maxRetries = 3
    this.ipc.config.appspace = 'vuedx'
    this.ipc.config.encoding = 'utf8'
  }

  public get socketId(): string {
    return this.ipc.config.id
  }

  public isReady: Promise<void> = Promise.resolve()

  public install(): vscode.Disposable {
    this.isReady = new Promise((resolve) => {
      this.ipc.serve(() => {
        resolve()

        this.ipc.server.on('ping', (data: string, socket) => {
          const { id } = JSON.parse(data)
          const endpoint = RPC.createEndpoint({
            send: (data) => {
              this.ipc.server.emit(socket, 'message', data.toString('utf-8'))
            },
            receive: (handler) => {
              this.ipc.server.on('message', (data: string) => {
                console.log('message', data)
                handler(Buffer.from(data))
              })
            },
          })

          this.ipc.server.on('socket.disconnected', (disconnected) => {
            if (disconnected === socket) {
              this._connections.delete(id)
              this.onConnectChangeEmitter.fire({})
              endpoint.close()
            }
          })

          this._connections.set(id, RPC.create(endpoint))
          this.onConnectChangeEmitter.fire({})
        })
      })
      this.ipc.server.start()
    })

    return vscode.Disposable.from({
      dispose: () => {
        this._connections.forEach((_, id) => {
          this.ipc.disconnect(id)
        })

        this._connections.clear()
      },
    })
  }
}

function getRandomId(): string {
  return String(Math.random().toString(16).split('.').pop())
}

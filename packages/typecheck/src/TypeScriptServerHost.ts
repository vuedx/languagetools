import { ChildProcess, fork } from 'child_process'
import * as Path from 'path'
import { createInterface, Interface } from 'readline'
import resolveFrom from 'resolve-from'
import type { Readable, Writable } from 'stream'
import type * as TS from 'typescript/lib/tsserverlibrary'

function resolve(moduleId: string, directory: string): string {
  try {
    return resolveFrom(directory, moduleId)
  } catch {
    return require.resolve(moduleId)
  }
}

const isDebugMode = process.env['DEBUG'] != null
function debug(...args: any[]): void {
  if (__DEV__ && isDebugMode) {
    console.debug(...args)
  }
}

export class TypeScriptServerHost {
  private readonly voidCommands: TS.server.protocol.CommandTypes[] = [
    'open' as TS.server.protocol.CommandTypes.Open,
    'geterr' as TS.server.protocol.CommandTypes.Geterr,
    'geterrForProject' as TS.server.protocol.CommandTypes.GeterrForProject,
  ]

  public readonly serverPath = resolve('typescript/lib/tsserver', process.cwd())
  public readonly pluginPath = Path.resolve(
    Path.dirname(require.resolve('@vuedx/typescript-plugin-vue/package.json')),
    '../..',
  )

  public readonly exitStatus: Promise<number>

  private isClosed = false
  private readonly server: ChildProcess
  private readonly stdin: Writable
  private readonly stdout: Readable
  private readonly readline: Interface

  private pendingResponses = 0

  private readonly responseHandlers = new Map<
    number,
    (response: TS.server.protocol.Response) => void
  >()

  private _messageId = 0
  private getNextMessageId(): number {
    return this._messageId++
  }

  constructor() {
    // prettier-ignore
    const debugArgs =
      process.env['DEBUG_TS_SERVER'] != null
        ? [
            '--logVerbosity', 'verbose',
            '--logFile', process.env['TS_SERVER_LOG_FILE'] ?? 'tsserver.log',
          ]
        : []
    // prettier-ignore
    this.server = fork(this.serverPath, [
      ...debugArgs,
      '--globalPlugins', '@vuedx/typescript-plugin-vue',
      '--pluginProbeLocations', `${process.cwd()},${this.pluginPath}`,
      '--allowLocalPluginLoads',
      '--useSingleInferredProject'
    ], {
      cwd: process.cwd(),
      stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
      execArgv: 
        process.env['TS_SERVER_INSPECT'] != null ? ['--inspect'] :
        process.env['TS_SERVER_INSPECT_BRK'] != null ? ['--inspect-brk=9229'] :
        []
    });

    this.exitStatus = new Promise((resolve) => {
      let isResolved = false
      this.server.on('exit', (code) => {
        if (!isResolved) resolve(code ?? 0)
      })

      this.server.on('error', (error) => {
        isResolved = true
        console.error(error)

        resolve(-1)
      })
    })

    if (this.server.stdout == null) throw new Error('No stdout')
    if (this.server.stdin == null) throw new Error('No stdin')

    this.stdout = this.server.stdout
    this.stdin = this.server.stdin

    this.stdout.setEncoding('utf-8')
    this.readline = createInterface({ input: this.stdout })

    this.readline.on('line', (line) => {
      if (line.startsWith('{')) {
        const payload:
          | TS.server.protocol.Request
          | TS.server.protocol.Response
          | TS.server.protocol.Event = JSON.parse(line)

        debug('RECV:', payload)
        if (payload.type === 'response') {
          this.pendingResponses -= 1
          this.responseHandlers.get(payload.request_seq)?.(payload)
        } else if (payload.type === 'request') {
          // --
        } else if (payload.type === 'event') {
          this.onEvent(payload)
        }

        if (this.isClosed) {
          this.shutdown()
        }
      }
    })
  }

  private eventHandlers: Record<string, Function[]> = {}

  private onEvent(payload: TS.server.protocol.Event): void {
    this.eventHandlers[payload.event]?.forEach((fn) => fn(payload.body))
  }

  private send(message: Omit<TS.server.protocol.Message, 'seq'>): number {
    if (this.isClosed) {
      throw new Error('Cannot send messages to a closed server connection.')
    }

    const seq = this.getNextMessageId()
    const payload = { seq, ...message }
    debug('SEND:', payload)
    this.stdin.write(JSON.stringify(payload) + '\n')

    return seq
  }

  public on(
    event: TS.server.protocol.DiagnosticEventKind,
    fn: (
      event: Required<TS.server.protocol.DiagnosticEvent>['body'],
    ) => void | Promise<void>,
  ): () => void
  public on(
    event: TS.server.protocol.RequestCompletedEventName,
    fn: (
      event: Required<TS.server.protocol.RequestCompletedEvent>['body'],
    ) => void | Promise<void>,
  ): () => void
  public on(
    event: TS.server.protocol.ProjectLoadingFinishEventName,
    fn: (
      event: Required<TS.server.protocol.ProjectLoadingFinishEvent>['body'],
    ) => void | Promise<void>,
  ): () => void
  public on(
    event: TS.server.protocol.ProjectsUpdatedInBackgroundEventName,
    fn: (
      event: Required<TS.server.protocol.ProjectsUpdatedInBackgroundEvent>['body'],
    ) => void | Promise<void>,
  ): () => void

  public on(
    event:
      | TS.server.protocol.DiagnosticEventKind
      | TS.server.protocol.RequestCompletedEventName
      | TS.server.protocol.ProjectLoadingFinishEventName
      | TS.server.protocol.ProjectsUpdatedInBackgroundEventName,
    fn: Function,
  ): () => void {
    const handlers =
      this.eventHandlers[event] ?? (this.eventHandlers[event] = [])

    handlers.push(fn)

    return () => {
      const index = handlers.indexOf(fn)
      if (index >= 0) {
        handlers.splice(index, 1)
      }
    }
  }

  public async sendRequest(
    request: Omit<TS.server.protocol.Request, 'seq' | 'type'>,
  ): Promise<TS.server.protocol.Response | number | undefined> {
    const id = this.send({ type: 'request', ...request })

    if (
      !this.voidCommands.includes(
        request.command as TS.server.protocol.CommandTypes,
      )
    ) {
      this.pendingResponses += 1
      return await new Promise((resolve) => {
        this.responseHandlers.set(id, (response) => resolve(response))
      })
    } else {
      return id
    }
  }

  public sendEvent(
    event: Omit<TS.server.protocol.Request, 'seq' | 'type'>,
  ): void {
    this.send({ type: 'event', ...event })
  }

  public async close(): Promise<number> {
    this.isClosed = true
    this.shutdown()

    return await this.exitStatus
  }

  private shutdown(): void {
    if (this.pendingResponses <= 0) {
      debug(`shutting down...`)
      this.stdin.end()
    } else {
      debug(`shutting after ${this.pendingResponses}...`)
    }
  }

  public async sendCommand(
    command: 'configure' | TS.server.protocol.CommandTypes.Configure,
    args: TS.server.protocol.ConfigureRequest['arguments'],
  ): Promise<TS.server.protocol.ConfigureResponse>
  public async sendCommand(
    command: 'projectInfo' | TS.server.protocol.CommandTypes.ProjectInfo,
    args: TS.server.protocol.ProjectInfoRequest['arguments'],
  ): Promise<TS.server.protocol.ProjectInfoResponse>

  public async sendCommand(
    command:
      | 'compilerOptionsForInferredProjects'
      | TS.server.protocol.CommandTypes.CompilerOptionsForInferredProjects,
    args: TS.server.protocol.SetCompilerOptionsForInferredProjectsRequest['arguments'],
  ): Promise<TS.server.protocol.SetCompilerOptionsForInferredProjectsResponse>

  public async sendCommand(
    command: 'updateOpen' | TS.server.protocol.CommandTypes.UpdateOpen,
    args: TS.server.protocol.UpdateOpenRequest['arguments'],
  ): Promise<number>

  public async sendCommand(
    command: 'geterr' | TS.server.protocol.CommandTypes.Geterr,
    args: TS.server.protocol.GeterrRequest['arguments'],
  ): Promise<number>
  public async sendCommand(
    command:
      | 'geterrForProject'
      | TS.server.protocol.CommandTypes.GeterrForProject,
    args: TS.server.protocol.GeterrForProjectRequest['arguments'],
  ): Promise<number>

  public async sendCommand(command: string, args: any): Promise<any> {
    return this.sendRequest({ command, arguments: args }) as any
  }
}

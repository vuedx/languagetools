import { ChildProcess, fork } from 'child_process'
import * as Path from 'path'
import { createInterface, Interface } from 'readline'
import resolveFrom from 'resolve-from'
import type { Readable, Writable } from 'stream'
import type * as Proto from 'typescript/lib/protocol'

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
  private readonly voidCommands: Proto.CommandTypes[] = [
    'open' as Proto.CommandTypes.Open,
    'geterr' as Proto.CommandTypes.Geterr,
    'geterrForProject' as Proto.CommandTypes.GeterrForProject,
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
    (response: Proto.Response) => void
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
        const payload: Proto.Request | Proto.Response | Proto.Event =
          JSON.parse(line)

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

  private onEvent(payload: Proto.Event): void {
    this.eventHandlers[payload.event]?.forEach((fn) => fn(payload.body))
  }

  private send(message: Omit<Proto.Message, 'seq'>): number {
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
    event: Proto.DiagnosticEventKind,
    fn: (
      event: Required<Proto.DiagnosticEvent>['body'],
    ) => void | Promise<void>,
  ): () => void
  public on(
    event: Proto.RequestCompletedEventName,
    fn: (
      event: Required<Proto.RequestCompletedEvent>['body'],
    ) => void | Promise<void>,
  ): () => void
  public on(
    event: Proto.ProjectLoadingFinishEventName,
    fn: (
      event: Required<Proto.ProjectLoadingFinishEvent>['body'],
    ) => void | Promise<void>,
  ): () => void
  public on(
    event: Proto.ProjectsUpdatedInBackgroundEventName,
    fn: (
      event: Required<Proto.ProjectsUpdatedInBackgroundEvent>['body'],
    ) => void | Promise<void>,
  ): () => void

  public on(
    event:
      | Proto.DiagnosticEventKind
      | Proto.RequestCompletedEventName
      | Proto.ProjectLoadingFinishEventName
      | Proto.ProjectsUpdatedInBackgroundEventName,
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
    request: Omit<Proto.Request, 'seq' | 'type'>,
  ): Promise<Proto.Response | number | undefined> {
    const id = this.send({ type: 'request', ...request })

    if (!this.voidCommands.includes(request.command as Proto.CommandTypes)) {
      this.pendingResponses += 1
      return await new Promise((resolve) => {
        this.responseHandlers.set(id, (response) => resolve(response))
      })
    } else {
      return id
    }
  }

  public sendEvent(event: Omit<Proto.Request, 'seq' | 'type'>): void {
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
    command: 'configure' | Proto.CommandTypes.Configure,
    args: Proto.ConfigureRequest['arguments'],
  ): Promise<Proto.ConfigureResponse>
  public async sendCommand(
    command: 'projectInfo' | Proto.CommandTypes.ProjectInfo,
    args: Proto.ProjectInfoRequest['arguments'],
  ): Promise<Proto.ProjectInfoResponse>

  public async sendCommand(
    command:
      | 'compilerOptionsForInferredProjects'
      | Proto.CommandTypes.CompilerOptionsForInferredProjects,
    args: Proto.SetCompilerOptionsForInferredProjectsRequest['arguments'],
  ): Promise<Proto.SetCompilerOptionsForInferredProjectsResponse>

  public async sendCommand(
    command: 'updateOpen' | Proto.CommandTypes.UpdateOpen,
    args: Proto.UpdateOpenRequest['arguments'],
  ): Promise<number>

  public async sendCommand(
    command: 'geterr' | Proto.CommandTypes.Geterr,
    args: Proto.GeterrRequest['arguments'],
  ): Promise<number>
  public async sendCommand(
    command: 'geterrForProject' | Proto.CommandTypes.GeterrForProject,
    args: Proto.GeterrForProjectRequest['arguments'],
  ): Promise<number>

  public async sendCommand(command: string, args: any): Promise<any> {
    return this.sendRequest({ command, arguments: args }) as any
  }
}

import * as Path from 'path'
import * as FS from 'fs'
import { ChildProcess, fork } from 'child_process'
import type { Readable, Writable } from 'stream'
import { createInterface, Interface } from 'readline'
import type * as Proto from 'typescript/lib/protocol'
import { inspect } from 'util'

function abs(fileName: string): string {
  return Path.resolve(__dirname, fileName)
}
export type { Proto }
const isDebugMode = process.env['DEBUG_TESTS'] != null
function debug(...args: any[]): void {
  if (isDebugMode) {
    console.debug(...args)
  }
}

const inspectOptions = {
  maxArrayLength: Infinity,
  showHidden: false,
  depth: Infinity,
  colors: true,
  breakLength: 120,
}
export class TestServer {
  private static _instanceId = 0
  private static getNextId(): number {
    return ++this._instanceId
  }

  private readonly voidCommands: Proto.CommandTypes[] = [
    'open' as Proto.CommandTypes.Open,
    // 'geterr' as Proto.CommandTypes.Geterr, // Void Command
  ]

  public readonly id = TestServer.getNextId()
  public readonly workingDir = abs('../../')
  public readonly serverPath = abs(
    '../../node_modules/typescript/lib/tsserver.js',
  )

  public readonly logPath = abs(`../output/tsserver.${this.id}.log`)
  public readonly exitStatus: Promise<number>

  private isClosed = false
  private readonly server: ChildProcess
  private readonly stdin: Writable
  private readonly stdout: Readable
  private readonly readline: Interface

  private pendingResponses = 0
  private readonly responses: Proto.Response[] = []
  private readonly requests: Proto.Request[] = []
  private readonly events: Proto.Event[] = []

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
    this.server = fork(this.serverPath, [
      '--logVerbosity', 'verbose',
      '--logFile', this.logPath,
      '--globalPlugins', '@vuedx/typescript-plugin-vue',
      '--pluginProbeLocations', `${this.workingDir}`,
      '--allowLocalPluginLoads'
    ], {
      cwd: this.workingDir,
      stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
      execArgv: 
        process.env['INSPECT'] != null ? ['--inspect'] :
        process.env['INSPECT_BRK'] != null ? ['--inspect-brk=9229'] :
        []
    });

    this.exitStatus = new Promise((resolve) => {
      let isResolved = false
      this.server.on('exit', (code) => {
        this.cleanup()
        if (!isResolved) resolve(code ?? 0)
      })

      this.server.on('error', (error) => {
        isResolved = true
        console.error(error)
        this.cleanup()

        resolve(-1)
      })
    })

    if (this.server.stdout == null)
      throw new Error(
        'stdout is required for TestServer server to work correctly',
      )
    if (this.server.stdin == null)
      throw new Error(
        'stdout is required for TestServer server to work correctly',
      )

    this.stdout = this.server.stdout
    this.stdin = this.server.stdin

    this.stdout.setEncoding('utf-8')
    this.readline = createInterface({ input: this.stdout })

    this.readline.on('line', (line) => {
      if (line.startsWith('{')) {
        const payload:
          | Proto.Request
          | Proto.Response
          | Proto.Event = JSON.parse(line)

        if (payload.type === 'response') {
          this.pendingResponses -= 1
          debug(
            `${this.id}: >> ${payload.type} (${payload.request_seq}) ${inspect(
              payload,
              inspectOptions,
            )}\n# pending ${this.pendingResponses}`,
          )
          this.responses.push(payload)
          this.responseHandlers.get(payload.request_seq)?.(payload)
        } else if (payload.type === 'request') {
          // TODO: Do we need this?
          debug(
            `${this.id}: >> ${payload.type} (${payload.seq}) ${inspect(
              payload,
              inspectOptions,
            )}\n# pending ${this.pendingResponses}`,
          )
          this.requests.push(payload)
        } else if (payload.type === 'event') {
          if (payload.event === 'requestCompleted') {
            this.pendingResponses -= 1
            const seq = payload.body.request_seq as number
            const response = {
              type: 'response' as const,
              command: 'geterr', // TODO: Does only geterr return event?
              request_seq: seq,
              success: true,
              seq: payload.seq,
            }
            this.responseHandlers.get(seq)?.(response)
          }

          this.onEvent(payload)

          debug(
            `${this.id}: >> ${payload.type} ${inspect(
              payload,
              inspectOptions,
            )}\n# pending ${this.pendingResponses}\n# eventHandlers ${
              this.onceEventHandlers.length
            }`,
          )
          this.events.push(payload)
        }

        if (this.isClosed) {
          this.shutdown()
        }
      }
    })
  }

  private onceEventHandlers: Array<(event: Proto.Event) => boolean> = []

  private onEvent(payload: Proto.Event): void {
    this.onceEventHandlers = this.onceEventHandlers.filter((fn) => !fn(payload))
  }

  public getEvents(): Proto.Event[] {
    return this.events.slice()
  }

  private send(message: Omit<Proto.Message, 'seq'>): number {
    if (this.isClosed)
      throw new Error('Cannot send messages to a closed server connection.')
    const seq = this.getNextMessageId()
    const payload = { seq, ...message }
    debug(
      `${this.id}: << ${payload.type} (${payload.seq}) ${inspect(
        payload,
        inspectOptions,
      )}\n# pending ${this.pendingResponses}`,
    )
    this.stdin.write(JSON.stringify(payload) + '\n')

    return seq
  }

  public async sendRequest(
    request: Omit<Proto.Request, 'seq' | 'type'>,
  ): Promise<Proto.Response | undefined> {
    if (this.voidCommands.includes(request.command as Proto.CommandTypes)) {
      this.send({ type: 'request', ...request })

      return undefined
    } else {
      this.pendingResponses += 1
      const id = this.send({ type: 'request', ...request })
      return await new Promise((resolve) => {
        this.responseHandlers.set(id, (response) => resolve(response))
      })
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

  private cleanup(): void {
    try {
      FS.unlinkSync(abs(`../output/ti-${this.server.pid}.log`))
    } catch {}
  }

  private shutdown(): void {
    if (this.pendingResponses <= 0) {
      debug(`${this.id}: shutting down...`)
      this.stdin.end()
    } else {
      debug(`${this.id}: shutting after ${this.pendingResponses}...`)
    }
  }

  public async flush(
    what: Array<'responses' | 'events' | 'requests'> = [
      'responses',
      'events',
      'requests',
    ],
  ): Promise<void> {
    what.forEach((key) => {
      this[key].length = 0
    })
  }

  // Type definitions to pair event with messages.
  public async waitForIdle(): Promise<void> {
    await this.waitForEvent('requestCompleted')
  }

  public async waitForEvent(
    event: 'configFileDiag',
    check?: (event: Proto.ConfigFileDiagnosticEvent) => boolean,
  ): Promise<Proto.ConfigFileDiagnosticEvent>

  public async waitForEvent(
    event: Proto.ProjectLoadingFinishEventName,
  ): Promise<Proto.ProjectLoadingFinishEvent>

  public async waitForEvent(
    event: Proto.RequestCompletedEventName,
  ): Promise<Proto.RequestCompletedEvent>
  public async waitForEvent(
    event: Proto.DiagnosticEventKind,
    check?: (event: Proto.DiagnosticEvent) => boolean,
  ): Promise<Proto.DiagnosticEvent>
  public async waitForEvent(
    event: string,
    check: (event: any) => boolean = () => true,
  ): Promise<Proto.Event> {
    return await new Promise((resolve) => {
      this.onceEventHandlers.push((payload) => {
        if (payload.event === event && check(payload)) {
          resolve(payload)
          return true
        } else {
          return false
        }
      })

      this.events
        .filter((e) => event === e.type)
        .reverse()
        .map((event) => this.onEvent(event))
    })
  }

  // Type definitions to pair commands with request and response args.

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
  ): Promise<Proto.Response>

  public async sendCommand(
    command: 'geterr' | Proto.CommandTypes.Geterr,
    args: Proto.GeterrRequest['arguments'],
  ): Promise<Proto.Response>

  public async sendCommand(
    command:
      | 'definitionAndBoundSpan'
      | Proto.CommandTypes.DefinitionAndBoundSpan,
    args: Proto.DefinitionAndBoundSpanRequest['arguments'],
  ): Promise<Proto.DefinitionAndBoundSpanResponse>

  public async sendCommand(
    command: 'quickinfo' | Proto.CommandTypes.Quickinfo,
    args: Proto.QuickInfoRequest['arguments'],
  ): Promise<Proto.QuickInfoResponse>

  public async sendCommand(
    command: 'rename' | Proto.CommandTypes.Rename,
    args: Proto.RenameRequest['arguments'],
  ): Promise<Proto.RenameResponse>

  public async sendCommand(
    command: 'completionInfo' | Proto.CommandTypes.CompletionInfo,
    args: Proto.CompletionsRequest['arguments'],
  ): Promise<Proto.CompletionInfoResponse>

  public async sendCommand(
    command: 'completionEntryDetails' | Proto.CommandTypes.CompletionDetails,
    args: Proto.CompletionDetailsRequest['arguments'],
  ): Promise<Proto.CompletionDetailsResponse>

  public async sendCommand(
    command:
      | 'getApplicableRefactors'
      | Proto.CommandTypes.GetApplicableRefactors,
    args: Proto.GetApplicableRefactorsRequest['arguments'],
  ): Promise<Proto.GetApplicableRefactorsResponse>

  public async sendCommand(
    command: 'getEditsForRefactor' | Proto.CommandTypes.GetEditsForRefactor,
    args: Proto.GetEditsForRefactorRequest['arguments'],
  ): Promise<Proto.GetEditsForRefactorResponse>

  public async sendCommand(command: string, args: any): Promise<any> {
    return this.sendRequest({ command, arguments: args }) as any
  }
}

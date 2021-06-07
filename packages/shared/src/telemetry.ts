import * as Sentry from '@sentry/node'
import { machineSync } from 'node-unique-machine-id'
import os from 'os'
import { inspect } from 'util'
import { v4 as uuid } from 'uuid'

interface Options {
  release: string
  environment: string
  tracesSampleRate: number
}
interface EventDefaults {
  sessionId: string
  os: string
  packageName?: string
  typescriptVersion?: string
  nodeVersion: string
  vueVersion?: string
  [key: string]: string | number | boolean | undefined
}

export class Telemetry {
  private readonly defaults: EventDefaults
  private readonly user = {
    id: this.getUserId(),
  }

  private isTelemetryEnabled: boolean =
    process.env['VUEDX_TELEMETRY']?.toLowerCase() === 'on' ||
    process.env['VUEDX_TELEMETRY']?.toLowerCase() === 'true' ||
    false

  constructor(
    key: string,
    options: Options,
    defaults?: Partial<EventDefaults>,
  ) {
    Sentry.init({
      dsn: key,
      defaultIntegrations: false,
      release: options.release,
      environment: options.environment,
      sampleRate: options.tracesSampleRate,
    } as any)

    this.defaults = {
      sessionId: uuid(),
      nodeVersion: process.version,
      os: os.platform(),
      ...defaults,
    }
  }

  private getUserId(): string {
    try {
      return machineSync(false, true)
    } catch {
      return ''
    }
  }

  trace(name: string, description?: string): () => void {
    if (!this.isTelemetryEnabled) return () => {}
    const activeTransaction = Sentry.getCurrentHub()
      .getScope()
      ?.getTransaction()
    if (activeTransaction == null) {
      const transaction = Sentry.startTransaction({
        name,
        description,
      })

      Sentry.configureScope((s: unknown) => {
        const scope = s as Sentry.Scope
        scope.setSpan(transaction)
      })

      return () => {
        Sentry.captureMessage(`[trace] ${name}`, (s: unknown) => {
          const scope = s as Sentry.Scope
          scope.setSpan(transaction)
          scope.setUser(this.user)
          scope.setTags({ ...this.defaults })
          scope.setLevel(Sentry.Severity.Info)

          return scope
        })
        transaction.finish()
        Sentry.configureScope((s: unknown) => {
          const scope = s as Sentry.Scope
          scope.setSpan(undefined)
        })
      }
    } else {
      const child = activeTransaction.startChild({
        op: name,
        description,
      })

      return () => {
        child.finish()
      }
    }
  }

  collect(key: string, value: Record<string, any>): void {
    if (!this.isTelemetryEnabled) return
    const tags: Record<string, string | number | boolean> = {}
    const allowed = new Set(['string', 'number', 'boolean'])
    Object.entries(value).forEach(([key, value]) => {
      if (allowed.has(typeof value)) {
        tags[`data_${key}`] = value
      }
    })
    Sentry.captureEvent({
      message: `${key}`,
      level: Sentry.Severity.Info,
      user: this.user,
      tags: {
        ...this.defaults,
        ...tags,
      },
      extra: value,
    })
  }

  error(payload: any | Error): void {
    if (!this.isTelemetryEnabled) return
    if (!(payload instanceof Error)) {
      payload = new Error(inspect(payload, true, 3, false))
    }

    void Sentry.captureException(payload, {
      level: Sentry.Severity.Fatal,
      user: this.user,
      tags: {
        ...this.defaults,
      },
    })
  }

  private static _instance?: Telemetry
  static get instance(): Telemetry {
    if (this._instance == null) {
      throw new Error(
        'Use "Telemetry.setup()" to instantiate telemetry client.',
      )
    }

    return this._instance
  }

  static setup(
    key: string,
    packageName: string,
    packageVersion: string,
    tracesSampleRate: number,
    defaults: Partial<EventDefaults>,
  ): void {
    this._instance = new Telemetry(
      key,
      {
        release: packageVersion,
        environment: packageVersion.includes('-') ? 'insiders' : 'production',
        tracesSampleRate,
      },
      {
        ...defaults,
        packageName,
      },
    )
  }

  static extend(defaults: Partial<EventDefaults>): void {
    Object.assign(this.instance.defaults, defaults)
  }

  static optOut(): void {
    if (this._instance != null) {
      this._instance.isTelemetryEnabled = false
    }
  }
}

export async function tracePromise<T>(
  event: string,
  promise: Promise<T>,
): Promise<T> {
  const done = trace(event)
  try {
    return await promise
  } catch (error) {
    collectError(error)
    throw error
  } finally {
    done()
  }
}

export function trace(event: string, description?: string): () => void {
  return Telemetry.instance.trace(event, description)
}

export function collectError(error: string | Error): void {
  return Telemetry.instance.error(error)
}

export function collect(key: string, value: Record<string, any>): void {
  return Telemetry.instance.collect(key, value)
}

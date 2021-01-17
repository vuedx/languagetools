import * as Sentry from '@sentry/node'
import { machineSync } from 'node-unique-machine-id'
import os from 'os'
import { v4 as uuid } from 'uuid'

interface Options {
  release: string
  environment: string
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

  private optOut: boolean =
    __DEV__ ||
    process.env.VUEDX_TELEMETRY?.toLowerCase() === 'off' ||
    process.env.VUEDX_TELEMETRY?.toLowerCase() === 'false'

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
      tracesSampleRate: 1,
    })

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
    if (this.optOut) return () => {}
    const activeTransaction = Sentry.getCurrentHub()
      .getScope()
      ?.getTransaction()
    if (activeTransaction == null) {
      const transaction = Sentry.startTransaction({
        name,
        description,
      })

      Sentry.configureScope((scope: any) => {
        scope.setSpan(transaction)
      })

      return () => {
        Sentry.captureMessage(`[trace] ${name}`, (scope: any): any => {
          scope.setSpan(transaction)
          scope.setUser(this.user)
          scope.setTags({ ...this.defaults })
          scope.setLevel(Sentry.Severity.Info)

          return scope
        })
        transaction.finish()
        Sentry.configureScope((scope: any) => {
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
    if (this.optOut) return
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

  error(payload: string | Error): void {
    if (this.optOut) return
    if (typeof payload === 'string') {
      payload = new Error(payload)
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
    defaults: Partial<EventDefaults>,
  ): void {
    this._instance = new Telemetry(
      key,
      {
        release: packageVersion,
        environment: packageVersion.includes('-') ? 'insiders' : 'production',
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
      this._instance.optOut = true
    }
  }
}

export async function tracePromise<T>(
  event: string,
  promise: Promise<T> | Thenable<T>,
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

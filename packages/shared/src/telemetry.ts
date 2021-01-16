import os from 'os'
import clean from 'clean-stack'
import { Event, init, NodeClient } from '@amplitude/node'
import { machineIdSync } from 'node-machine-id'
import { v4 as uuid } from 'uuid'
import { performance } from 'perf_hooks'

export class Telemetry {
  private readonly client: NodeClient
  private readonly defaults: Partial<Event>
  private optOut: boolean = __DEV__ || process.env.VUEDX_TELEMETRY === 'off'

  constructor(key: string, defaults?: Partial<Event>) {
    this.client = init(key, {
      debug: __DEV__,
    })

    this.defaults = {
      ...defaults,
      device_id: machineIdSync(),
      user_properties: {
        ...defaults?.user_properties,
        os: os.platform(),
        node_version: process.version,
      },
      event_properties: {
        ...defaults?.event_properties,
        session_id: uuid(),
      },
    }
  }

  trace(event: string, duration?: number): void {
    if (this.optOut) return
    void this.client.logEvent({
      ...this.defaults,
      event_type: `[trace] ${event}`,
      event_properties: {
        ...this.defaults,
        duration,
      },
    })
  }

  collect(key: string, value: Record<string, any>): void {
    if (this.optOut) return
    void this.client.logEvent({
      ...this.defaults,
      event_type: key,
      event_properties: {
        ...this.defaults.event_properties,
        ...value,
      },
    })
  }

  error(payload: string | Error): void {
    if (this.optOut) return
    if (typeof payload !== 'string') {
      void this.client.logEvent({
        ...this.defaults,
        event_type: `[error] ${payload.name}`,
        event_properties: {
          ...this.defaults.event_properties,
          ...payload,
          stack: this.processStackTrace(payload.stack),
        },
      })
    } else {
      void this.client.logEvent({
        ...this.defaults,
        event_type: `[error] unknown`,
        event_properties: {
          ...this.defaults.event_properties,
          message: payload,
          stack: this.processStackTrace(new Error().stack),
        },
      })
    }
  }

  private processStackTrace(stack?: string): string | undefined {
    if (stack == null) return

    return clean(stack, { pretty: true })
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
    {
      library,
      version_name: version,
      ...defaults
    }: Pick<Required<Event>, 'library' | 'version_name'> & Partial<Event>,
  ): void {
    this._instance = new Telemetry(key, {
      ...defaults,
      user_properties: {
        ...defaults.user_properties,
        package_name: library,
        package_version: version,
        app_version: version, // For release tracking.
      },
    })
  }

  static extend(defaults: Partial<Event>): void {
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
  const start = performance.now()
  try {
    return await promise
  } catch (error) {
    collectError(error)
    throw error
  } finally {
    trace(event, performance.now() - start)
  }
}

export function trace(event: string, duration?: number): void {
  return Telemetry.instance.trace(event, duration)
}

export function collectError(error: string | Error): void {
  return Telemetry.instance.error(error)
}

export function collect(key: string, value: Record<string, any>): void {
  return Telemetry.instance.collect(key, value)
}

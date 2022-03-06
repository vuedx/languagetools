import type { Disposable } from './disposable'
import type { EventEmitter, EventListener, EventSource } from './emitter'
import type { Model, ModelEvents } from './model'

interface FromEvents<T> {
  end(): DisposableScope
  on<E extends string & keyof T>(
    event: E,
    listener: EventListener<T[E]>,
  ): FromEvents<T>
}

interface EventEmitterLike {
  on(event: string, callback: (...args: unknown[]) => unknown): unknown
  off(event: string, callback: unknown): unknown
}

type EmitterScope<T> = T extends Model<infer S>
  ? FromEvents<ModelEvents<S>>
  : T extends EventEmitter<infer E>
  ? never extends E
    ? FromEvents<Required<T>['__type_helper_']>
    : FromEvents<E>
  : T extends EventSource<infer E>
  ? never extends E
    ? FromEvents<Required<T>['__type_helper_']>
    : FromEvents<E>
  : never

/**
 * A disposable scope to simplify resource cleanup, e.g.,
 * remove event listeners on component unmount.
 */
export class DisposableScope implements Disposable {
  private readonly _cleanups: Array<() => void> = []

  /**
   * Call `dispose()` function on cleanup.
   */
  public add(disposable: Disposable | Disposable['dispose']): DisposableScope {
    const resource =
      typeof disposable === 'function' ? { dispose: disposable } : disposable

    this._cleanups.push(() => resource.dispose())

    return this
  }

  /**
   * Call `fn` and use returned value as cleanup function.
   */
  public run(fn: () => Disposable | Disposable['dispose']): DisposableScope {
    this.add(fn())

    return this
  }

  /**
   * Unregister events on cleanup.
   */
  public emitter<E extends EventEmitter<any> | EventSource<any>>(
    eventTarget: E,
  ): EmitterScope<E> {
    const context: EmitterScope<E> = {
      on: (event: string, listener: any) => {
        this.run(() => {
          eventTarget.addEventListener(event, listener)

          return () => {
            eventTarget.removeEventListener(event, listener)
          }
        })

        return context
      },
      end: () => this,
    } as any

    return context
  }

  public wrap<E extends EventEmitterLike>(eventTarget: E): Pick<E, 'on'> {
    return {
      on: (event: string, listener: any): any => {
        this.run(() => {
          eventTarget.on(event, listener)

          return () => {
            eventTarget.off(event, listener)
          }
        })
      },
    }
  }

  public dispose(): void {
    this._cleanups.forEach((fn) => fn())
    this._cleanups.length = 0
  }
}

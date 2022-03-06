import type { Disposable } from './disposable'

export type EventListener<T> = (event: Event<T>) => void | Promise<void>

export class Event<T> {
  public readonly type: string
  public readonly detail: T

  constructor(name: string, detail: T) {
    this.type = name
    this.detail = detail
  }
}

export type EventsOf<T extends EventEmitter<unknown>> = T extends EventEmitter<
  infer E
>
  ? never extends E
    ? T['__type_helper_'] // cannot infer generic param, use type hack in EventEmitter
    : E
  : never

export interface EventSource<T> {
  addEventListener<E extends string & keyof T>(
    event: E,
    listener: EventListener<T[E]>,
  ): void
  removeEventListener<E extends string & keyof T>(
    event: E,
    listener: EventListener<T[E]>,
  ): void
  __type_helper_?: T
}

export interface EventProducer<T> {
  dispatchEvent<E extends string & keyof T>(event: E, detail: T[E]): void
}

export class EventEmitter<T>
  implements Disposable, EventSource<T>, EventProducer<T> {
  private _listeners: {
    [K in string & keyof T]?: Set<EventListener<T[K]>>
  } = {}

  public __type_helper_?: T

  public addEventListener<E extends string & keyof T>(
    event: E,
    listener: EventListener<T[E]>,
  ): void {
    const listeners = this._listeners[event]
    if (listeners != null) {
      listeners.add(listener)
    } else {
      this._listeners[event] = new Set([listener])
    }
  }

  public removeEventListener<E extends string & keyof T>(
    event: E,
    listener: EventListener<T[E]>,
  ): void {
    this._listeners[event]?.delete(listener)
  }

  public dispatchEvent<E extends string & keyof T>(
    event: E,
    detail: T[E],
  ): void {
    this._listeners[event]?.forEach((fn) => {
      try {
        void fn(new Event(event, detail))
      } catch {}
    })
  }

  public dispose(): void {
    this._listeners = {}
  }
}

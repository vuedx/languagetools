import { EventEmitter } from './emitter'

export type KeyOf<T> = T extends object ? string & keyof T : never

export type ModelEvents<T extends object> = {
  [K in KeyOf<T> | '@updated']: K extends '@updated'
    ? Array<KeyOf<T>>
    : K extends KeyOf<T>
    ? {
        value: T[K]
        previousValue: T[K]
      }
    : never
}

interface Readable<T extends object> {
  get<K extends KeyOf<T>>(key: K): T[K]
}

interface Writable<T extends object> extends Readable<T> {
  set<K extends KeyOf<T>>(key: K, value: T[K]): void
  setAll(state: Partial<T>): void
}

type Immutable<T> = T extends Array<infer I>
  ? ReadonlyArray<Immutable<I>>
  : T extends Set<infer I>
  ? ReadonlySet<Immutable<I>>
  : T extends Map<infer K, infer V>
  ? ReadonlyMap<K, Immutable<V>>
  : T extends Date | Function | RegExp
  ? T
  : T extends object
  ? {
      readonly [K in keyof T]: Immutable<T[K]>
    }
  : T

export type Model<T extends object> = T &
  Writable<T> &
  EventEmitter<ModelEvents<T>>
export type ReadonlyModel<T extends object> = Immutable<T> &
  Readable<T> &
  EventEmitter<ModelEvents<T>>

const methodsRE = /^(get|set|setAll|addEventListener|removeEventListener|dispatchEvent|dispose)$/
export function createModel<T extends object>(state: T): Model<T> {
  const model = new ObservableState(state)
  const isProperty = (property: string | symbol): property is KeyOf<T> =>
    typeof property === 'string' &&
    !methodsRE.test(property) &&
    !property.startsWith('_')

  return new Proxy((model as unknown) as T & Model<T>, {
    get(target, property, receiver) {
      if (isProperty(property)) return target.get(property)
      return Reflect.get(target, property, receiver)
    },
    set(target, property, value, receiver) {
      if (isProperty(property)) {
        target.set(property, value)
        return true
      }

      return Reflect.set(target, property, value, receiver)
    },
    has(target, property) {
      return Reflect.has(isProperty(property) ? model._state : target, property)
    },
    ownKeys(_target) {
      return Reflect.ownKeys(model._state)
    },
    getOwnPropertyDescriptor(_target, property) {
      return Reflect.getOwnPropertyDescriptor(model._state, property)
    },
  })
}

export function readonly<T extends object>(model: Model<T>): ReadonlyModel<T> {
  if (__DEV__) {
    return new Proxy((model as unknown) as ReadonlyModel<T>, {
      set(_target, property) {
        throw new Error(`Cannot set readonly property "${String(property)}"`)
      },
    })
  }

  return (model as unknown) as ReadonlyModel<T>
}

class ObservableState<T extends object>
  extends EventEmitter<ModelEvents<T>>
  implements Writable<T> {
  public readonly _state: T

  constructor(state: T) {
    super()
    this._state = state
  }

  set<K extends KeyOf<T>>(key: K, value: T[K]): void {
    if (__DEV__) {
      if (key === '@updated' || methodsRE.test(key))
        throw new Error(`"${key}" is a reserved property`)
    }

    this.setAll(({ [key]: value } as unknown) as Partial<T>)
  }

  setAll(state: Partial<T>): void {
    type Change<K extends KeyOf<T> = KeyOf<T>> = [
      K,
      { value: T[K]; previousValue: T[K] },
    ]
    const changes: Change[] = []

    Object.entries(state).forEach((entry) => {
      const key = entry[0] as KeyOf<T>
      const previousValue = this._state[key]
      const value = entry[1] as typeof previousValue
      if (previousValue === value) return // Value did not change.

      this._state[key] = value

      changes.push([key, { value, previousValue }])
    })

    this.dispatchEvent(
      '@updated',
      changes.map((change) => change[0]),
    )

    for (const change of changes) {
      this.dispatchEvent(change[0], change[1] as any)
    }
  }

  get<K extends KeyOf<T>>(key: K): T[K] {
    return this._state[key]
  }
}

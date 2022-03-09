import type { Disposable } from './disposable'
import type { KeyOf, Model, ReadonlyModel } from './model'
import { DisposableScope } from './cleanup'

interface EffectOptions {
  /**
   * Run effect immediately,
   */
  immediate: boolean
}

export function effect<T extends object>(
  model: Model<T> | ReadonlyModel<T>,
  dependencies: Array<KeyOf<T>>,
  fn: () => void,
  options: EffectOptions = { immediate: true },
): Disposable {
  const scope = new DisposableScope()
  const emitter = scope.emitter(model)
  const set = new Set(dependencies)

  emitter.on('@updated', (event) => {
    if (event.detail.some((property) => set.has(property))) {
      fn()
    }
  })

  if (options.immediate) {
    fn()
  }

  return scope
}

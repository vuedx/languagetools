import { effect } from './effect'
import { createModel, KeyOf, Model, readonly, ReadonlyModel } from './model'

type Dependency<T extends object = {}> =
  | [model: Model<T>, dependencies: Array<KeyOf<T>>]
  | [model: ReadonlyModel<T>, dependencies: Array<KeyOf<T>>]
type Dependencies<T extends object = any> = Array<Dependency<T>>

export function computed<
  R,
  D0 extends object,
  D1 extends object,
  D2 extends object,
  D3 extends object,
  D4 extends object,
  D5 extends object
>(
  getter: () => R,
  dep0?: Dependency<D0>,
  dep1?: Dependency<D1>,
  dep2?: Dependency<D2>,
  dep3?: Dependency<D3>,
  dep4?: Dependency<D4>,
  dep5?: Dependency<D5>,
): ReadonlyModel<{ value: R }>

/**
 * Lazily computed resource generated from models.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function computed(getter: any, ...dependencies: any[]) {
  return createComputedModel(dependencies, getter)
}

function createComputedModel<R>(
  dependencies: Dependencies,
  getter: () => R,
): ReadonlyModel<{ value: R }> {
  let value!: R
  let isDirty = true

  const state = createModel({
    get value(): R {
      if (isDirty) {
        isDirty = false
        value = getter()
      }

      return value
    },
  })

  dependencies.forEach((dependency) => {
    effect(dependency[0], dependency[1], () => {
      isDirty = true
      state.dispatchEvent('@updated', ['value'])
      state.dispatchEvent('value', {
        get value() {
          return state.value
        },
        previousValue: value,
      })
    })
  })

  return readonly(state)
}

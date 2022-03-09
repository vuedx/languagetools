import { effect } from './effect'
import { createModel } from './model'

describe(effect, () => {
  test('runs on state change', () => {
    const state = createModel({ val: 1 })
    const fn = jest.fn()

    effect(state, ['val'], fn)

    expect(fn).toHaveBeenCalledTimes(1)

    state.val = 2
    expect(fn).toHaveBeenCalledTimes(2)

    state.val = 2 // updating with same value
    expect(fn).toHaveBeenCalledTimes(2)

    state.val = 3
    expect(fn).toHaveBeenCalledTimes(3)
  })

  test('runs on state change (immediate: false)', () => {
    const state = createModel({ val: 1 })
    const fn = jest.fn()

    effect(state, ['val'], fn, { immediate: false })

    expect(fn).toHaveBeenCalledTimes(0)

    state.val = 2
    expect(fn).toHaveBeenCalledTimes(1)

    state.val = 2 // updating with same value
    expect(fn).toHaveBeenCalledTimes(1)

    state.val = 3
    expect(fn).toHaveBeenCalledTimes(2)
  })
})

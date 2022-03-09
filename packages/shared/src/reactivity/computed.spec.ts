import { computed } from './computed'
import { createModel } from './model'

describe(computed, () => {
  test('is evaluated lazily', () => {
    const getter = jest.fn().mockReturnValue(1)
    const state = computed(getter)

    expect(getter).not.toHaveBeenCalled()

    expect(state.value).toBe(1)
    expect(getter).toHaveBeenCalled()

    getter.mockReturnValue(2)
    expect(state.value).toBe(1)
    expect(getter).toHaveBeenCalledTimes(1)
  })

  test('always resolves to latest value when accessed', () => {
    const a = createModel({ one: 1 })
    const b = createModel({ one: 1 })

    const getter = jest.fn().mockImplementation(() => a.one + b.one)
    const state = computed(getter, [a, ['one']], [b, ['one']])

    expect(state.value).toBe(2)
    expect(state.value).toBe(2) // accessing multiple times

    a.one = 2
    b.one = 2
    b.one = 3
    b.one = 4

    expect(state.value).toBe(6)
    expect(getter).toHaveBeenCalledTimes(2)
  })

  test('resolves to latest value when accessed in event', () => {
    const a = createModel({ one: 1 })
    const b = createModel({ one: 1 })

    const state = computed(() => a.one + b.one, [a, ['one']], [b, ['one']])
    const fn = jest.fn((val) => {
      expect(val).toBe(3)
    })

    state.addEventListener('value', (event) => fn(event.detail.value))

    a.one = 2
    expect(fn).toHaveBeenCalled()
  })

  test('single dependency', () => {
    const a = createModel({ one: 1 })

    const getter = jest.fn().mockImplementation(() => a.one * 2)
    const state = computed(getter, [a, ['one']])

    expect(state.value).toBe(2)

    a.one = 2
    a.one = 3

    expect(state.value).toBe(6)
    expect(getter).toHaveBeenCalledTimes(2)
  })
})

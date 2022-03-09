import { createModel, readonly } from './model'

describe(createModel, () => {
  beforeEach(() => {
    ;(global as any).__DEV__ = false
  })

  const createEvent = (value: any, previousValue: any): any =>
    expect.objectContaining({ detail: { value, previousValue } })
  test('observe state changes', () => {
    const fooListener = jest.fn()
    const barListener = jest.fn()
    const model = createModel({ foo: 'bar', bar: 1 })

    model.addEventListener('foo', fooListener)
    model.addEventListener('bar', barListener)

    model.foo = 'foo'
    expect(fooListener).toHaveBeenCalledWith(createEvent('foo', 'bar'))
    expect(model.foo).toBe('foo')

    model.bar += 1
    expect(barListener).toHaveBeenCalledWith(createEvent(2, 1))
    expect(model.bar).toBe(2)

    model.bar += 1
    expect(barListener).toHaveBeenCalledWith(createEvent(3, 2))
    expect(model.bar).toBe(3)

    expect(fooListener).toHaveBeenCalledTimes(1)
    expect(barListener).toHaveBeenCalledTimes(2)
  })

  test('set and setAll', () => {
    const model = createModel({ one: 1, two: 2 })

    const onChange = jest.fn()
    model.addEventListener('@updated', onChange)
    model.set('one', 2)
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: ['one'] }),
    )
    model.setAll({ one: 5, two: 10 })
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: ['one', 'two'] }),
    )
  })

  test('does not fire event when no value change', () => {
    const model = createModel({ one: 1, two: 2 })

    const onChange = jest.fn()
    model.addEventListener('@updated', onChange)

    model.one = 1
    expect(onChange).not.toHaveBeenCalledWith()

    model.set('one', 1)
    expect(onChange).not.toHaveBeenCalledWith()

    model.setAll({ one: 1, two: 4 })
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: ['two'] }),
    )
  })

  test('reserved keys', () => {
    ;(global as any).__DEV__ = true
    const model = createModel({})

    // @ts-expect-error
    expect(() => model.set('@updated', true)).toThrowError(/reserved property/)

    // @ts-expect-error
    expect(() => model.set('setAll', true)).toThrowError(/reserved property/)
  })

  test('readonly model', () => {
    ;(global as any).__DEV__ = true
    const model = createModel({ one: 1 })
    const readonlyModel = readonly(model)

    expect(() => {
      // @ts-expect-error
      readonlyModel.one = 2
    }).toThrowError(/readonly property/)
  })

  test('readonly is noop in production', () => {
    const model = createModel({ one: 1 })
    const readonlyModel = readonly(model)

    expect(readonlyModel).toBe(model)
  })

  test('setting method does not set property', () => {
    const model = createModel({ set: 1 })

    // @ts-expect-error
    model.set = jest.fn()

    expect(model.get('set')).toBe(1)
  })

  test('has', () => {
    const model = createModel({ one: 1 })

    expect('one' in model).toBe(true)
    expect('nonExistingKey' in model).toBe(false)

    expect('setAll' in model).toBe(true)
  })

  test('keys', () => {
    const model = createModel({ one: 1 })

    expect(Object.keys(model)).toEqual(['one'])
  })
})

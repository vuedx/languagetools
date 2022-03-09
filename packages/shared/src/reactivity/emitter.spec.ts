import { EventEmitter } from './emitter'

describe(EventEmitter, () => {
  test('event listeners', () => {
    const emitter = new EventEmitter<{ foo: string }>()
    const foo = jest.fn()

    emitter.addEventListener('foo', foo)
    emitter.dispatchEvent('foo', 'bar')

    expect(foo).toHaveBeenCalledWith({ type: 'foo', detail: 'bar' })

    emitter.removeEventListener('foo', foo)
    emitter.dispatchEvent('foo', 'bar')

    expect(foo).toHaveBeenCalledTimes(1)
  })

  test('dispose', () => {
    const emitter = new EventEmitter<{ foo: string }>()
    const foo = jest.fn()

    emitter.addEventListener('foo', foo)
    emitter.dispatchEvent('foo', 'bar')

    expect(foo).toHaveBeenCalledWith({ type: 'foo', detail: 'bar' })

    emitter.dispose()
    emitter.dispatchEvent('foo', 'bar')

    expect(foo).toHaveBeenCalledTimes(1)
  })

  test('avoids duplicate listeners', () => {
    const emitter = new EventEmitter<{ foo: null }>()
    const foo = jest.fn()
    emitter.addEventListener('foo', foo)
    emitter.addEventListener('foo', foo)
    emitter.addEventListener('foo', foo)

    emitter.dispatchEvent('foo', null)

    expect(foo).toHaveBeenCalledTimes(1)
  })

  test('remove unregistered listener', () => {
    const emitter = new EventEmitter<{ foo: null }>()
    const foo = jest.fn()
    expect(() => emitter.removeEventListener('foo', foo)).not.toThrow()
  })

  test('ignore errors in dispatchEvent', () => {
    const emitter = new EventEmitter<{ foo: null }>()
    const foo = jest.fn(() => {
      throw new Error('some error')
    })
    emitter.addEventListener('foo', foo)

    expect(() => emitter.dispatchEvent('foo', null)).not.toThrow()
    expect(foo).toHaveBeenCalled()
  })
})

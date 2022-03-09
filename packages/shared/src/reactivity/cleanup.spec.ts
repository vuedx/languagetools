import { DisposableScope } from './cleanup'
import { EventEmitter } from './emitter'
import { EventEmitter as NodeEventEmitter } from 'events'

describe(DisposableScope, () => {
  describe(DisposableScope.prototype.run, () => {
    test('disposes resources created', () => {
      const scope = new DisposableScope()
      const cleanup = jest.fn()
      scope.run(() => cleanup)
      expect(cleanup).not.toHaveBeenCalled()
      scope.dispose()
      expect(cleanup).toHaveBeenCalled()
    })
  })

  describe(DisposableScope.prototype.emitter, () => {
    test('disposes EventEmitter listeners', () => {
      const emitter = new EventEmitter<{ foo: null; bar: null }>()
      const foo = jest.fn()
      const bar = jest.fn()
      const bar2 = jest.fn()
      const cleanup = jest.fn()

      const addEventListener = jest.spyOn(emitter, 'addEventListener')
      const removeEventListener = jest.spyOn(emitter, 'removeEventListener')

      const scope = new DisposableScope()
      scope
        .emitter(emitter)
        .on('foo', foo)
        .on('bar', bar)
        .on('bar', bar2)
        .end()
        .run(() => cleanup)

      expect(addEventListener).toHaveBeenCalledTimes(3)
      expect(addEventListener).toHaveBeenCalledWith('foo', foo)
      expect(addEventListener).toHaveBeenCalledWith('bar', bar)
      expect(addEventListener).toHaveBeenCalledWith('bar', bar2)
      expect(removeEventListener).not.toHaveBeenCalled()
      expect(cleanup).not.toHaveBeenCalled()

      scope.dispose()

      expect(cleanup).toHaveBeenCalled()
      expect(removeEventListener).toHaveBeenCalledTimes(3)
      expect(removeEventListener).toHaveBeenCalledWith('foo', foo)
      expect(removeEventListener).toHaveBeenCalledWith('bar', bar)
      expect(removeEventListener).toHaveBeenCalledWith('bar', bar2)
    })
  })

  describe(DisposableScope.prototype.wrap, () => {
    test('disposes listeners', () => {
      const emitter = new NodeEventEmitter()
      const foo = jest.fn()
      const bar = jest.fn()
      const bar2 = jest.fn()
      const cleanup = jest.fn()

      const addEventListener = jest.spyOn(emitter, 'on')
      const removeEventListener = jest.spyOn(emitter, 'off')

      const scope = new DisposableScope()
      const wrappedEmitter = scope.wrap(emitter)

      wrappedEmitter.on('foo', foo)
      wrappedEmitter.on('bar', bar)
      wrappedEmitter.on('bar', bar2)

      scope.run(() => cleanup)

      expect(addEventListener).toHaveBeenCalledTimes(3)
      expect(addEventListener).toHaveBeenCalledWith('foo', foo)
      expect(addEventListener).toHaveBeenCalledWith('bar', bar)
      expect(addEventListener).toHaveBeenCalledWith('bar', bar2)
      expect(removeEventListener).not.toHaveBeenCalled()
      expect(cleanup).not.toHaveBeenCalled()

      scope.dispose()

      expect(cleanup).toHaveBeenCalled()
      expect(removeEventListener).toHaveBeenCalledTimes(3)
      expect(removeEventListener).toHaveBeenCalledWith('foo', foo)
      expect(removeEventListener).toHaveBeenCalledWith('bar', bar)
      expect(removeEventListener).toHaveBeenCalledWith('bar', bar2)
    })
  })

  describe(DisposableScope.prototype.add, () => {
    test('disposes resources created', () => {
      const scope = new DisposableScope()
      const disposable = { dispose: jest.fn() }
      const dispose = jest.fn()
      scope.add(disposable).add(dispose)
      expect(disposable.dispose).not.toHaveBeenCalled()
      expect(dispose).not.toHaveBeenCalled()
      scope.dispose()
      expect(dispose).toHaveBeenCalled()
      expect(disposable.dispose).toHaveBeenCalled()
    })
  })
})

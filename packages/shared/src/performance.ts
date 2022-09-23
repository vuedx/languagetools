import { performance } from 'perf_hooks'
import { Telemetry } from './telemetry'

export function startMeasure(name: string): () => void {
  const start = performance.now()
  performance.mark(`${name}|start`)

  return () => {
    const duration = performance.now() - start
    performance.mark(`${name}|end`)
    performance.measure(name, `${name}|start`, `${name}|end`)
    Telemetry.instance.measure(name, duration)
  }
}

export function measure(name?: string): MethodDecorator {
  return createMethodDecorator(({ target, propertyKey, next }) => {
    const id = name ?? `${target.constructor.name}#${propertyKey.toString()}`

    return function (this: any, ...args) {
      const start = performance.now()
      try {
        return next.apply(this, args)
      } finally {
        const end = performance.now()
        Telemetry.instance.measure(id, end - start)
      }
    }
  })
}

function createMethodDecorator<T = unknown, R = unknown>(
  createMethod: (options: {
    target: Object
    propertyKey: string | symbol
    descriptor: TypedPropertyDescriptor<(...args: T[]) => R>
    next(...args: T[]): R
  }) => (...args: T[]) => R,
): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    const fn = descriptor?.value

    if (typeof fn === 'function') {
      descriptor.value = createMethod({
        target,
        propertyKey,
        descriptor,
        next: fn,
      } as any) as any
    }

    return descriptor
  }
}

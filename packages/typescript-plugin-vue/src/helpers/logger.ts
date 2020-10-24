import { performance } from 'perf_hooks'

export function Trace(context: string = ''): MethodDecorator {
  return (target, method, descriptor) => {
    if (typeof descriptor.value === 'function') {
      const fn = descriptor.value
      function write(method: string, start: number) {
        console.debug(
          `[TRACE] ${context} ${method} ${performance.now() - start}`,
        )
      }

      descriptor.value = function (this: unknown, ...args: unknown[]) {
        const start = performance.now()
        const name = `${
          context || Object.getPrototypeOf(this).name
        }::${method.toString()}`
        try {
          const result = fn.apply(this, args)

          if (result instanceof Promise) {
            return result.finally(() => write(name, start))
          } else {
            write(name, start)
          }
        } catch (error) {
          write(name, start)
          throw error
        }
      } as any
    }
  }
}

import util from 'util'

export function wrapInTrace<T>(context: string, target: T): T {
  function write(
    method: string,
    start: number,
    args: unknown,
    result: unknown,
  ) {
    console.log(
      `[TRACE] ${context} ${method}(${JSON.stringify(args)}) ${
        performance.now() - start
      } ${util.inspect(result, false, 2, false)}`,
    )
  }

  for (const method in target) {
    const fn = target[method]
    if (typeof fn === 'function') {
      target[method] = function (this: unknown, ...args: unknown[]) {
        const start = performance.now()
        try {
          const result = fn.apply(this, args)

          if (result instanceof Promise) {
            return result.finally(() => write(method, start, args, result))
          } else {
            write(method, start, args, result)

            return result
          }
        } catch (error) {
          write(method, start, args, { error })
          throw error
        }
      } as any
    }
  }

  return target
}

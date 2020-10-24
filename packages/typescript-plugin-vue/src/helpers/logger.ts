import { performance } from 'perf_hooks'
import util from 'util'

export function wrapInTrace<T>(context: string, target: T): T {
  if (__DEV__) {
    function write(
      method: string,
      start: number,
      args: unknown,
      result: unknown,
    ) {
      console.log(
        `[TRACE] ${context} ${method}(${JSON.stringify(args)}) ${
          performance.now() - start
        } ${util.inspect(result, false, 6, false)}`,
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
  }

  return target
}

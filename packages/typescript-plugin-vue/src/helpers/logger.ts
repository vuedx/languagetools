import { performance } from 'perf_hooks'
import util from 'util'

const DEBUGGING = false
function isPlainObj(o: any): boolean {
  return typeof o === 'object' && o.constructor === Object
}
export function wrapInTrace<T>(context: string, target: T): T {
  if (__DEV__) {
    const write = (
      method: string,
      start: number,
      args: unknown,
      result: unknown,
    ): void => {
      if (!['getProgram'].includes(method)) {
        console.log(
          `[TRACE] ${context} ${method}(${JSON.stringify(args)}) ${
            performance.now() - start
          } ${JSON.stringify(
            result,
            (_, value) => {
              if (
                value != null &&
                typeof value === 'object' &&
                !Array.isArray(value)
              ) {
                if (isPlainObj(value)) return value
                return `[Object ${String(value.constructor.name)}]`
              }

              return value
            },
            2,
          )}`,
        )
      }
    }

    const clone = {} as any

    for (const method in target) {
      const fn = target[method]
      if (typeof fn === 'function') {
        clone[method] = function (this: unknown, ...args: unknown[]) {
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
      } else {
        clone[method] = fn
      }
    }

    return clone
  }

  return target
}
export function wrapFn<T extends (...args: any[]) => any>(
  context: string,
  target: T,
): T {
  if (__DEV__ && DEBUGGING) {
    const write = (start: number, args: unknown, result: unknown): void => {
      console.log(
        `[TRACE] fn ${context} (${JSON.stringify(args)}) ${
          performance.now() - start
        } ${util.inspect(result, false, 6, false)}`,
      )
    }

    return function (...args: any[]) {
      const start = performance.now()
      try {
        const result = target.apply(null, args)

        if (result instanceof Promise) {
          return result.finally(() => write(start, args, result))
        } else {
          write(start, args, result)

          return result
        }
      } catch (error) {
        write(start, args, { error })
        throw error
      }
    } as any
  }

  return target
}

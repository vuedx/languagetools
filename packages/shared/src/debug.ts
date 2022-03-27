import { inspect } from 'util'

export function debug(): MethodDecorator {
  return (target, key, descriptor) => {
    const fn = (descriptor?.value as unknown) as (...args: any[]) => any
    descriptor.value = function (this: any, ...args: any[]): any {
      this.logger.debug(
        `(call) ${target.constructor.name}.${String(key)}`,
        inspect({ args }, false, 100, false),
      )
      const result = fn.apply(this, args)

      this.logger.debug(
        `(return) ${target.constructor.name}.${String(key)}`,
        inspect({ args, result }, false, 100, false),
      )

      return result
    } as any

    return descriptor
  }
}
export function traceInDevMode(): MethodDecorator {
  return (target, key, descriptor) => {
    if (__DEV__) {
      const fn = (descriptor?.value as unknown) as (...args: any[]) => any
      descriptor.value = function (this: any, ...args: any[]): any {
        this.logger.debug(
          `(call) ${target.constructor.name}.${String(key)}`,
          inspect({ args }, false, 100, false),
        )
        const result = fn.apply(this, args)

        this.logger.debug(
          `(return) ${target.constructor.name}.${String(key)}`,
          inspect({ args, result }, false, 100, false),
        )

        return result
      } as any
    }

    return descriptor
  }
}

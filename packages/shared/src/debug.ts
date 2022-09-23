import { inspect } from 'util'

let isDebugging = true

export function setDebugging(debugging: boolean): void {
  isDebugging = debugging
}

export function debug(
  printOnlyReturnStatement: boolean = true,
  transformArgs: (...args: any[]) => any[] = (...args) => args,
  transformReturn: (ret: any) => any = (ret) => ret,
): MethodDecorator {
  return (target, key, descriptor) => {
    const fn = descriptor?.value as unknown as (...args: any[]) => any
    descriptor.value = function (this: any, ...args: any[]): any {
      if (isDebugging && !printOnlyReturnStatement) {
        this.logger.debug(
          `(call) ${target.constructor.name}.${String(key)}`,
          inspect(transformArgs(...args), false, 100, false),
        )
      }
      const result = fn.apply(this, args)

      if (isDebugging) {
        this.logger.debug(
          `(return) ${target.constructor.name}.${String(key)}`,
          inspect(transformArgs(...args), false, 100, false),
          inspect(transformReturn(result), false, 100, false),
        )
      }

      return result
    } as any

    return descriptor
  }
}

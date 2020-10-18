import { performance } from 'perf_hooks';

export function Trace(context: string = ''): MethodDecorator {
  return (target, method, descriptor) => {
    if (typeof descriptor.value === 'function') {
      const fn = descriptor.value;
      function write(method: string, start: number) {
        console.debug(`[TRACE] ${context} ${method} ${performance.now() - start}`);
      }

      descriptor.value = function (this: unknown, ...args: unknown[]) {
        const start = performance.now();
        const name = `${context || Object.getPrototypeOf(this).name}::${method.toString()}`;
        try {
          const result = fn.apply(this, args);

          if (result instanceof Promise) {
            return result.finally(() => write(name, start));
          } else {
            write(name, start);
          }
        } catch (error) {
          write(name, start);
          throw error;
        }
      } as any;
    }
  };
}

export function wrapInTrace<T>(context: string, target: T): T {
  function write(method: string, start: number) {
    console.log(`[TRACE] ${context} ${method} ${performance.now() - start}`);
  }

  for (const method in target) {
    const fn = target[method];
    if (typeof fn === 'function') {
      target[method] = function (this: unknown, ...args: unknown[]) {
        const start = performance.now();
        try {
          const result = fn.apply(this, args);

          if (result instanceof Promise) {
            return result.finally(() => write(method, start));
          } else {
            write(method, start);

            return result;
          }
        } catch (error) {
          write(method, start);
          throw error;
        }
      } as any;
    }
  }

  return target;
}

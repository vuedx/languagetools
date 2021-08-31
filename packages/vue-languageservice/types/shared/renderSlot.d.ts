// -- renderSlot --
export function renderSlot<
  S extends Record<string, (...args: any) => any>,
  K extends keyof S
>(source: S, name: K, props: Parameters<S[K]>[0]): any

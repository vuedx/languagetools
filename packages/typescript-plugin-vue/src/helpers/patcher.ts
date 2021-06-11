const PATCHED_METHODS = Symbol('Vue Patched Methods')

export function tryPatchMethod<T extends object, K extends keyof T>(
  target: T,
  methodName: K,
  createOverride: (fn: T[K]) => T[K] extends undefined ? never : T[K],
): void {
  const patched: K[] = (target as any)[PATCHED_METHODS] ?? []
  if (patched.includes(methodName)) return
  let fn = target[methodName]
  if (typeof fn === 'function') {
    try {
      fn = fn.bind(target)
    } catch {
      // - ignore
    }
  }
  target[methodName] = createOverride(fn)
  patched.push(methodName)
  ;(target as any)[PATCHED_METHODS] = patched
}

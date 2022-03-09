export function isObject(obj: unknown): obj is object {
  return typeof obj === 'object' && obj !== null
}

export function isPlainObject(obj: unknown): obj is object {
  return (
    isObject(obj) &&
    (Object.getPrototypeOf(obj) === null ||
      Object.getPrototypeOf(obj) === Object.prototype)
  )
}

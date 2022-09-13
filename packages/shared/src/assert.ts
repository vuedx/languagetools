export function invariant(value: unknown, message?: string): asserts value {
  if (value == null || value === false) {
    throw new Error(message)
  }
}

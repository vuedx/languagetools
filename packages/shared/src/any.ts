/**
 * Loose non-null (non-undefined) filter.
 * This method can be used as predicate for Array methods.
 */
export function isNotNull<T>(value: T | null | undefined): value is T {
  return value != null
}

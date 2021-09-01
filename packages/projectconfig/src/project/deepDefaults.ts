import type { DeepPartial } from '@vuedx/shared'

export function deepDefaults<T extends object>(a: T, b?: DeepPartial<T>): T
export function deepDefaults(a: any, b: any): any {
  if (b == null) return a
  Object.keys(b).forEach((key) => {
    const valueA = a[key]
    const valueB = b[key]

    if (valueB === undefined) return
    if (valueA == null || Array.isArray(valueB)) {
      a[key] = valueB
    } else if (typeof valueA === 'object' && typeof valueB === 'object') {
      a[key] = deepDefaults(valueA, valueB)
    } else {
      a[key] = valueB
    }
  })

  return a
}

import type { Remote } from './types'

export async function set<T, K extends keyof T>(
  target: Remote<T>,
  property: K,
  value: T[K],
): Promise<void> {
  const t = target as T

  t[property] = value

  while (true) {
    const local = value
    const remote = await target[property]

    if (local === remote || JSON.stringify(local) === JSON.stringify(remote)) {
      break
    }
  }
}

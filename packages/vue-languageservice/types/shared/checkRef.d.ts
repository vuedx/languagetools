import type { Ref, unref } from '@vue/runtime-core'

type RefValue<T> = T extends (value: infer V) => unknown ? V : T

export function checkRef<T>(
  ref: T | ((value: T) => unknown) | null,
  element: RefValue<T>,
): Ref<T>
export { unref }

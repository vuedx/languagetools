import type { Ref } from '@vue/runtime-core'  // TODO: Move to v3 and remove this

type RefValue<T> = T extends (value: infer V) => unknown ? V : T

export function checkRef<T>(
  ref: T | ((value: T) => unknown) | null,
  element: RefValue<T>,
): Ref<T>

import type { Slot } from '@vue/runtime-core'

type Fallback<T, F> = T extends undefined ? F : T
type SlotProps<T extends Slot | undefined> = T extends (
  ...args: unknown[]
) => unknown
  ? Fallback<Parameters<T>[0], {}>
  : {}

// -- renderSlot --
export function renderSlot<
  S extends Readonly<{
    [name: string]: Slot | undefined
  }>,
  K extends keyof S
>(source: S, name: K, props: SlotProps<S[K]>): any

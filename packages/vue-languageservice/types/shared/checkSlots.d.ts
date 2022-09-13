export type SlotsFrom<T> = T extends new (...args: unknown[]) => {
  $slots: infer Slots
}
  ? Slots
  : {}

export function checkSlots<T>(
  component: T,
  slots: Partial<SlotsFrom<T>>,
): typeof slots

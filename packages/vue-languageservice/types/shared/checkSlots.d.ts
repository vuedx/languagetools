type SlotsFrom<T> = T extends abstract new (...args: unknown[]) => { $slots: infer Slots } ? Slots : {}

export function checkSlots<T>(tag: T, slots: Partial<SlotsFrom<T>>): any

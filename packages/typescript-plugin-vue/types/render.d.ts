// Render Helpers

// 1. v-for
export function _renderList(
  source: string,
  renderItem: (value: string, index: number) => any,
): any[]

export function _renderList(
  source: number,
  renderItem: (value: number, index: number) => any,
): any[]

export function _renderList<T>(
  source: T[],
  renderItem: (value: T, index: number) => any,
): any[]

export function _renderList<T>(
  source: Iterable<T>,
  renderItem: (value: T, index: number) => any,
): any[]

export function _renderList<T extends object>(
  source: T,
  renderItem: <K extends keyof T>(value: T[K], key: K, index: number) => any,
): any[]

// 2. v-slot
export function _renderSlot<
  T extends Record<string, ((...props: any[]) => any) | undefined>,
  K extends keyof T
>(
  slots: T,
  name: K,
  ...props: T[K] extends undefined ? any : Parameters<T[K]>
): any[]

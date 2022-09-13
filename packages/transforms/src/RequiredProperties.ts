export type RequiredProperties<T, K extends keyof T> = Pick<Required<T>, K> &
  Exclude<T, K>

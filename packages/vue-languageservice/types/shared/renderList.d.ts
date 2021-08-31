import { TupleToUnion } from './utils'

export function renderList<R>(
  source: string,
  handler: (value: string, index: number) => R,
): R[]
export function renderList<R>(
  source: number,
  handler: (value: number, index: number) => R,
): R[]
export function renderList<R>(
  source: number,
  handler: (value: number, index: number) => R,
): R[]
export function renderList<T, R>(
  source: T[],
  handler: (value: T, index: number) => R,
): R[]
export function renderList<T extends Readonly<unknown[]>, R>(
  source: T,
  handler: (value: TupleToUnion<T>, index: number) => R,
): R[]
export function renderList<T, R>(
  source: Iterable<T>,
  handler: (value: T, index: number) => R,
): R
export function renderList<T extends object, R>(
  source: T,
  handler: <K extends keyof T>(value: T[K], key: K, index: number) => R,
): R[]

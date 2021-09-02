export type TupleToUnion<T> = T extends Readonly<[infer F, ...infer R]>
  ? F | TupleToUnion<R>
  : T extends Readonly<Array<infer R>>
  ? R
  : never

type _HalfEquals<A, B> = (
  A extends unknown
    ? (
        B extends unknown
          ? A extends B
            ? B extends A
              ? keyof A extends keyof B
                ? keyof B extends keyof A
                  ? A extends object
                    ? _DeepHalfEquals<A, B, keyof A> extends true
                      ? 1
                      : never
                    : 1
                  : never
                : never
              : never
            : never
          : unknown
      ) extends never
      ? 0
      : never
    : unknown
) extends never
  ? true
  : false
type _DeepHalfEquals<A, B extends A, K extends keyof A> = (
  K extends unknown ? (Equals<A[K], B[K]> extends true ? never : 0) : unknown
) extends never
  ? true
  : false

export type Equals<A, B> = _HalfEquals<A, B> extends true
  ? _HalfEquals<B, A>
  : false

export type Exact<A, B, Y = unknown, N = never> = Equals<A, B> extends true
  ? Y
  : N

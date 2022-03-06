export type DeepPartial<T> = T extends {}
  ? {
      [P in keyof T]?: DeepPartial<T[P]>
    }
  : T

export type Opaque<T, N extends string> = T & { __type?: N }

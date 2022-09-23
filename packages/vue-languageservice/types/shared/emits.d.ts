/* eslint-disable @typescript-eslint/prefer-function-type */
import type { EmitsOptions, ObjectEmitsOptions } from '@vue/runtime-core'
import type { EventName } from './utils'

export type EmitsToProps<T extends EmitsOptions> = T extends string[]
  ? Partial<{
      [K in string & EventName<T[number]>]: (...args: any[]) => any
    }>
  : T extends ObjectEmitsOptions
  ? Partial<{
      [K in string &
        EventName<Capitalize<string & keyof T>>]: K extends `on${infer C}`
        ? T[Uncapitalize<C>] extends (...args: infer A) => any
          ? (...args: A) => any
          : () => any
        : never
    }>
  : {}

// // Quick Test: Event Names
// declare namespace T1 {
//   type T = EmitsToProps<['a', 'b']>
//   type T1 = T['onA']
//   type T2 = T['onB']
// }

// // Quick Test: Handler Types
// declare namespace T2 {
//   type T = EmitsToProps<{ a(value: string): void; b(value: number): void }>
//   type T1 = T['onA']
//   type T2 = T['onB']
// }

type Handler<K, A extends unknown[], R> = {
  [P in string & K]: (...args: A) => R
}

/**
 * Support upto 10 overloads.
 */
export type EmitTypeToEmits<F> = F extends {
  (event: infer E0, ...args: infer A0): infer R0
  (event: infer E1, ...args: infer A1): infer R1
  (event: infer E2, ...args: infer A2): infer R2
  (event: infer E3, ...args: infer A3): infer R3
  (event: infer E4, ...args: infer A4): infer R4
  (event: infer E5, ...args: infer A5): infer R5
  (event: infer E6, ...args: infer A6): infer R6
  (event: infer E7, ...args: infer A7): infer R7
  (event: infer E8, ...args: infer A8): infer R8
  (event: infer E9, ...args: infer A9): infer R9
}
  ? Handler<E0, A0, R0> &
      Handler<E1, A1, R1> &
      Handler<E2, A2, R2> &
      Handler<E3, A3, R3> &
      Handler<E4, A4, R4> &
      Handler<E5, A5, R5> &
      Handler<E6, A6, R6> &
      Handler<E7, A7, R7> &
      Handler<E8, A8, R8> &
      Handler<E9, A9, R9>
  : F extends {
      (event: infer E0, ...args: infer A0): infer R0
      (event: infer E1, ...args: infer A1): infer R1
      (event: infer E2, ...args: infer A2): infer R2
      (event: infer E3, ...args: infer A3): infer R3
      (event: infer E4, ...args: infer A4): infer R4
      (event: infer E5, ...args: infer A5): infer R5
      (event: infer E6, ...args: infer A6): infer R6
      (event: infer E7, ...args: infer A7): infer R7
      (event: infer E8, ...args: infer A8): infer R8
    }
  ? Handler<E0, A0, R0> &
      Handler<E1, A1, R1> &
      Handler<E2, A2, R2> &
      Handler<E3, A3, R3> &
      Handler<E4, A4, R4> &
      Handler<E5, A5, R5> &
      Handler<E6, A6, R6> &
      Handler<E7, A7, R7> &
      Handler<E8, A8, R8>
  : F extends {
      (event: infer E0, ...args: infer A0): infer R0
      (event: infer E1, ...args: infer A1): infer R1
      (event: infer E2, ...args: infer A2): infer R2
      (event: infer E3, ...args: infer A3): infer R3
      (event: infer E4, ...args: infer A4): infer R4
      (event: infer E5, ...args: infer A5): infer R5
      (event: infer E6, ...args: infer A6): infer R6
      (event: infer E7, ...args: infer A7): infer R7
    }
  ? Handler<E0, A0, R0> &
      Handler<E1, A1, R1> &
      Handler<E2, A2, R2> &
      Handler<E3, A3, R3> &
      Handler<E4, A4, R4> &
      Handler<E5, A5, R5> &
      Handler<E6, A6, R6> &
      Handler<E7, A7, R7>
  : F extends {
      (event: infer E0, ...args: infer A0): infer R0
      (event: infer E1, ...args: infer A1): infer R1
      (event: infer E2, ...args: infer A2): infer R2
      (event: infer E3, ...args: infer A3): infer R3
      (event: infer E4, ...args: infer A4): infer R4
      (event: infer E5, ...args: infer A5): infer R5
      (event: infer E6, ...args: infer A6): infer R6
    }
  ? Handler<E0, A0, R0> &
      Handler<E1, A1, R1> &
      Handler<E2, A2, R2> &
      Handler<E3, A3, R3> &
      Handler<E4, A4, R4> &
      Handler<E5, A5, R5> &
      Handler<E6, A6, R6>
  : F extends {
      (event: infer E0, ...args: infer A0): infer R0
      (event: infer E1, ...args: infer A1): infer R1
      (event: infer E2, ...args: infer A2): infer R2
      (event: infer E3, ...args: infer A3): infer R3
      (event: infer E4, ...args: infer A4): infer R4
      (event: infer E5, ...args: infer A5): infer R5
    }
  ? Handler<E0, A0, R0> &
      Handler<E1, A1, R1> &
      Handler<E2, A2, R2> &
      Handler<E3, A3, R3> &
      Handler<E4, A4, R4> &
      Handler<E5, A5, R5>
  : F extends {
      (event: infer E0, ...args: infer A0): infer R0
      (event: infer E1, ...args: infer A1): infer R1
      (event: infer E2, ...args: infer A2): infer R2
      (event: infer E3, ...args: infer A3): infer R3
      (event: infer E4, ...args: infer A4): infer R4
    }
  ? Handler<E0, A0, R0> &
      Handler<E1, A1, R1> &
      Handler<E2, A2, R2> &
      Handler<E3, A3, R3> &
      Handler<E4, A4, R4>
  : F extends {
      (event: infer E0, ...args: infer A0): infer R0
      (event: infer E1, ...args: infer A1): infer R1
      (event: infer E2, ...args: infer A2): infer R2
      (event: infer E3, ...args: infer A3): infer R3
    }
  ? Handler<E0, A0, R0> &
      Handler<E1, A1, R1> &
      Handler<E2, A2, R2> &
      Handler<E3, A3, R3>
  : F extends {
      (event: infer E0, ...args: infer A0): infer R0
      (event: infer E1, ...args: infer A1): infer R1
      (event: infer E2, ...args: infer A2): infer R2
    }
  ? Handler<E0, A0, R0> & Handler<E1, A1, R1> & Handler<E2, A2, R2>
  : F extends {
      (event: infer E0, ...args: infer A0): infer R0
      (event: infer E1, ...args: infer A1): infer R1
    }
  ? Handler<E0, A0, R0> & Handler<E1, A1, R1>
  : F extends {
      (event: infer E0, ...args: infer A0): infer R0
    }
  ? Handler<E0, A0, R0>
  : {}

// Quick Test: Emit Type to Emits (in limited cases)
declare namespace T3 {
  type T = EmitTypeToEmits<{
    (event: 'a', value: string): void
    (event: 'b', value: number): void
  }>

  type T1 = T['a']
  type T2 = T['b']
}

// // Quick Test: Emit Type to Emits (more than 10 overloads)
// declare namespace T5 {
//   type T = EmitTypeToEmits<{
//     (event: 'a', value: string): void
//     (event: 'b', value: number): void
//     (event: 'c', value: boolean): void
//     (event: 'd', value: string): void
//     (event: 'e', value: number): void
//     (event: 'f', value: boolean): void
//     (event: 'g', value: string): void
//     (event: 'h', value: number): void
//     (event: 'i', value: boolean): void
//     (event: 'j', value: string): void
//     (event: 'k', value: number): void
//   }>

//   type T1 = T['a']
//   type T2 = T['b']
// }

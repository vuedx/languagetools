import type { PropsOf } from './Props'
import {
  EventName,
  Get,
  KnownKeys,
  OnlyEventNames,
  RemoveOnPrefix,
} from './utils'

export function checkHTMLElementType<K extends string>(
  tag: K,
  instance: unknown,
): instance is K extends keyof KnownKeys<HTMLElementTagNameMap>
  ? HTMLElementTagNameMap[K]
  : K extends keyof KnownKeys<SVGElementTagNameMap>
  ? SVGElementTagNameMap[K]
  : EventTarget

export function checkOnDirective<
  IntrinsicElements,
  T,
  A extends GetArg<IntrinsicElements, T>,
>(
  intrinsicElements: IntrinsicElements,
  tag: T,
  arg: A & GetArg<IntrinsicElements, T>,
  exp: GetExp<IntrinsicElements, T, A>,
  modifiers: Partial<Record<GetModifiers<IntrinsicElements, T, A>, boolean>>,
): void

type MouseEventNames =
  | 'auxclick'
  | 'click'
  | 'contextmenu'
  | 'dbclick'
  | 'mousedown'
  | 'mouseenter'
  | 'mousemove'
  | 'mouseleave'
  | 'mouseout'
  | 'mouseover'
  | 'mouseup'
  | 'wheel'
type PointerEventNames =
  | 'pointerdown'
  | 'pointermove'
  | 'pointerup'
  | 'pointercancel'
  | 'pointerenter'
  | 'pointerleave'
  | 'pointerover'
  | 'pointerout'
type KeyboardEventNames = 'keydown' | 'keypress' | 'keyup'
type ModifiersForNativeEvent<EventName> =
  | 'once'
  | 'stop'
  | 'prevent'
  | 'capture'
  | 'self'
  | 'passive'
  | (EventName extends KeyboardEventNames
      ?
          | 'enter'
          | 'tab'
          | 'delete'
          | 'esc'
          | 'space'
          | 'left'
          | 'right'
          | 'up'
          | 'down'
          | 'ctrl'
          | 'alt'
          | 'shift'
          | 'meta'
          | 'exact'
      : never)
  | (EventName extends PointerEventNames
      ?
          | 'left'
          | 'right'
          | 'middle'
          | 'ctrl'
          | 'alt'
          | 'shift'
          | 'meta'
          | 'exact'
      : never)
  | (EventName extends MouseEventNames
      ?
          | 'left'
          | 'right'
          | 'middle'
          | 'ctrl'
          | 'alt'
          | 'shift'
          | 'meta'
          | 'exact'
      : never)

type GetArg<IntrinsicElements, T> = RemoveOnPrefix<
  OnlyEventNames<keyof PropsOf<IntrinsicElements, T>>
>

type GetExp<IntrinsicElements, T, A extends GetArg<IntrinsicElements, T>> = Get<
  PropsOf<IntrinsicElements, T>,
  EventName<A>
>

type GetModifiers<IntrinsicElements, T, A> =
  T extends keyof KnownKeys<IntrinsicElements>
    ? A extends GetArg<IntrinsicElements, T>
      ? ModifiersForNativeEvent<A>
      : never
    : never

// Quick Test:
// type P = PropsOf<IntrinsicElements, 'div'>
// type A = GetArg<IntrinsicElements, 'div'>

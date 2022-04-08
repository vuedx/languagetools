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
): instance is K extends keyof HTMLElementTagNameMap
  ? HTMLElementTagNameMap[K]
  : K extends keyof SVGElementTagNameMap
  ? SVGElementTagNameMap[K]
  : EventTarget

export function checkOnDirective<
  T,
  A extends GetArg<T>,
  E extends GetExp<T, A>,
  M extends GetModifiers<T, A>
>(tag: T, arg: A, exp: E, modifiers: Partial<Record<M, boolean>>): E

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

type GetArg<T> = T extends keyof KnownKeys<JSX.IntrinsicElements>
  ? RemoveOnPrefix<OnlyEventNames<keyof JSX.IntrinsicElements[T]>>
  : RemoveOnPrefix<OnlyEventNames<keyof PropsOf<T>>>

type GetExp<T, A extends GetArg<T>> = T extends keyof KnownKeys<
  JSX.IntrinsicElements
>
  ? Get<JSX.IntrinsicElements[T], EventName<A>>
  : Get<PropsOf<T>, EventName<A>>

type GetModifiers<T, A> = T extends keyof KnownKeys<JSX.IntrinsicElements>
  ? A extends GetArg<T>
    ? ModifiersForNativeEvent<A>
    : never
  : never

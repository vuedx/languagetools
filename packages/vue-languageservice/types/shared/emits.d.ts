import type { EmitsOptions, ObjectEmitsOptions } from '@vue/runtime-core';  // TODO: Move to v3 and remove this
import type { EventName } from './utils';

export type EmitsToProps<T extends EmitsOptions> = T extends string[] ? {
  [K in string & EventName<T[number]>]?: (...args: any[]) => any;
} : T extends ObjectEmitsOptions ? {
  [K in string & EventName<Capitalize<string & keyof T>>]?: K extends `on${infer C}` ? T[Uncapitalize<C>] extends null ? (...args: any[]) => any : (...args: T[Uncapitalize<C>] extends (...args: infer P) => any ? P : never) => any : never;
} : {};

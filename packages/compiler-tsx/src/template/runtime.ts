export function getRuntimeFn(
  prefix: string,
  name:
    | 'checkDirective'
    | 'checkOnDirective'
    | 'checkSlots'
    | 'first'
    | 'flat'
    | 'guard'
    | 'record'
    | 'renderList'
    | 'resolveComponent'
    | 'resolveDirective'
    | 'union'
    | 'getAttrs'
    | 'getProps'
    | 'unref',
): string {
  return `${prefix}.internal.${name}`
}

export function getRuntimeFn(
  prefix: string,
  name:
    | 'checkDirective'
    | 'checkOnDirective'
    | 'checkSlots'
    | 'flat'
    | 'guard'
    | 'renderList'
    | 'resolveComponent'
    | 'resolveDirective'
    | 'union'
    | 'getAttrs'
    | 'getProps',
): string {
  return `${prefix}.internal.${name}`
}

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
    | 'union',
): string {
  return `${prefix}.internal.${name}`
}

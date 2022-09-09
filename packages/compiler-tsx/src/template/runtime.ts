export function getRuntimeFn(
  prefix: string,
  name: 'renderList' | 'flat' | 'resolveComponent' | 'resolveDirective',
): string {
  return `${prefix}TypeCheck.internal.${name}`
}

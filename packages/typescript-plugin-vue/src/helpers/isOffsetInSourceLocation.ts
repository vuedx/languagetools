import { SourceLocation } from '@vuedx/template-ast-types'

export function isOffsetInSourceLocation(
  loc: SourceLocation | null | undefined,
  offset: number,
): loc is SourceLocation {
  if (loc == null) return false

  return loc.start.offset <= offset && offset <= loc.end.offset
}

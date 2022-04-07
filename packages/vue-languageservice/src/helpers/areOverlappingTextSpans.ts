import type { TypeScript } from '../contracts/TypeScript'

export function areOverlappingTextSpans(
  a: TypeScript.TextSpan,
  b: TypeScript.TextSpan,
): boolean {
  const aStart = a.start
  const aEnd = a.start + a.length
  const bStart = b.start
  const bEnd = b.start + b.length

  return aStart <= bEnd && bStart <= aEnd
}

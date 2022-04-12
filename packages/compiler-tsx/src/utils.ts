import type { Position, SourceLocation } from '@vue/compiler-core'

export function advancePositionWithClone(
  pos: Position,
  source: string,
  numberOfCharacters: number = source.length,
): Position {
  return advancePositionWithMutation(
    Object.assign({}, pos),
    source,
    numberOfCharacters,
  )
}

// advance by mutation without cloning (for performance reasons), since this
// gets called a lot in the parser
export function advancePositionWithMutation(
  pos: Position,
  source: string,
  numberOfCharacters: number = source.length,
): Position {
  let linesCount = 0
  let lastNewLinePos = -1
  for (let i = 0; i < numberOfCharacters; i++) {
    if (source.charCodeAt(i) === 10 /* newline char code */) {
      linesCount++
      lastNewLinePos = i
    }
  }

  pos.offset += numberOfCharacters
  pos.line += linesCount
  pos.column =
    lastNewLinePos === -1
      ? pos.column + numberOfCharacters
      : numberOfCharacters - lastNewLinePos

  return pos
}

export function createLoc(
  loc: SourceLocation,
  offset: number,
  length: number,
): SourceLocation
export function createLoc(
  loc: undefined,
  offset: number,
  length: number,
): undefined
export function createLoc(
  loc: SourceLocation | undefined,
  offset: number,
  length: number,
): SourceLocation | undefined {
  if (loc == null) return

  const source = loc.source.slice(offset, offset + length)
  const start = advancePositionWithClone(loc.start, loc.source.slice(0, offset))
  const end = advancePositionWithClone(start, source)

  return { source, start, end }
}

export function sliceLoc(
  loc: SourceLocation,
  start: number,
  end?: number,
): SourceLocation
export function sliceLoc(loc: undefined, start: number, end?: number): undefined
export function sliceLoc(
  loc: SourceLocation | undefined,
  start: number,
  end?: number,
): SourceLocation | undefined {
  if (loc == null) return
  if (end == null) {
    end = loc.source.length
  } else if (end < 0) {
    end = loc.source.length + end
  }

  if (start < 0) {
    start = loc.source.length + start
  }

  return createLoc(loc, start, Math.max(0, end - start))
}

export function transformText(content: string): string {
  return /[<{}>]/i.test(content) ? `{${JSON.stringify(content)}}` : content
}

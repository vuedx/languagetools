import { Position, SourceLocation, assert } from '@vue/compiler-core';
import camelCase from 'lodash.camelcase';

export { camelCase };
export function pascalCase(name: string) {
  name = camelCase(name);

  return name.substr(0, 1).toUpperCase() + name.substr(1);
}

export function advancePositionWithClone(
  pos: Position,
  source: string,
  numberOfCharacters: number = source.length
): Position {
  return advancePositionWithMutation(Object.assign({}, pos), source, numberOfCharacters);
}

// advance by mutation without cloning (for performance reasons), since this
// gets called a lot in the parser
export function advancePositionWithMutation(
  pos: Position,
  source: string,
  numberOfCharacters: number = source.length
): Position {
  let linesCount = 0;
  let lastNewLinePos = -1;
  for (let i = 0; i < numberOfCharacters; i++) {
    if (source.charCodeAt(i) === 10 /* newline char code */) {
      linesCount++;
      lastNewLinePos = i;
    }
  }

  pos.offset += numberOfCharacters;
  pos.line += linesCount;
  pos.column = lastNewLinePos === -1 ? pos.column + numberOfCharacters : numberOfCharacters - lastNewLinePos;

  return pos;
}

export function createLoc(loc: SourceLocation | undefined, offset: number, length: number): SourceLocation | undefined {
  if (!loc) return;

  const source = loc.source.substr(offset, length);
  const start = advancePositionWithClone(loc.start, loc.source.substr(0, offset));
  const end = advancePositionWithClone(start, source);

  return { source, start, end };
}

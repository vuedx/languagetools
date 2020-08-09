import { Position, SourceLocation } from '@vue/compiler-core';
const cacheStringFunction = <T extends (str: string) => string>(fn: T): T => {
  const cache: Record<string, string> = Object.create(null);
  return ((str: string) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  }) as any;
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */
export const camelize = cacheStringFunction((str: string): string => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});

const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */
export const hyphenate = cacheStringFunction((str: string): string => {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});

/**
 * @private
 */
export const capitalize = cacheStringFunction((str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

export const pascalCase = cacheStringFunction((str: string) => capitalize(camelize(str)));
export const kebabCase = hyphenate;

export function isKebabCase(str: string) {
  return str.includes('-');
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

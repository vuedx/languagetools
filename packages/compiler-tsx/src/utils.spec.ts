import type { SourceLocation } from '@vue/compiler-core'
import { createLoc } from './utils'

describe(createLoc, () => {
  it('should create sub-loc', () => {
    const source = '\n  <\n  '
    const loc: SourceLocation = {
      start: {
        column: 1,
        line: 1,
        offset: 0,
      },
      end: {
        column: 3,
        line: 3,
        offset: 7,
      },
      source,
    }

    expect(createLoc(loc, source.indexOf('<'), source.trim().length)).toEqual(
      expect.objectContaining({
        source: '<',
      }),
    )
  })
})

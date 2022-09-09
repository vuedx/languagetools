import { TextSpan, VueSFCDocument } from '../src'

expect.addSnapshotSerializer({
  serialize(val) {
    return String(val)
  },
  test(val) {
    return typeof val === 'string'
  },
})

describe('sourcemaps', () => {
  beforeEach(() => {
    jest.spyOn(console, 'debug').mockImplementation(() => {})
  })

  test(`directives`, () => {
    const code = `
    <template>
      <B a="" @a="onNum" @b.once="onNum" @c="call.a['func']($event)" />
    </template>
    `
    const file = getTemplateFile(code)
    const first = code.indexOf('onNum')
    const second = code.indexOf('onNum', first)
    const once = code.indexOf('once')
    const call = code.indexOf('call.a')
    const event = code.indexOf('$event')

    const spans: TextSpan[] = [
      { start: first, length: 5 },
      { start: first + 3, length: 2 },
      { start: second, length: 5 },
      { start: second + 3, length: 2 },
      { start: once, length: 4 },
      { start: call + 6, length: 8 },
      { start: event, length: 6 },
    ]

    spans.forEach((span) => {
      expect(
        file.snapshot(span, 2, 'original') +
          '\n----\n' +
          file.snapshot(file.doc.findGeneratedTextSpan(span)),
      ).toMatchSnapshot()
    })
  })
})

function getTemplateFile(code: string) {
  const file = VueSFCDocument.create('/foo/bar/Example.vue', code)

  function original(range: TextSpan) {
    return file.original
      .getText()
      .slice(range.start, range.start + range.length)
  }

  function generated(range: TextSpan) {
    return file.generated
      .getText()
      .slice(range.start, range.start + range.length)
  }

  function snapshot(
    range: TextSpan | null,
    size = 2,
    kind: 'generated' | 'original' = 'generated',
  ) {
    if (range == null) throw new Error('Range is null')
    const source = kind === 'generated' ? file.generated : file.original
    const text = source.getText()
    const line = (start: number) => {
      const index = text.indexOf('\n', start)
      if (index >= 0) return text.substring(start, index)
      return text.substring(start)
    }
    const { line: L, character: C } = source.positionAt(range.start)
    const lines: string[] = []
    for (let i = 1; i <= size && L - i >= 0; ++i) {
      const start = source.offsetAt({ line: L - i, character: 0 })
      lines.unshift(line(start))
    }

    const start = source.offsetAt({ line: L, character: 0 })
    lines.push(line(start))
    lines.push(
      ' '.repeat(C) +
        '^'.repeat(range.length) +
        ` > ${range.length} at ${range.start}`,
    )

    for (let i = 1; i <= size && L + i < source.lineCount; ++i) {
      const start = source.offsetAt({ line: L + i, character: 0 })
      lines.push(line(start))
    }

    return lines.join('\n')
  }

  return { doc: file, original, generated, snapshot }
}

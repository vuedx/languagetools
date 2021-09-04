import { VueBlockDocument, VueSFCDocument } from '../src'

expect.addSnapshotSerializer({
  serialize(val) {
    return String(val)
  },
  test(val) {
    return typeof val === 'string'
  },
})

describe('VueBlockDocument', () => {
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

    expect(file.snapshot(file.doc.generatedOffetAndLengthAt(first, 5)))
      .toMatchInlineSnapshot(`
          {
             arg: "a" as const, 
             exp: onNum,
                  ^^^^^ > 5 at 707
          },
        ])}
`)
    expect(file.snapshot(file.doc.generatedOffetAndLengthAt(first + 3, 2)))
      .toMatchInlineSnapshot(`
          {
             arg: "a" as const, 
             exp: onNum,
                     ^^ > 2 at 710
          },
        ])}
`)

    expect(file.snapshot(file.doc.generatedOffetAndLengthAt(second, 5)))
      .toMatchInlineSnapshot(`
          {
             arg: "a" as const, 
             exp: onNum,
                  ^^^^^ > 5 at 707
          },
        ])}
`)

    expect(file.snapshot(file.doc.generatedOffetAndLengthAt(second + 3, 2)))
      .toMatchInlineSnapshot(`
          {
             arg: "a" as const, 
             exp: onNum,
                     ^^ > 2 at 710
          },
        ])}
`)

    expect(file.snapshot(file.doc.generatedOffetAndLengthAt(once, 4)))
      .toMatchInlineSnapshot(`
             arg: "b" as const, 
             exp: onNum,
             modifiers: [ "once", ],
                          ^^^^^^ > 6 at 883
          },
        ])}
`)
    expect(file.snapshot(file.doc.generatedOffetAndLengthAt(call + 6, 8)))
      .toMatchInlineSnapshot(`
             arg: "c" as const, 
             exp: ($event) => {
              call.a['func']($event)
                    ^^^^^^^^ > 8 at 1064
            },
          },
`)
    expect(file.snapshot(file.doc.generatedOffetAndLengthAt(event, 6)))
      .toMatchInlineSnapshot(`
             arg: "c" as const, 
             exp: ($event) => {
              call.a['func']($event)
                             ^^^^^^ > 6 at 1073
            },
          },
`)
  })
})

function getTemplateFile(code: string) {
  const doc = VueSFCDocument.create('/foo/bar/Example.vue', code)
  const file = doc.getDoc(doc.descriptor.template!)!

  function original(
    range: ReturnType<VueBlockDocument['generatedOffetAndLengthAt']>,
  ) {
    return file.source.getText().substr(range.offset, range.length)
  }

  function generated(
    range: ReturnType<VueBlockDocument['generatedOffetAndLengthAt']>,
  ) {
    return file.generated!.getText().substr(range.offset, range.length)
  }

  function snapshot(
    range: ReturnType<VueBlockDocument['generatedOffetAndLengthAt']>,
    size = 2,
  ) {
    const text = file.generated!.getText()
    const line = (start: number) => {
      const index = text.indexOf('\n', start)
      if (index >= 0) return text.substring(start, index)
      return text.substring(start)
    }
    const { line: L, character: C } = file.generated!.positionAt(range.offset)
    const lines: string[] = []
    for (let i = 1; i <= size && L - i >= 0; ++i) {
      const start = file.generated!.offsetAt({ line: L - i, character: 0 })
      lines.unshift(line(start))
    }

    const start = file.generated!.offsetAt({ line: L, character: 0 })
    lines.push(line(start))
    lines.push(
      ' '.repeat(C) +
        '^'.repeat(range.length) +
        ` > ${range.length} at ${range.offset}`,
    )

    for (let i = 1; i <= size && L + i < file.generated!.lineCount; ++i) {
      const start = file.generated!.offsetAt({ line: L + i, character: 0 })
      lines.push(line(start))
    }

    return lines.join('\n')
  }

  return { doc: file, original, generated, snapshot }
}

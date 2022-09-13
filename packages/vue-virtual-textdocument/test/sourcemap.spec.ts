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
      checkGeneratedSpan(file, span)
    })
  })

  test(`v-text`, () => {
    const code = `
    <template>
      <div v-text="a" />
    </template>
    `

    const file = getTemplateFile(code)
    const offset = code.indexOf('"a"') + 1

    checkGeneratedSpan(file, { start: offset, length: 1 })
  })
  test.only(`v-on shorthand`, () => {
    const code = `
    <template>
      <B a="" @a="onStr" />
    </template>
    `

    const file = getTemplateFile(code)
    const offset = code.indexOf('@a') + 1

    checkGeneratedSpan(file, { start: offset, length: 1 })
  })

  test(`component`, () => {
    const code = `
<script setup lang="ts">
import { ref } from 'vue'

const a = ref(false)
let b  = 5
let c: { foo: string} | undefined
</script>

<template>
  <div v-text="a" />
  <div v-text="b" />
  <div v-text="c" />
  <div v-text="c?.foo" />
</template>
    `
    const file = getTemplateFile(code)

    expect(file.doc.generated.getText()).toMatchSnapshot()
  })
})

function checkGeneratedSpan(
  file: ReturnType<typeof getTemplateFile>,
  original: TextSpan,
) {
  const generated = file.doc.findGeneratedTextSpan(original)
  if (generated == null) throw new Error('Generated span is null')
  checkSnapshot(file, original, generated)
  const original2 = file.doc.findOriginalTextSpan(generated)
  if (original2 == null) throw new Error('Original span is null')
  checkSnapshot(file, original2, generated)
}

function checkSnapshot(
  file: ReturnType<typeof getTemplateFile>,
  original: TextSpan,
  generated: TextSpan,
) {
  const first = file.snapshot(original, 2, 'original')
  const second = file.snapshot(generated, 2, 'generated')
  expect(`${first}\n----\n${second}`).toMatchSnapshot()
}

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
        ` > ${range.length} at ${range.start} (${L}:${C})`,
    )

    for (let i = 1; i <= size && L + i < source.lineCount; ++i) {
      const start = source.offsetAt({ line: L + i, character: 0 })
      lines.push(line(start))
    }

    return lines.join('\n')
  }

  return { doc: file, original, generated, snapshot }
}

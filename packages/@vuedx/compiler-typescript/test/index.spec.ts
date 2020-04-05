import { compile } from '../src'

describe('compiler', () => {
  test('one', () => {
    const result = compile(
      `
      <Foo v-if="bar" id="foo" />
      <Bar v-else v-for="foo of bars" />
      `,
      { filename: './example.vue', components: { Foo: './foo.vue' } }
    )

    expect(result.code).toMatchSnapshot()
  })
})

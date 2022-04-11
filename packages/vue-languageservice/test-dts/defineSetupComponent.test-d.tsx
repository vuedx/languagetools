import { expectType } from 'tsd'

describe('definePropsWithDefaults', () => {
  const props = withDefaults(
    defineProps<{
      foo: string
      bar: number
    }>(),
    { bar: 1 },
  )

  const Component = VueDX.internal.defineSetupComponent(props, {}, {}, {})
  const attrs: VueDX.internal.PropsOf<typeof Component> = {} as any

  expectType<{ foo: string; bar?: number }>(attrs)
})

import { defineComponent } from 'vue'

type Props = {
  foo: string
}

const A = defineComponent({
  props: {
    foo: {
      type: String,
      required: true,
    },
  },
})
const B = defineComponent((props: Props) => {
  return {}
})

const a = <A />
const b = <B />

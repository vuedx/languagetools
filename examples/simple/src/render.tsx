import { defineComponent, ref, computed } from 'vue'


const _Ctx = defineComponent({
  props: {
    example: String
  },
  setup(props) {
    return {
      isFoo: props.example in props,
    }
  }
})

export function render({bar, isFoo}: InstanceType<typeof _Ctx>) {
  return /*@@vue:start*/<div>{bar} {isFoo}</div>/*@@vue:end*/
}
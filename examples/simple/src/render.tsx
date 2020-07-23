import { defineComponent } from 'vue'

const _Ctx = defineComponent({
  props: {
    hello: String,
  },
  setup() {
    return { 
      style: 'color: red', 
      handleHover: (event: MouseEvent) => console.log(event) 
    }
  }
})


export function render(_ctx: InstanceType<typeof _Ctx>) {
  return (
    <div style={_ctx.style} onMouseover={_ctx.handleHover}>
      {_ctx.hello} world
    </div>
  );
}

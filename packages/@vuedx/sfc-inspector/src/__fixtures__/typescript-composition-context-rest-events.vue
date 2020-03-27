<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    foo: String,
    bar: Number,
  },
  setup(props, { slots, ...context }) {
    function doSomething() {
      context.emit('event1', props.foo)
    }

    return () => doSomething()
  },
})
</script>

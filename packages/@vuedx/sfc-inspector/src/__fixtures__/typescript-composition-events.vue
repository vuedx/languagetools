<script lang="ts">
import { defineComponent } from 'vue'

/**
 * @emits {string} event2 Emitted when something happens.
 */
export default /** @emits {number} event3 */ defineComponent({
  props: {
    foo: String,
    bar: Number,
  },
  setup(props, { emit }) {
    function doSomething() {
      emit('event1', props.foo)
    }

    return () => doSomething()
  },
})
</script>

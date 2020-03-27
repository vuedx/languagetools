<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    foo: String,
    bar: [String, Number],
    /** Merge comments */
    /**
     * @type {{foo: string}}
     * @param {{foo: string}} foo hello world
     */
    baz: {
      type: Object,
      default: () => ({ foo: 'just do it!' }),
    },
    /**
     * It's a prop.
     * @deprecated
     */
    bam: {
      type: [String, Number, Boolean],
      required: true,
      default(props) {
        return props.foo + 5
      },
    },
    /**
     * Nope
     * @private
     */
    bak: {
      type: [String, null],
      default: 'just do it!',
    },
  },
})
</script>

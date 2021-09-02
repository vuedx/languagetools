<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    a: { type: String, required: true },
    b: Number,
    c: null as unknown as PropType<{ foo?: string }>
  },
  emits: {
    a: (_payload: string):void => {},
    b: (_payload?: number):void => {},
    c: (_payload?: { foo?: string }):void => {},
  }
})
</script>

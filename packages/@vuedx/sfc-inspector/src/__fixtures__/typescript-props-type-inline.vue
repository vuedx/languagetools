<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent<{
  foo: string
  bar: { foo: string; bar: number }
}>({
  props: ['foo', 'bar'],
})
</script>

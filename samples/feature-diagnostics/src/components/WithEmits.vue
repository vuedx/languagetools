<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: {
    wave: () => true,
  },
  props: {
    msg: String,
  },
  setup(_, { emit }) {
    return {
      wave: () => emit('wave'),
    }
  },
})
</script>

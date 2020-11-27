<script lang="ts">
import { defineComponent } from 'vue'
import WithEmits from './components/WithEmits.vue'

export default defineComponent({
  components: { WithEmits },
})
</script>

<template>
  <WithEmits @wave="console.log($event)" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Example1 from '@/example1.vue'
import Example2 from '@/example2'
import Example3 from './example2'
import Example4 from './example1.vue'
import Example5 from '@foo'
import Example6 from '@bar'

export default defineComponent({
  props: {},
  setup(props) {},
  components: { Example1, Example2, Example3, Example4, Example5, Example6 },
})
</script>

<template>
  <div />
</template>

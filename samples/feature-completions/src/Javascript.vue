<script>
import { ref, defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  components: { HelloWorld },
  props: {
    name: String,
    email: { type: String },
    code: [String, Number],
  },
  setup() {
    const fullname = ref('')

    function increment() {}

    return { fullname, altCode: 1, increment }
  },
})
</script>

<template>
  <HelloWorld n />
  <span>Name: {{ fullName }}</span>
</template>

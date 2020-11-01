<script>
import { ref } from 'vue'
import {} from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
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
}
</script>

<template>
  <HelloWorld name="Jane" />
  <p>
    <span>Name: {{ name }}</span>
    <span>Email: {{ email }}</span>
    <span>Code: {{ code }}</span>
  </p>
  <p>
    <span>FullName: {{ fullname }}</span>
    <span>AltCode: {{ altCode }}</span>
  </p>
  <p>
    <span>Increment: {{ increment }}</span>
  </p>
</template>

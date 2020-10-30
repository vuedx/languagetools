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

    return { fullname, altCode: 1 }
  },
})
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
</template>

<script>
import { ref, computed } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: { HelloWorld: HelloWorld },
  props: {
    name: { type: String },
    email: { type: String, required: true },
    code: { type: Number },
  },
  setup() {
    const one = ref(1)
    const two = computed(() => one.value * 2)

    function increase() {
      one.value += 1
    }

    function decrease() {
      one.value -= 1
    }

    return { one, two, increase, decrease }
  },
}
</script>

<template>
  <div>
    <HelloWorld name="Jane" />

    <p v-if="one">
      <button @click="decrease">-</button>
      {{ one }}
      <button @click="increase">+</button>

      and double is {{ two }}
    </p>

    <div v-if="one">{{ two }}</div>
    <div v-else-if="two">{{ one }}</div>
    <div v-else>{{ one + two }}</div>

    <div v-if="one">
      <div v-for="item in one">{{ item }} {{ two }}</div>
    </div>
  </div>
  <p>Name: {{ name }} Email: {{ email }} Code: {{ code }}</p>
</template>

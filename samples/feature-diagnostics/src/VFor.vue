<script lang="ts">
import { defineComponent, ref } from 'vue'

function* sequence() {
  yield 1
  yield 2
  yield 3
}
export default defineComponent({
  setup() {
    const num = ref(5)
    const str = ref('foo')
    const arr = ref([{ value: 1 }, { value: 2 }])
    const obj = ref({ foo: 1, bar: 2 })
    const itr = ref(sequence())
    const boo = ref(true)
    const sym = ref(Symbol('s'))

    return { num, str, arr, obj, itr, boo, sym }
  },
})
</script>

<template>
  <div v-for="n of num">{{ n }}</div>
  <div v-for="(n, i) of num">{{ n }}:{{ i }}</div>
  <div v-for="s of str">{{ s }}</div>
  <div v-for="(s, i) of str">{{ s }}:{{ i }}</div>
  <div v-for="a of arr">{{ a }}</div>
  <div v-for="{ value } of arr">{{ value }}</div>
  <div v-for="{ foo } of arr">{{ arr }}</div>
  <div v-for="(a, i) of arr">{{ a }}:{{ i }}</div>
  <div v-for="({ value }, i) of arr">{{ value }}:{{ i }}</div>
  <div v-for="o of obj">{{ o }}</div>
  <div v-for="(o, k) of obj">{{ o }}:{{ k }}</div>
  <div v-for="(o, k, i) of obj">{{ o }}:{{ k }}:{{ i }}</div>
  <div v-for="t of itr">{{ t }}</div>
  <div v-for="b of boo">{{ b }}</div>
  <div v-for="s of sym">{{ s }}</div>
</template>

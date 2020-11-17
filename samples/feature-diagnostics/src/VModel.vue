<script lang="ts">
import { defineComponent, ref, computed, reactive, readonly } from 'vue'

export default defineComponent({
  setup() {
    const asRef = ref(5)
    const asComputed = computed(() => 5)
    const asComputedWritable = computed({
      get: () => 5,
      set: () => {},
    })
    const asReactive = reactive({ foo: 5 })
    const asReadonly = readonly(asReactive)

    return {
      asConst: 5,
      asRef,
      asComputed,
      asComputedWritable,
      asReactive,
      asReadonly,
    }
  },
})
</script>

<template>
  <input v-model="asConst" />
  <input v-model.number="asConst" />

  <input v-model="asRef" />
  <input v-model.number="asRef" />

  <input v-model="asComputed" />
  <input v-model.number="asComputed" />

  <input v-model="asComputedWritable" />
  <input v-model.number="asComputedWritable" />

  <input v-model="asReactive" />
  <input v-model.number="asReactive" />
  <input v-model="asReactive.foo" />
  <input v-model.number="asReactive.foo" />

  <input v-model="asReadonly" />
  <input v-model.number="asReadonly" />
  <input v-model="asReadonly.foo" />
  <input v-model.number="asReadonly.foo" />
</template>

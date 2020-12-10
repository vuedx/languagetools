import { ref, computed, reactive } from 'vue';

export function useFn() {
  const two = ref(2)
  const three = computed(() => 10)
  const four = ref({ foo: 5 })
  const five = reactive({ foo: 5 })

  return { two, three, four, five }
}

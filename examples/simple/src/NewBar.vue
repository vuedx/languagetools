<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

interface Props {
  test?: string
}

export default defineComponent<Props>({
  setup(props) {
    return {
      isFoo: props.test in props,
    }
  }
})
</script>

<template>
  <div>{{ test }} {{ isFoo }} </div>
</template>

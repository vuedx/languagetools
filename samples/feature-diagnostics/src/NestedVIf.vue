<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return { msg: '' }
  }
})
</script>

<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" v-if="msg" />
  </div>
</template>

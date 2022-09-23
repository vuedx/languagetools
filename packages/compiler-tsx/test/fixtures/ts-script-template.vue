<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({ foo: 'string' }),
})
</script>

<template>
  <div
    class="foo bar"
    :class="{ foo: foo }"
    ^innerHTML="foo"
    :[foo].camel="true"
    v-bind="foo"
    @click="console.log"
    @click.left="console.log"
    @click.right="console.log"
  >
    {{ foo }}
  </div>
</template>

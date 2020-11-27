<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const str: string = 'foo'
    const num: number = 2

    return { str, num }
  },
})
</script>

<template>
  <div :[str]="num" :class="num">
    <slot v-bind="{ str, num }" />
    <slot name="other" v-bind="{ str, num }" />
    <slot :name="str" v-bind="{ str, num }" />
    <slot v-bind="{ str, num }" foo bar="bar" :baz="str" :[str]="num" :[num]>
      <div>fallback {{ str }} and {{ num }}</div>
    </slot>
  </div>
</template>

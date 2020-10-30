<script lang="ts">
import { defineComponent } from 'vue'
import TypeScriptPropsOption from './components/TypeScriptPropsOption.vue'

export default defineComponent({
  components: {
    TypeScriptPropsOption,
  },
})
</script>

<template>
  <TypeScriptPropsOption
    string="value"
    stringFull="value"
    v-bind:number="1"
    :numberFull="1"
    boolean
    booleanFull
    :object="{ id: 1 }"
    :objectFull="{ id: 1 }"
    :array="[{ id: 1 }]"
    :arrayFull="[{ id: 1 }]"
    union="string"
    :unionFull="1"
  />
</template>

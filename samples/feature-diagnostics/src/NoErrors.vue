<script lang="ts">
import { defineComponent } from 'vue'
import JavaScriptPropsOption from './components/JavaScriptPropsOption.vue'
import JavaScriptSetupPropsOption from './components/JavaScriptSetupPropsOption.vue'
import TypeScriptPropsOption from './components/TypeScriptPropsOption.vue'
import TypeScriptPropsType from './components/TypeScriptPropsType.vue'
import TypeScriptSetupPropsDeclare from './components/TypeScriptSetupPropsDeclare.vue'
import TypeScriptSetupPropsOption from './components/TypeScriptSetupPropsOption.vue'

export default defineComponent({
  components: {
    TypeScriptPropsType,
    TypeScriptPropsOption,
    TypeScriptSetupPropsDeclare,
    TypeScriptSetupPropsOption,
    JavaScriptPropsOption,
    JavaScriptSetupPropsOption,
  },
})
</script>

<template>
  <TypeScriptPropsType
    stringFull="value"
    :numberFull="1"
    :booleanFull="true"
    :objectFull="{ id: 1 }"
    :arrayFull="[{ id: 1 }]"
    :unionFull="1"
  />
  <TypeScriptPropsOption
    stringFull="value"
    :numberFull="1"
    :booleanFull="true"
    :objectFull="{ id: 1 }"
    :arrayFull="[{ id: 1 }]"
    :unionFull="1"
  />
  <TypeScriptSetupPropsDeclare
    stringFull="value"
    :numberFull="1"
    :booleanFull="true"
    :objectFull="{ id: 1 }"
    :arrayFull="[{ id: 1 }]"
    :unionFull="1"
  />
  <TypeScriptSetupPropsOption
    stringFull="value"
    :numberFull="1"
    :booleanFull="true"
    :objectFull="{ id: 1 }"
    :arrayFull="[{ id: 1 }]"
    :unionFull="1"
  />
  <JavaScriptPropsOption
    stringFull="value"
    :numberFull="1"
    :booleanFull="true"
    :objectFull="{ id: 1 }"
    :arrayFull="[{ id: 1 }]"
    :unionFull="1"
  />
  <JavaScriptSetupPropsOption
    stringFull="value"
    :numberFull="1"
    :booleanFull="true"
    :objectFull="{ id: 1 }"
    :arrayFull="[{ id: 1 }]"
    :unionFull="1"
  />
</template>

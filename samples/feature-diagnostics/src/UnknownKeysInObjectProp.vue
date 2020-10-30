<script>
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
  <TypeScriptPropsType :object="{ id: 1, unknown: '' }" />
  <TypeScriptPropsOption :object="{ id: 1, unknown: '' }" />
  <TypeScriptSetupPropsDeclare :object="{ id: 1, unknown: '' }" />
  <TypeScriptSetupPropsOption :object="{ id: 1, unknown: '' }" />
  <JavaScriptPropsOption :object="{ id: 1, unknown: '' }" />
  <JavaScriptSetupPropsOption :object="{ id: 1, unknown: '' }" />
</template>

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
  <TypeScriptPropsType :string="1" />
  <TypeScriptPropsOption :string="1" />
  <TypeScriptSetupPropsDeclare :string="1" />
  <TypeScriptSetupPropsOption :string="1" />
  <JavaScriptPropsOption :string="1" />
  <JavaScriptSetupPropsOption :string="1" />
</template>

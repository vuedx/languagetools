<script>
import { defineComponent } from 'vue'
import JavaScriptPropsOption from './components/JavaScriptPropsOption.vue'
import JavaScriptSetupPropsOption from './components/JavaScriptSetupPropsOption.vue'
import TypeScriptPropsOption from './components/TypeScriptPropsOption.vue'
import TypeScriptPropsType from './components/TypeScriptPropsType.vue'
import TypeScriptSetupPropsDeclare from './components/TypeScriptSetupPropsDeclare.vue'
import TypeScriptSetupPropsOption from './components/TypeScriptSetupPropsOption.vue'
import TypeScriptSetupPropsType from './components/TypeScriptSetupPropsType.vue'

export default defineComponent({
  components: {
    TypeScriptPropsType,
    TypeScriptPropsOption,
    TypeScriptSetupPropsDeclare,
    TypeScriptSetupPropsOption,
    TypeScriptSetupPropsType,
    JavaScriptPropsOption,
    JavaScriptSetupPropsOption,
  },
})
</script>

<template>
  <TypeScriptPropsType />
  <TypeScriptPropsOption />
  <TypeScriptSetupPropsDeclare />
  <TypeScriptSetupPropsOption />
  <TypeScriptSetupPropsType />
  <JavaScriptPropsOption />
  <JavaScriptSetupPropsOption />
</template>

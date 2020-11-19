<script>
import { defineComponent } from 'vue'
import JavaScriptSetupPropsOption from './components/JavaScriptSetupPropsOption.vue'

export default defineComponent({
  components: {
    JavaScriptSetupPropsOption,
  },
})
</script>

<template>
  <Transition>
    <JavaScriptPropsOption />
    <JavaScriptSetupPropsOption />
  </Transition>
</template>

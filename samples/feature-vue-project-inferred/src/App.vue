<script>
import { defineComponent } from 'vue'
import LocalComponent from './components/LocalComponent.vue'

export default defineComponent({
  components: {
    LocalComponent,
  },
})
</script>

<template>
  <Transition>
    <LocalComponent />
    <GlobalComponent />
    <NotAGlobalComponent />
    <VeturComponent :name="1" />
    <WebTypesComponent :name="1" />
  </Transition>
</template>

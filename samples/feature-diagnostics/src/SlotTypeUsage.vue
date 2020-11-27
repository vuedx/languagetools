<script lang="ts">
import { defineComponent } from 'vue'
import SlotType from './SlotType.vue'

export default defineComponent({
  components: { SlotType },
})
</script>

<template>
  <div>
    <SlotType v-slot="{ str, num }"> {{ str }} {{ num }} </SlotType>
  </div>
</template>

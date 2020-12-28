<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  components: { HelloWorld },
});
</script>

<template>
  <main>
    <h1>A sample vue application</h1>

    <HelloWorld :name="1" />
  </main>
</template>

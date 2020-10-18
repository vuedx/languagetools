<script>
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  components: { HelloWorld },
});
</script>

<template>
  <main>
    <h1>A sample vue application</h1>

    <HelloWorld name="Rahul" />
  </main>
</template>

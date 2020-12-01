<script>
import { defineComponent } from "vue";
import HelloWorld from "../components/HelloWorld.vue";
import MyWorld from '../components/MyWorld.vue';

export default defineComponent({
  components: { MyWorld, HelloWorld: HelloWorld, }
})
</script>

<template>
  <div>
    <MyWorld>
  </div>
</template>

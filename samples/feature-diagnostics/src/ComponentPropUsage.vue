<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="123" />
</template>

<script>
import HelloWorldVue from "./components/HelloWorld.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: {
    HelloWorld: HelloWorldVue,
  },
});
</script>

import Vue from 'vue';
import App from './App.vue';

new Vue({
  el:'#app',
  // Cast "App" to "any" because "App" has Vue 3 API signature while
  // "createElement()" expect Vue 2 signature
  render: (createElement) => createElement(App as any)
});

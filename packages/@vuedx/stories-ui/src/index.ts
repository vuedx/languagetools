import { createApp } from 'vue'
import App from './App.vue'

export function createStoriesApp() {
  const app = createApp(App)
  app.config.devtools = true
  app.mount('#app')

  return app
}

import { createApp, defineComponent, h } from 'vue'
import App from './App.vue'
import { stories, createComponentStory, defineStory } from './story'

createApp(App).mount('#app')

const Button = defineComponent({
  setup(_, { slots }) {
    return () => h('button', {}, slots.default ? slots.default() : [])
  }
})

stories([
  {
    group: 'Components',
    component: () => Button,
    loader: () => ({
      default: createComponentStory({
        group: 'Components',
        component: Button,
      }),
      'Default Button': defineStory({
        setup() {
          return () => h(Button, {}, { default: () => ['button'] })
        }
      }),
      'Red Button': defineStory({
        setup() {
          return () => h(Button, { style: 'color: red'}, { default: () => ['button'] })
        }
      })
    })
  }
])

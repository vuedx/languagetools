import Button from './Button.vue'
import { h } from 'vue'
import { defineStory, createStoryCollection } from '@vuedx/stories'

export default createStoryCollection({
  group: 'App/Design System/Components/Button',
  component: Button,
})

export const Default = defineStory({
  setup() {
    return () => h(Button, {}, { default: () => ['button'] })
  }
})

export const Red = defineStory({
  setup() {
    return () => h(Button, { style: 'color: red' }, { default: () => ['button'] })
  }
})

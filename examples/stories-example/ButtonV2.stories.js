import Button from './Button.vue'
import { h } from 'vue'
import { defineStory, createStoryCollection } from '@vuedx/stories'

export default createStoryCollection({
  group: 'App/Design System/Components/Button (new)',
  component: Button,
})

export const Blue = defineStory({
  setup() {
    return () => h(Button, { style: 'color: blue' }, { default: () => ['button'] })
  }
})

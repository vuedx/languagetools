<script lang="ts">
import Bar, { Foo } from './Bar.vue'
import { defineComponent, ref, computed } from 'vue'

export const Name: string = ''

const newLocal = ref<string>('foo bar')
export default defineComponent({
  components: { Bar },
  props: {
    foo: String,
    bar: Number,
  },
  setup(props) {
    const foo = newLocal
    const bar = computed(() => foo.value)

    return {
      foo: bar,
      bar: props.bar,
    }
  },
})
</script>

<template>
  <div>
    <p>
      It works and stays in sync.
    </p>
  </div>
</template>

<docs lang="md">
# My documentation section.

This is working as expected.

As if it's one file and the same!!

Well **it is working** not!

And it should be back now.
</docs>

<story lang="js">
import { storiesOf } from 'stroybook'
import Component from '@'

export default storiesOf({
  Component
})
</story>

<example lang="md">
# Hello World
</example>

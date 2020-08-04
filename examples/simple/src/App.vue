<script lang="ts">
import { defineComponent } from 'vue'
import { Bar as TestComp } from './components'

export default defineComponent({
  components: {
    Foo: TestComp,
    TestComp,
    'foo-bar': TestComp
  },
  props: {
    foo: String,
    bar: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
  <Foo>
      <TestComp>
        <foo-bar />
      </TestComp>
      <TestComp>
        <foo-bar />
      </TestComp>
      <TestComp>
        <foo-bar />
      </TestComp>
  </Foo>
</template>

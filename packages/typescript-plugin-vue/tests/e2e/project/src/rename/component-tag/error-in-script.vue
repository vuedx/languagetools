<template>
  <div>
    <Foo>
      <Bar>
        <Baz>
          <GlobalComponent1>
            <div />
            <GlobalComponent2 />
            <Foo />
            <Bar />
            <Baz />
          </GlobalComponent1>
        </Baz>
      </Bar>
    </Foo>
  </div>
</template>

<script>
import { Transition as Foo, Fragment } from 'vue'
import Foo from './template.vue'

export default {
  components: {
    Foo,
    Bar,
    Baz: Fragment,
  }
}
</script>

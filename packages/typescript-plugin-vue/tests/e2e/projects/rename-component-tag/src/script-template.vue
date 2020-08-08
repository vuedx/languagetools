<template>
  <FooBar>
    <Foo>
      <Bar>
        <Baz>
          <GlobalComponent1>
            <FooBar />
            <GlobalComponent2 />
            <Foo />
            <Bar />
            <Baz />
          </GlobalComponent1>
        </Baz>
      </Bar>
    </Foo>
  </FooBar>
</template>

<script>
import { Transition as Bar, Fragment } from 'vue';
import Foo from './template.vue';
import FooBar from './FooBar.vue';

export default {
  components: {
    Foo,
    Bar,
    Baz: Fragment,
    FooBar,
  },
};
</script>

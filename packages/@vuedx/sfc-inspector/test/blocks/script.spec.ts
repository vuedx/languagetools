import { processScript } from '../../src/blocks/script';

describe('sfc-inspector/blocks/script', () => {
  test('extract components', () => {
    const result = processScript(`
    import { computed, defineComponent, ref, watch } from 'vue'
    import Bar, { Baz } from './Bar.vue'
    export const Name = 'name'
    
    export default defineComponent({
      components: { Bar },
      props: {
        foo: String,
        bar: Number,
      },
      setup(props) {
        const bar = ref(props.foo)
        const baz = computed(() => bar.value)
        props.foo + props.bar
        
        watch(() => props.foo, foo => {
          bar.value = props.foo
        })
    
        return {
          dummy: bar,
          __test__: props.bar,
        }
      },
    })`);

    expect(result.components).toHaveProperty('Bar');
    expect(result.components).toMatchSnapshot();
  });
});

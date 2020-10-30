import { DefineComponent, defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  components: { HelloWorld },
})

export function render() {
  return <HelloWorld name="Jane" />
}

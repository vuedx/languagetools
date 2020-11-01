import {} from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: { HelloWorld },
}

export function render() {
  return <HelloWorld name="Jane" />
}

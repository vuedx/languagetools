
import { computed, defineProps, ref } from 'vue'
import {} from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const props = defineProps({
  name: String,
  email: { type: String },
  code: [String, Number],
})

const fullname = ref('')
/** @type {number} */
const altCode = 1

function increment() {
  return <></>
}

const T=  VueDX.internal.defineSetupComponent(props, {}, {fullname}, { directives: {}, components: {HelloWorld}})

function render({ other }: InstanceType<typeof T>) {}

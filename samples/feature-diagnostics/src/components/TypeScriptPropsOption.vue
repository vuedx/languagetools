<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface Event {
  id: number
}

export default defineComponent({
  props: {
    string: String,
    stringFull: {
      type: String,
      required: true,
    },
    stringFullDefault: {
      type: String,
      required: true,
      default: 'default',
    },
    optionalStringFull: {
      type: String,
    },

    number: Number,
    numberFull: {
      type: Number,
      required: true,
    },
    numberFullDefault: {
      type: Number,
      required: true,
      default: 1,
    },
    optionalNumberFull: {
      type: Number,
    },

    boolean: Boolean,
    booleanFull: {
      type: Boolean,
      required: true,
    },
    booleanFullDefault: {
      type: Boolean,
      required: true,
      default: true,
    },
    optionalBooleanFull: {
      type: Boolean,
    },

    object: Object as PropType<Event>,
    objectFull: {
      type: Object as PropType<Event>,
      required: true,
    },
    objectFullDefault: {
      type: Object as PropType<Event>,
      required: true,
      default: () => ({ id: 1 }),
    },
    optionalObjectFull: {
      type: Object as PropType<Event>,
    },

    array: Array as PropType<Event[]>,
    arrayFull: {
      type: Array as PropType<Event[]>,
      required: true,
    },
    arrayFullDefault: {
      type: Array as PropType<Event[]>,
      required: true,
      default: () => [{ id: 1 }],
    },
    optionalArrayFull: {
      type: Array as PropType<Event[]>,
    },

    union: [String, Number],
    unionFull: {
      type: [String, Number],
      required: true,
    },
    unionFullDefault: {
      type: [String, Number],
      required: true,
      default: () => [{ id: 1 }],
    },
    optionalUnionFull: {
      type: [String, Number],
    },
  },
})
</script>

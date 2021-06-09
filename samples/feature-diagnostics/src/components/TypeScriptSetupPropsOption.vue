<script lang="ts" setup>
import { defineProps, PropType } from 'vue'

interface Event {
  id: number
}

const props = defineProps({
    string: String,
    stringFull: {
      type: String,
      required: true,
    },
    stringFullDefault: {
      type: String,
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
      default: () => [{ id: 1 }],
    },
    optionalUnionFull: {
      type: [String, Number],
    },
  })
</script>

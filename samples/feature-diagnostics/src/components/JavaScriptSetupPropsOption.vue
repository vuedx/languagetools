<script setup>
import { defineProps, PropType } from 'vue'

/**
 * @typedef Event
 * @property {number} id
 */

const props = defineProps({
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

  /** @type {PropType<Event>} */
  object: Object,
  objectFull: {
    /** @type {PropType<Event>} */
    type: Object,
    required: true,
  },
  objectFullDefault: {
    /** @type {PropType<Event>} */
    type: Object,
    required: true,
    default: () => ({ id: 1 }),
  },
  optionalObjectFull: {
    /** @type {PropType<Event>} */
    type: Object,
  },

  /** @type {PropType<Event[]>} */
  array: Array,
  arrayFull: {
    /** @type {PropType<Event[]>} */
    type: Array,
    required: true,
  },
  arrayFullDefault: {
    /** @type {PropType<Event[]>} */
    type: Array,
    required: true,
    default: () => [{ id: 1 }],
  },
  optionalArrayFull: {
    /** @type {PropType<Event[]>} */
    type: Array,
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
})
</script>

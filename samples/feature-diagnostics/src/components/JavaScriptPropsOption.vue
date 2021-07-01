<script>
import { defineComponent, PropType } from 'vue'

/**
 * @typedef Event
 * @property {number} id
 */

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
    object: /** @type {PropType<Event>} */ (Object),
    objectFull: {
      type: /** @type {PropType<Event>} */ (Object),
      required: true,
    },
    objectFullDefault: {
      type: /** @type {PropType<Event>} */ (Object),
      required: true,
      default: () => ({ id: 1 }),
    },
    optionalObjectFull: {
      type: /** @type {PropType<Event>} */ (Object),
    },

    array: /** @type {PropType<Event[]>} */ (Array),
    arrayFull: {
      type: /** @type {PropType<Event[]>} */ (Array),
      required: true,
    },
    arrayFullDefault: {
      type: /** @type {PropType<Event[]>} */(Array),
      required: true,
      default: () => [{ id: 1 }],
    },
    optionalArrayFull: {
      type: /** @type {PropType<Event[]>} */ (Array),
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

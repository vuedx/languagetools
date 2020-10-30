<script setup>
export default {
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

    object: Object,
    objectFull: {
      type: Object,
      required: true,
    },
    objectFullDefault: {
      type: Object,
      required: true,
      default: () => ({ id: 1 }),
    },
    optionalObjectFull: {
      type: Object,
    },

    array: Array,
    arrayFull: {
      type: Array,
      required: true,
    },
    arrayFullDefault: {
      type: Array,
      required: true,
      default: () => [{ id: 1 }],
    },
    optionalArrayFull: {
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
  },
}
</script>

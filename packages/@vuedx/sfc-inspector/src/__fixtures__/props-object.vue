<script>
export default {
  props: {
    foo: String,
    bar: [String, Number],
    baz: {
      type: String,
    },
    bam: {
      type: [String, Number, Boolean],
      required: true,
    },
  },
}
</script>

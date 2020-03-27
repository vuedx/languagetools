<script lang="ts">
/**
 * @emits {string} event2 Emitted when something happens.
 */
export default /** @emits {number} event3 */ {
  props: {
    foo: String,
    bar: Number,
  },
  methods: {
    created() {
      this.$emit('event1', this.foo)
    },
  },
  created() {
    /** Emitted when created. */
    this.$emit('event4', this.foo as { bar: string })
  },
}
</script>

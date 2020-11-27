import SlotType from './SlotType.vue'

export function render() {
  return (
    <SlotType>
      {{
        default: ({ str, num }) => (
          <>
            {str} {num}
          </>
        ),
      }}
    </SlotType>
  )
}

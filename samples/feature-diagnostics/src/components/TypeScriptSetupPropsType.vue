<script lang="ts" setup>
import { defineComponent } from 'vue'

interface Event {
  id: number
}

interface Props {
  string?: string
  stringFull: string
  stringFullDefault: string
  optionalStringFull?: string

  number?: number
  numberFull: number
  numberFullDefault: number
  optionalNumberFull?: number

  boolean?: boolean
  booleanFull: boolean
  booleanFullDefault: boolean
  optionalBooleanFull?: boolean

  object?: Event
  objectFull: Event
  objectFullDefault: Event
  optionalObjectFull?: Event

  array?: Event[]
  arrayFull: Event[]
  arrayFullDefault: Event[]
  optionalArrayFull?: Event[]

  union?: string | number
  unionFull: string | number
  unionFullDefault: string | number
  optionalUnionFull?: string | number
}

export default defineComponent<Props>({})
</script>

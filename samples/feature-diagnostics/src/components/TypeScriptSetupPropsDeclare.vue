<script lang="ts" setup>
interface Event {
  id: number
}

declare const props: {
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
</script>

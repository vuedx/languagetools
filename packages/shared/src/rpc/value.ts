export enum ValueType {
  RAW = 'raw',
  HANDLER = 'handler',
}

export interface BaseValue {
  type: ValueType
}

export interface RawValue extends BaseValue {
  type: ValueType.RAW
  value: unknown // Should be JSON serializable object
}

export interface HandlerValue extends BaseValue {
  type: ValueType.HANDLER
  name: string
  value: unknown
}

export type Value = RawValue | HandlerValue

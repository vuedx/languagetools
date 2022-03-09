import type { Opaque } from '../types'
import type { Value } from './value'

export type MessageID = Opaque<string, 'Message'>

export enum MessageType {
  // Proxy Methods
  get = 'get',
  set = 'set',
  apply = 'apply',
  construct = 'construct',
  // Protocol Methods
  ENDPOINT = 'ENDPOINT',
  RELEASE = 'RELEASE',
  RETURN = 'RETURN',
}

interface BaseMessage {
  id: MessageID
  type: MessageType
}

export interface GetMessage extends BaseMessage {
  type: MessageType.get
  path: string[]
}

export interface SetMessage extends BaseMessage {
  type: MessageType.set
  path: string[]
  value: Value
}

export interface ApplyMessage extends BaseMessage {
  type: MessageType.apply
  path: string[]
  argumentList: Value[]
}

export interface ConstructMessage extends BaseMessage {
  type: MessageType.construct
  path: string[]
  argumentList: Value[]
}

export interface EndpointMessage extends BaseMessage {
  type: MessageType.ENDPOINT
}

export interface ReleaseMessage extends BaseMessage {
  type: MessageType.RELEASE
  path: string[]
}

export interface ReturnMessage extends BaseMessage {
  type: MessageType.RETURN
  value: Value
}

export type Message =
  | GetMessage
  | SetMessage
  | ApplyMessage
  | ConstructMessage
  | EndpointMessage
  | ReleaseMessage
  | ReturnMessage

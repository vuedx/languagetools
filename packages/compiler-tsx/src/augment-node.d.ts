import { Scope } from './scope'
export {}

declare module '@vue/compiler-core' {
  export interface Node {
    scope: Scope
  }
}

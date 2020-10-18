export {}
import { Scope } from './scope'

declare module '@vue/compiler-core' {
  export interface Node {
    scope: Scope
  }
}

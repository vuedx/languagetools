import { VueProject } from './VueProject'

export class InferredVueProject extends VueProject {
  kind = 'inferred' as const
}

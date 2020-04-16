import { RenderNode } from './interfaces';

module '@vue/compiler-core' {
  export interface Node {
    renderNode?: RenderNode;
  }
}

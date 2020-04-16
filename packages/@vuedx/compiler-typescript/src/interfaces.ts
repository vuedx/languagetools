import { Node } from '@babel/types';

interface AbstractRenderNode {
  type: string;
}

export type JsNode = Node & {
  start: number;
  end: number;
}

export type RenderNode =
  | ForDirectiveRenderNode
  | SlotDirectiveRenderNode
  | OnDirectiveRenderNode
  | ExpressionRenderNode;

export interface ForDirectiveRenderNode extends AbstractRenderNode {
  type: 'v-for';
  left: {
    original: JsNode[];
    generated?: JsNode[];
  };
  right: {
    original: JsNode;
    generated?: JsNode;
  };
}

export interface SlotDirectiveRenderNode extends AbstractRenderNode {
  type: 'v-slot';
  original: JsNode[];
  generated?: JsNode[];
}

export interface OnDirectiveRenderNode extends AbstractRenderNode {
  type: 'v-on';
  original: JsNode[];
  generated?: JsNode[];
}

export interface ExpressionRenderNode extends AbstractRenderNode {
  type: 'expression';
  original: JsNode;
  generated?: JsNode;

  expressions?: {
    original: JsNode[];
    generated: JsNode[];
  };
}

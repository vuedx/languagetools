export const TEMPLATE_BLOCK_SELECTOR = 'template';
export const SCRIPT_BLOCK_SELECTOR = 'script';
export const SCRIPT_SETUP_BLOCK_SELECTOR = 'scriptSetup';
export const RENDER_SELECTOR = '_render';
export const MODULE_SELECTOR = '_module';
export const INTERNAL_MODULE_SELECTOR = '_internal';

export type BlockSelector =
  | { type: typeof SCRIPT_BLOCK_SELECTOR }
  | { type: typeof SCRIPT_SETUP_BLOCK_SELECTOR }
  | { type: typeof TEMPLATE_BLOCK_SELECTOR }
  | { type: 'style'; index: number }
  | { type: 'customBlocks'; index: number };

export type Selector =
  | BlockSelector
  | { type: typeof RENDER_SELECTOR }
  | { type: typeof MODULE_SELECTOR }
  | { type: typeof INTERNAL_MODULE_SELECTOR };

export type SelectorLike =
  | Selector
  | typeof TEMPLATE_BLOCK_SELECTOR
  | typeof SCRIPT_BLOCK_SELECTOR
  | typeof SCRIPT_SETUP_BLOCK_SELECTOR
  | typeof RENDER_SELECTOR
  | typeof MODULE_SELECTOR
  | typeof INTERNAL_MODULE_SELECTOR;

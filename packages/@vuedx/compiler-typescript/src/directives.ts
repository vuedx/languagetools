import { transformModel, DirectiveTransform, transformBind } from '@vue/compiler-core';
import { transformOn } from './directives/on';

const noop: DirectiveTransform = () => {
  // noop

  return {
    needRuntime: false,
    props: [],
  };
};

export const once = noop;
export const cloak = noop;
export const show = noop;
export const text = noop;
export const on = transformOn;
export const bind = transformBind;
export const model = transformModel;

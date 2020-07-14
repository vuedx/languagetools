import { transformModel, DirectiveTransform, transformBind } from '@vue/compiler-core';
import { transformOn } from './directives/on';
import { transformShow } from './directives/show';

const noop: DirectiveTransform = () => {
  // noop

  return {
    needRuntime: false,
    props: [],
  };
};

export const once = noop;
export const cloak = noop;
export const show = transformShow;
export const text = noop;
export const html = noop;
export const on = transformOn;
export const bind = transformBind;
export const model = transformModel;

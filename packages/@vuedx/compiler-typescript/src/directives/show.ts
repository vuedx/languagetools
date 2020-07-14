import { createCompoundExpression, createObjectProperty, DirectiveTransform } from '@vue/compiler-core';

export const transformShow: DirectiveTransform = (dir) => {
  return {
    needRuntime: false,
    props: [
      createObjectProperty('style', createCompoundExpression([dir.exp || 'true', `? null : { display: 'none' }`])),
    ],
  };
};

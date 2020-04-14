import { CompilerOptions } from '@vue/compiler-core';

export type Options = Required<Pick<CompilerOptions, 'filename'>> & Omit<CompilerOptions, 'filename'> & {
  components: Record<string, string>;
  useJavaScript?: boolean;
};

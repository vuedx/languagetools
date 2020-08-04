import TS from 'typescript/lib/tsserverlibrary';

export { TS };
export interface Modules {
  typescript: typeof TS;
}

export type PatchedFunction<T> = T & {
  __VUE__: boolean;
};

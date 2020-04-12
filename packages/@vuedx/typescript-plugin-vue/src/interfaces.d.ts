import TS from "typescript/lib/tsserverlibrary";

export { TS };
export interface Modules {
  typescript: TS;
}

export interface PatchedFunction<T> extends T {
  __VUE__: boolean;
}

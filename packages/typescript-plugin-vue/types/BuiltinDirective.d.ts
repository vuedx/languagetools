export interface BuiltinDirective<_Arg, _Exp, _Mod extends string> {
  arg?: _Arg;
  exp?: _Exp;
  modifiers?: Record<_Mod, true>;
}
export type InputModelDirective<_Exp, _Expected = _Exp> = BuiltinDirective<
  never, _Exp, 'lazy' | 'trim' | 'number'
> & { _exp?: _Expected; };

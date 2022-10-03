import { injectable } from 'inversify'
import { TypeScript } from '../../contracts/TypeScript'
import directives from './vue-builtin-directives.json'

export type BuiltinDirectiveName = keyof typeof directives

@injectable()
export class VueTemplateLanguageFactService {
  public readonly directives: Record<
    BuiltinDirectiveName,
    TypeScript.SymbolDisplayPart[]
  > = directives
}

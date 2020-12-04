import type { SourceFile, TypeChecker } from 'typescript'
import type { ParserOptions } from '@babel/parser'
import type { NodePath } from '@babel/traverse'
import type {
  ArrowFunctionExpression,
  File,
  FunctionDeclaration,
  FunctionExpression,
  Node,
  ObjectExpression,
  ObjectMember,
  ObjectMethod,
} from '@babel/types'
import type {
  SFCBlock,
  SFCDescriptor,
  SFCParseOptions,
  SFCScriptBlock,
  SFCStyleBlock,
  SFCTemplateBlock,
} from '@vuedx/compiler-sfc'
import type { ComponentInfoFactory } from './component'

export interface Context {
  fileName: string
  component: ComponentInfoFactory
  descriptor: SFCDescriptor

  plugins: Plugin[]

  parsers: {
    sfc: SFCParseOptions
    babel: ParserOptions
    typescript?: (
      fileName: string,
      source: string,
      options: {
        language: 'js' | 'jsx' | 'ts' | 'tsx'
      },
    ) => {
      ast: File
      sourceFile: SourceFile
      typeChecker: TypeChecker
    }
  }
}

export interface ScriptAnalyzerContext extends Context {
  mode: 'module' | 'setup'
  ast: File
  source: string
  sourceFile?: SourceFile
  block: SFCScriptBlock
}

export type ScriptAnalyzer = (ast: File, context: ScriptAnalyzerContext) => void

type AbstractScriptAnalyzerFn<T extends Node = Node> = (
  node: NodePath<T>,
  context: ScriptAnalyzerContext,
) => void

interface AbstractAnalyzerHandler<T extends Node = Node> {
  enter: (node: NodePath<T>, context: ScriptAnalyzerContext) => void
  exit: (node: NodePath<T>, context: ScriptAnalyzerContext) => void
}

export type ComponentDeclarationAnalyzer = AbstractScriptAnalyzerFn
export type ComponentOptionsAnalyzer = AbstractScriptAnalyzerFn<
  ObjectExpression
>
export type ComponentSetupFnAnalyzer = AbstractScriptAnalyzerFn<
  | FunctionExpression
  | ArrowFunctionExpression
  | ObjectMethod
  | FunctionDeclaration
>

export type BlockAnalyzer<T extends SFCBlock = SFCBlock> = (
  block: T,
  context: Context,
) => void

export interface Plugin {
  babel?: AbstractScriptAnalyzerFn | AbstractAnalyzerHandler
  setup?: ComponentSetupFnAnalyzer[]
  templateExpression?: (node: File, context: Context) => void
  options?:
    | ComponentOptionsAnalyzer[]
    | Record<string, AbstractScriptAnalyzerFn<ObjectMember>>
  declaration?: ComponentDeclarationAnalyzer[]
  blocks?: Partial<{
    script: BlockAnalyzer<SFCScriptBlock>
    template: BlockAnalyzer<SFCTemplateBlock>
    style: BlockAnalyzer<SFCStyleBlock>
  }> &
    Record<string, BlockAnalyzer<any>>
}

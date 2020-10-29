import type { ParserOptions } from '@babel/parser'
import type { NodePath } from '@babel/traverse'
import type {
  ArrowFunctionExpression,
  File,
  FunctionDeclaration,
  FunctionExpression,
  Node,
  ObjectMember,
  ObjectMethod,
  ObjectExpression,
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
  }
}

export interface ScriptAnalyzerContext extends Context {
  mode: 'module' | 'setup'
  ast: File
  source: string
  block: SFCScriptBlock
}

export interface ScriptAnalyzer {
  (ast: File, context: ScriptAnalyzerContext): void
}

interface AbstractAnalyzerFn<T extends Node = Node> {
  (node: NodePath<T>, context: ScriptAnalyzerContext): void
}

interface AbstractAnalyzerHandler<T extends Node = Node> {
  enter(node: NodePath<T>, context: ScriptAnalyzerContext): void
  exit(node: NodePath<T>, context: ScriptAnalyzerContext): void
}

export type ComponentDeclarationAnalyzer = AbstractAnalyzerFn
export type ComponentOptionsAnalyzer = AbstractAnalyzerFn<ObjectExpression>
export type ComponentSetupFnAnalyzer = AbstractAnalyzerFn<
  | FunctionExpression
  | ArrowFunctionExpression
  | ObjectMethod
  | FunctionDeclaration
>

export interface BlockAnalyzer<T extends SFCBlock = SFCBlock> {
  (block: T, context: Context): void
}

export interface Plugin {
  babel?: AbstractAnalyzerFn | AbstractAnalyzerHandler
  setup?: ComponentSetupFnAnalyzer[]
  options?:
    | ComponentOptionsAnalyzer[]
    | Record<string, AbstractAnalyzerFn<ObjectMember>>
  declaration?: ComponentDeclarationAnalyzer[]
  blocks?: Partial<{
    script: BlockAnalyzer<SFCScriptBlock>
    template: BlockAnalyzer<SFCTemplateBlock>
    style: BlockAnalyzer<SFCStyleBlock>
  }> &
    Record<string, BlockAnalyzer<any>>
}

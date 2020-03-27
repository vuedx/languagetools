import { NodePath } from '@babel/traverse'
import {
  CallExpression,
  ExportDefaultDeclaration,
  File,
  ObjectExpression,
} from '@babel/types'
import { RootNode } from '@vue/compiler-core'
import {
  SFCScriptBlock,
  SFCTemplateBlock,
  SFCDescriptor,
} from '@vue/compiler-sfc'
import { EventInfo, PropInfo } from './VueComponentInfo'

export interface EnhancedSFCScriptBlock extends SFCScriptBlock {
  ast: File
  paths: ComponentOptionsPaths
}

export interface EnhancedSFCTemplateBlock extends SFCTemplateBlock {
  ast: RootNode
}

export interface EnhancedSFCDescriptor {
  filename: string
  script: EnhancedSFCScriptBlock | null
  template: EnhancedSFCTemplateBlock | null
  styles: SFCDescriptor['styles']
  customBlocks: SFCDescriptor['customBlocks']
}

export interface SourceFile {
  content: string
  filename: string
}
export interface InspectorOptions {
  onError(error: Error): void
  resolve(imported: string, importee: string): Promise<string>
  load(id: string): Promise<SourceFile>
  plugins: InspectorPlugin[]
}
export interface InspectorPlugin {
  (
    descriptor: EnhancedSFCDescriptor,
    context: InspectorContext
  ): void | Promise<void>
}
export interface InspectorContext {
  data: any
  addError(error: Error): void
  addProp(prop: PropInfo): void
  addEvent(event: EventInfo): void
}

export type ComponentOptionsPaths =
  | {
      default: NodePath<ExportDefaultDeclaration>
      options: NodePath<ObjectExpression>
      define: NodePath<CallExpression>
    }
  | {
      default: NodePath<ExportDefaultDeclaration>
      options: NodePath<ObjectExpression>
      define: null
    }
  | {
      default: NodePath<ExportDefaultDeclaration> | null
      options: null
      define: null
    }

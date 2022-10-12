import { Disposable } from '@vuedx/shared'
import { Position, TextDocument } from 'vscode-languageserver-textdocument'
import { CompletionList, Hover } from 'vscode-languageserver-types'

export interface SemanticTokenData {
  start: Position
  length: number
  typeIdx: number
  modifierSet: number
}

export interface LanguageMode extends Disposable {
  readonly languageId: string

  complete?(document: TextDocument, position: Position): Promise<CompletionList>

  hover?(document: TextDocument, position: Position): Promise<Hover | null>
}

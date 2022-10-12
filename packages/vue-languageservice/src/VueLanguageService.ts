import { Disposable, invariant } from '@vuedx/shared'
import { CompletionList, Hover, Position } from 'vscode-languageserver-types'

import { LanguageMode } from './modes/LanguageMode'
import { VueTextDocument } from './VueTextDocument'

export class VueLanguageService implements Disposable {
  private readonly _languageModes = new Map<string, LanguageMode>()

  public get languageIds(): string[] {
    return Array.from(this._languageModes.keys())
  }

  public registerLanguageMode(mode: LanguageMode): void {
    invariant(
      !this._languageModes.has(mode.languageId),
      `A ${mode.languageId} language mode is already registered.`,
    )
    this._languageModes.set(mode.languageId, mode)
  }

  public getLanguageMode(languageId: string): LanguageMode | undefined {
    return this._languageModes.get(languageId)
  }

  public async complete(
    document: VueTextDocument,
    position: Position,
  ): Promise<CompletionList> {
    console.log('[request] complete', document.uri, position)
    const languageId = document.getEmbeddedLanguageIdAt(position)
    const mode = this.getLanguageMode(languageId)
    console.log(`[mode:${languageId}]`, mode != null)
    if (mode?.complete == null) return { isIncomplete: false, items: [] }

    return await mode.complete(
      document.getEmbeddedDocument(languageId),
      position,
    )
  }

  public async hover(
    document: VueTextDocument,
    position: Position,
  ): Promise<Hover | null> {
    const languageId = document.getEmbeddedLanguageIdAt(position)
    const mode = this.getLanguageMode(languageId)
    if (mode?.hover == null) return null
    return await mode.hover(document.getEmbeddedDocument(languageId), position)
  }

  public dispose(): void {
    this._languageModes.forEach((mode) => mode.dispose())
    this._languageModes.clear()
  }
}

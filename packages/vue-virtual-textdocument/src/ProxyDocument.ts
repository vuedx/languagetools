import type {
  Position,
  Range,
  TextDocument,
} from 'vscode-languageserver-textdocument'

export abstract class ProxyDocument implements TextDocument {
  constructor(protected source: TextDocument) {}

  public get uri(): string {
    return this.source.uri
  }

  public get languageId(): string {
    return this.source.languageId
  }

  public get version(): number {
    return this.source.version
  }

  public get lineCount(): number {
    return this.source.lineCount
  }

  public getText(range?: Range): string {
    return this.source.getText(range)
  }

  public positionAt(offset: number): Position {
    return this.source.positionAt(offset)
  }

  public offsetAt(position: Position): number {
    return this.source.offsetAt(position)
  }
}

import { TextDocument, Position, Range } from 'vscode-languageserver-textdocument';
import { asFsPath, isNumber } from '../utils';

export abstract class ProxyTextDocument implements TextDocument {
  public readonly fsPath: string;

  public constructor(protected doc: TextDocument) {
    this.fsPath = asFsPath(this.doc.uri);
  }

  public get version() {
    this.refresh();

    return this.doc.version;
  }

  public get languageId() {
    this.refresh();

    return this.doc.languageId;
  }

  public get lineCount() {
    this.refresh();

    return this.doc.lineCount;
  }

  public get uri() {
    this.refresh();

    return this.doc.uri;
  }

  public getText(): string;
  public getText(range: Range): string;
  public getText(offset: number, length: number): string;
  public getText(range?: number | Range, length?: number): string {
    this.refresh();

    if (isNumber(range)) {
      return this.doc.getText().substr(range, length);
    } else {
      return this.doc.getText(range);
    }
  }

  public positionAt(offset: number): Position {
    this.refresh();

    return this.doc.positionAt(offset);
  }

  public offsetAt(position: Position): number {
    this.refresh();

    return this.doc.offsetAt(position);
  }

  protected refresh(): void {}
}

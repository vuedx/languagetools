import { compile, RenderNode } from '@vuedx/compiler-typescript';
import Path from 'path';
import { SourceMapConsumer, Position as SourceMapPosition } from 'source-map';
import { Position as TextDocumentPosition, Range, TextDocument } from 'vscode-languageserver-textdocument';
import { URI } from 'vscode-uri';
import { BlockSelector, VueTextDocument } from './VueTextDocument';

export class VirtualTextDocument implements TextDocument {
  public constructor(
    protected internal: TextDocument,
    public readonly container: VueTextDocument,
    public readonly selector: BlockSelector
  ) {}

  public get version() {
    this.refresh();

    return this.internal.version;
  }

  public get languageId() {
    return this.internal.languageId;
  }

  public get lineCount() {
    this.refresh();

    return this.internal.lineCount;
  }

  public get uri() {
    return this.internal.uri;
  }

  private _fsPath?: string;
  public get fsPath() {
    if (!this._fsPath) this._fsPath = URI.parse(this.uri).fsPath;
    return this._fsPath!;
  }

  public getText(range?: Range) {
    this.refresh();

    return this.internal.getText(range);
  }

  public positionAt(offset: number) {
    this.refresh();

    return this.internal.positionAt(offset);
  }

  public offsetAt(position: TextDocumentPosition) {
    this.refresh();

    return this.internal.offsetAt(position);
  }

  public refresh() {
    if (this.internal.version !== this.container.version) {
      const block = this.container.getBlock(this.selector);

      if (block && block.content) {
        this.internal = TextDocument.update(this.internal, [{ text: block.content }], this.container.version);
      } else if (this.selector.type !== 'script') {
        this.internal = TextDocument.update(this.internal, [{ text: '' }], this.container.version);
        this.container.deleteBlockDocument(this.selector);
      } else {
        this.internal = TextDocument.update(this.internal, [], this.container.version);
      }
    }
  }

  static create(
    container: VueTextDocument,
    uri: string,
    languageId: string,
    version: number,
    content: string,
    selector: BlockSelector
  ) {
    return new VirtualTextDocument(TextDocument.create(uri, languageId, version, content), container, selector);
  }
}

type OffsetRange = [number, number];
type MappedOffsetRange = [OffsetRange, OffsetRange] | [OffsetRange, OffsetRange, true];

export class RenderFunctionDocument extends VirtualTextDocument {
  private consumer?: SourceMapConsumer;
  private globalComponents: Record<string, string> = {};
  private defaultOffset = 0;

  public getText(range?: Range) {
    this.refresh();

    return this.internal.getText(range);
  }

  public positionAt(offset: number) {
    this.refresh();

    return this.internal.positionAt(offset);
  }

  public offsetAt(position: TextDocumentPosition) {
    this.refresh();

    return this.internal.offsetAt(position);
  }

  public getSourceOffsetAt(offset: number): number {
    this.refresh();

    if (this.consumer) {
      const position = this.internal.positionAt(offset);

      return this.container
        .getBlockDocument('template')!
        .offsetAt(this.sm_2_td(this.consumer.originalPositionFor(this.td_2_sm(position))));
    }

    return this.defaultOffset;
  }

  public getGeneratedOffsetAt(offset: number): number {
    this.refresh();

    if (this.consumer) {
      const position = this.container.getBlockDocument('template')!.positionAt(offset);

      return this.internal.offsetAt(
        this.sm_2_td(
          this.consumer.generatedPositionFor({
            ...this.td_2_sm(position),
            source: '', // TODO: Why this? And what is this?
          })
        )
      );
    }

    return 0;
  }

  private td_2_sm(position: TextDocumentPosition): SourceMapPosition {
    return { line: position.line + 1, column: position.character + 1 };
  }

  private sm_2_td(position: SourceMapPosition): TextDocumentPosition {
    return { line: position.line - 1, character: position.column - 1 };
  }

  private isDirty = true; // Required for first time.
  public refresh() {
    if (this.isDirty || this.internal.version !== this.container.version) {
      this.isDirty = false;
      const template = this.container.getBlock(this.selector);
      const script = this.container.getBlock(this.container.getSelector('script'));

      if (template && template.content) {
        this.defaultOffset = template.loc.start.offset;
        const { code, map } = compile(template.content, {
          components: {
            ...this.globalComponents,
            ...findComponents(script?.content || ''),
          },
          filename: `./${Path.basename(this.container.fsPath)}`,
          useJavaScript: this.languageId === 'javascript',
        });

        this.consumer = new SourceMapConsumer(map!);
        this.internal = TextDocument.update(this.internal, [{ text: code }], this.container.version);
      } else {
        this.defaultOffset = 0;
        this.consumer = undefined;
        this.internal = TextDocument.update(this.internal, [{ text: '' }], this.container.version);
      }
    }
  }

  static create(
    container: VueTextDocument,
    uri: string,
    languageId: string,
    version: number,
    content: string,
    selector: BlockSelector,
    globalComponents: Record<string, string> = {}
  ) {
    const document = new RenderFunctionDocument(
      TextDocument.create(uri, languageId, version, content),
      container,
      selector
    );

    document.globalComponents = globalComponents;

    return document;
  }
}

const ImportPathRegExp = /import\s+(?:{[^}]+}\s*,)?\s*([A-Z][A-Za-z0-9_$]+)\s*(?:,\s*{[^}]+}\s*)?from\s+(?:"([^"]+)"|'([^']+)')/g;
function findComponents(source: string): Record<string, string> {
  const components: Record<string, string> = {};

  const iterator = source.matchAll(ImportPathRegExp);

  while (true) {
    const match = iterator.next();
    if (match.done) break;

    components[match.value[1]] = match.value[2] || match.value[3];
  }

  return components;
}

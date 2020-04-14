import { Position, Range, TextDocument } from 'vscode-languageserver-textdocument';
import { URI } from 'vscode-uri';
import Path from 'path';
import { BlockSelector, VueTextDocument } from './VueTextDocument';
import { compile, RootNode } from '@vuedx/compiler-typescript';
import { getNodesWithRenderMappings, NodeWithJs } from '@vuedx/compiler-typescript';

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

  public offsetAt(position: Position) {
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
type MappedOffsetRange = [OffsetRange, OffsetRange];

export class RenderFunctionDocument extends VirtualTextDocument {
  private ast?: RootNode;
  private ranges: MappedOffsetRange[] = [];
  private globalComponents: Record<string, string> = {};
  private defaultOffset = Number.NaN;

  private parse() {
    this.refresh();

    if (this.ast) {
      this.ranges = getNodesWithRenderMappings(this.ast).flatMap(this.getMappedRanges);
      this.ranges.sort((a, b) => b[1][0] - a[1][0]);
      this.defaultOffset = this.container.getBlock(this.selector)!.loc.start.offset;
      this.ast = undefined; // unset to prevent unnecessary re-processing.
    }
  }

  public getText(range?: Range) {
    this.refresh();

    return this.internal.getText(range);
  }

  public positionAt(offset: number) {
    this.refresh();

    return this.internal.positionAt(offset);
  }

  public offsetAt(position: Position) {
    this.refresh();

    return this.internal.offsetAt(position);
  }

  public getSourceOffsetAt(offset: number): number {
    this.parse();

    const range = this.ranges.find(([, [start, end]]) => start <= offset && offset < end);
    if (!range) return this.defaultOffset;

    const [original, generated] = range;
    const word = this.getText().substr(generated[0], 5);
    const coveredLength = word === '_ctx.' ? Math.min(offset - generated[0], 5) : 0;
    return original[0] + (offset - generated[0] - coveredLength);
  }

  public getGenteratedOffsetAt(offset: number): number {
    this.parse();

    const range = this.ranges.find(([[start, end]]) => start <= offset && offset < end);
    if (!range) return this.defaultOffset;

    const [original, generated] = range;
    const word = this.getText().substr(generated[0], 5);
    const coveredLength = word === '_ctx.' ? 5 : 0;

    return generated[0] + (offset - original[0] + coveredLength);
  }

  public getMappedConent() {
    this.parse();

    const template = this.container.getBlockDocument('template')!;
    const source = template.getText();
    const code = this.getText();
    const c = Math.ceil(template.lineCount / 10);
    function getRange(document: TextDocument, range: OffsetRange) {
      const start = document.positionAt(range[0]);
      const end = document.positionAt(range[1]);

      return [
        `${String(start.line + 1).padStart(c, ' ')}:${String(start.character + 1).padEnd(c, ' ')}`,
        'to',
        `${String(end.line + 1).padStart(c, ' ')}:${String(end.character + 1).padEnd(c, ' ')}`,
      ].join(' ');
    }

    return this.ranges.map(([original, generated]) =>
      [
        `(${getRange(template, original)})..(${getRange(this, generated)}) ` +
          source.substring(original[0], original[1]),
        code.substring(generated[0], generated[1]),
      ].join(' -> ')
    );
  }

  private getMappedRanges(node: NodeWithJs): MappedOffsetRange[] {
    const ranges: MappedOffsetRange[] = [];
    if ('original' in node) {
      ranges.push([
        [node.original.start, node.original.end],
        [node.jsNode.start, node.jsNode.end],
      ]);
    } else if ('jsNode' in node && node.loc) {
      ranges.push([
        [node.loc.start.offset, node.loc.end.offset],
        [node.jsNode.start, node.jsNode.end],
      ]);
    }

    if ('leftJsNode' in node) {
      node.leftJsNode.forEach((jsNode, index) => {
        const expNode = node.leftNode[index]!;
        ranges.push([
          [expNode.start, expNode.end],
          [jsNode.start, jsNode.end],
        ]);
      });
    }

    if ('rightJsNode' in node) {
      ranges.push([
        [node.rightNode.start, node.rightNode.end],
        [node.rightJsNode.start, node.rightJsNode.end],
      ]);
    }

    return ranges;
  }

  private isDirty = true; // Required for first time.
  public refresh() {
    if (this.isDirty || this.internal.version !== this.container.version) {
      this.isDirty = false;
      const template = this.container.getBlock(this.selector);
      const script = this.container.getBlock(this.container.getSelector('script'));

      if (template && template.content) {
        const { code, ast } = compile(template.content, {
          components: {
            ...this.globalComponents,
            ...findComponents(script?.content || ''),
          },
          filename: `./${Path.basename(this.container.fsPath)}`,
          useJavaScript: this.languageId === 'javascript',
        });

        this.ast = ast;
        this.internal = TextDocument.update(this.internal, [{ text: code }], this.container.version);
      } else {
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

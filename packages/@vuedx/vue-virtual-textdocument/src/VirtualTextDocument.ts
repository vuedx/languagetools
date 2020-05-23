import { compile, getRenderNodes, RenderNode, RootNode } from '@vuedx/compiler-typescript';
import Path from 'path';
import { Position, Range, TextDocument } from 'vscode-languageserver-textdocument';
import { URI } from 'vscode-uri';
import { BlockSelector, VueTextDocument } from './VueTextDocument';
import { isVueFile, VIRTUAL_FILENAME_SEPARATOR } from './helpers';

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
type MappedOffsetRange = [OffsetRange, OffsetRange] | [OffsetRange, OffsetRange, true];

export class RenderFunctionDocument extends VirtualTextDocument {
  private ast?: RootNode;
  private ranges: MappedOffsetRange[] = [];
  private globalComponents: Record<string, string> = {};
  private defaultOffset = Number.NaN;

  private parse() {
    this.refresh();

    if (this.ast) {
      this.ranges = getRenderNodes(this.ast).flatMap(this.getMappedRanges);
      // sort such that last, smallest expression is first.
      this.ranges.sort((a, b) => {
        if (b[1][0] === a[1][0]) {
          return a[1][1] - b[1][1];
        }

        return b[1][0] - a[1][0];
      });
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

  public getSourceOffsetAt(offset: number) {
    this.parse();

    const range = this.ranges.find(([, [start, end]]) => start <= offset && offset < end);
    if (!range) return;

    const [original, generated] = range;
    const word = this.getText().substr(generated[0], 5);
    const coveredLength = word === '_ctx.' ? Math.min(offset - generated[0], 5) : 0;
    return original[0] + (offset - generated[0] - coveredLength);
  }

  public getGenteratedOffsetAt(offset: number): number | undefined {
    this.parse();

    const range = this.ranges.find(([[start, end]]) => start <= offset && offset <= end);
    if (!range) return;

    const [original, generated, canInterpolate] = range;
    if (!canInterpolate) return generated[0];

    const word = this.getText().substr(generated[0], 5);
    const coveredLength = word === '_ctx.' ? 5 : 0;

    return generated[0] + (offset - original[0] + coveredLength);
  }

  public getMappedConent() {
    this.parse();

    const template = this.container.getBlockDocument('template')!;
    const source = template.getText();
    const code = this.getText();
    const c = 2;
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

  private getMappedRanges(node: RenderNode): MappedOffsetRange[] {
    const ranges: MappedOffsetRange[] = [];

    switch (node.type) {
      case 'v-for':
        if (node.left.generated && node.left.generated.length === node.left.original.length) {
          for (let i = node.left.generated.length - 1; i >= 0; --i) {
            const original = node.left.original[i];
            const generated = node.left.generated[i];
            ranges.push([[original.start, original.end], [generated.start, generated.end], true]);
          }
        }
        if (node.right.generated) {
          const { original, generated } = node.right;
          ranges.push([[original.start, original.end], [generated.start, generated.end], true]);
        }
        break;
      case 'v-slot':
      case 'v-on':
        if (node.generated && node.generated.length === node.original.length) {
          for (let i = node.generated.length - 1; i >= 0; --i) {
            const original = node.original[i];
            const generated = node.generated[i];
            ranges.push([[original.start, original.end], [generated.start, generated.end], true]);
          }
        }
        break;
      case 'expression':
        if (node.generated) {
          const { original, generated } = node;
          ranges.push([[original.start, original.end], [generated.start, generated.end], true]);
        }
        if (node.expressions) {
          for (let i = node.expressions.generated.length - 1; i >= 0; --i) {
            const original = node.expressions.original[i];
            const generated = node.expressions.generated[i];
            ranges.push([[original.start, original.end], [generated.start, generated.end], true]);
          }
        }
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

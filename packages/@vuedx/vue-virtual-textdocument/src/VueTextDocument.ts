import { parse, SFCBlock, SFCDescriptor, SFCScriptBlock, SFCStyleBlock, SFCTemplateBlock } from '@vuedx/compiler-sfc';
import { Position, Range, TextDocument, TextDocumentContentChangeEvent } from 'vscode-languageserver-textdocument';
import { URI } from 'vscode-uri';
import { isVueFile, parseVirtualFileName, VIRTUAL_FILENAME_SEPARATOR } from './helpers';
import { getLanguageIdFromExtension, isNotNull } from './utils';
import { RenderFunctionDocument, VirtualTextDocument } from './VirtualTextDocument';

const TEMPLATE = 'template';
const SCRIPT = 'script';
const STYLE = 'style';
const RENDER_FN = 'render';

export type LanguageMode = 'typescript' | 'javascript';

export type BlockSelector =
  | { type: typeof SCRIPT }
  | { type: typeof TEMPLATE; render?: true }
  | { type: string; index: number };

export type BlockSelectorLike = BlockSelector | typeof TEMPLATE | typeof SCRIPT | typeof RENDER_FN | string;

export class VueTextDocument implements TextDocument {
  private _descriptor!: SFCDescriptor;
  private _blocks: SFCBlock[] = [];
  private _fsPath?: string;

  private isDirty = true;
  private documents: Record<string, VirtualTextDocument | null> = {};

  public constructor(private internal: TextDocument, public readonly mode: LanguageMode = 'javascript') {}

  public get version() {
    return this.internal.version;
  }

  public get languageId() {
    return this.internal.languageId;
  }

  public get lineCount() {
    return this.internal.lineCount;
  }

  public get uri() {
    return this.internal.uri;
  }

  public get fsPath() {
    if (!this._fsPath) this._fsPath = URI.parse(this.uri).fsPath;

    return this._fsPath!;
  }

  public get descriptor() {
    this.parse();

    return this._descriptor;
  }

  public get blocks() {
    this.parse();

    return this._blocks;
  }

  public getText(range?: Range) {
    return this.internal.getText(range);
  }

  public positionAt(offset: number) {
    return this.internal.positionAt(offset);
  }

  public offsetAt(position: Position) {
    return this.internal.offsetAt(position);
  }

  public blockAt(position: Position | number) {
    this.parse();

    const offset = typeof position === 'number' ? position : this.offsetAt(position);

    return this.blocks.find((block) => block.loc.start.offset <= offset && offset <= block.loc.end.offset);
  }

  public documentAt(position: Position | number, preferRenderFunction = false) {
    this.parse();

    const block = this.blockAt(position);
    if (!block) return;

    const selector = this.getSelectorForBlock(block);

    if (preferRenderFunction && selector.type === TEMPLATE) {
      (selector as any).render = true;
    }

    return this.getBlockDocument(selector);
  }

  public all() {
    this.parse();

    return Object.values(this.documents).filter(isNotNull);
  }

  getBlockDocument(selector: typeof RENDER_FN): RenderFunctionDocument | null;
  getBlockDocument(selector: { type: typeof TEMPLATE; render: true }): RenderFunctionDocument | null;
  getBlockDocument(selector: typeof SCRIPT): VirtualTextDocument | null;
  getBlockDocument(selector: typeof TEMPLATE): VirtualTextDocument | null;
  getBlockDocument(selector: string): VirtualTextDocument | null;
  getBlockDocument(selector: BlockSelector): VirtualTextDocument | null;

  public getBlockDocument(rawSelector: BlockSelectorLike) {
    this.parse();

    const selector = this.getSelector(rawSelector);
    const id = this.getId(selector);

    if (!this.documents[id]) {
      const block = this.getBlock(selector);

      if (block) {
        const document =
          selector.type === 'script'
            ? this.createScriptDocument(block as SFCScriptBlock)
            : 'render' in selector
            ? this.createRenderFunctionDocument(block as SFCTemplateBlock)
            : this.createBlockDocument(block);

        this.documents[id] = document;
      } else if (selector.type === 'script') {
        this.documents[id] = this.createScriptDocument();
      }
    }

    return this.documents[id];
  }

  public deleteBlockDocument(rawSelector: BlockSelectorLike) {
    const id = this.getId(this.getSelector(rawSelector));

    delete this.documents[id];
  }

  public getBlockDocumentURI(raw: BlockSelectorLike): string | undefined {
    const fileName = this.getBlockDocumentFileName(raw);

    if (fileName) {
      return URI.file(fileName)
        .toString()
        .replace(/^file:/, 'vue:');
    }
  }

  public getBlockDocumentFileName(raw: BlockSelectorLike): string | undefined {
    const selector = this.getSelector(raw);
    const block = this.getBlock(selector);
    const lang =
      'render' in selector ? 'ts' : block ? this.getExtension(block) : selector.type === SCRIPT ? 'js' : null;

    if (!lang) return;

    return this.fsPath + VIRTUAL_FILENAME_SEPARATOR + this.getId(selector) + '.' + lang;
  }

  public getSelector(rawSelector: BlockSelectorLike): BlockSelector {
    if (rawSelector === SCRIPT) return { type: SCRIPT };
    if (rawSelector === TEMPLATE) return { type: TEMPLATE };
    if (rawSelector === RENDER_FN) return { type: TEMPLATE, render: true };
    if (typeof rawSelector === 'string') {
      try {
        const { selector } = parseVirtualFileName(rawSelector)!;

        return selector;
      } catch {
        throw new Error(`Malforated virtual document uri: ${rawSelector}`);
      }
    }

    if (!rawSelector || typeof rawSelector !== 'object') throw new Error(`Invalid selector kind: ${rawSelector}`);

    return rawSelector;
  }

  public getBlock(selector: BlockSelector) {
    this.parse();

    switch (selector.type) {
      case SCRIPT:
        return this.descriptor.script;
      case TEMPLATE:
        return this.descriptor.template;
      case STYLE:
        return this.descriptor.styles[selector.index];
      default:
        const filtered = this.descriptor.customBlocks.filter((block) => block.type === selector.type);
        if (filtered.length === 1) return filtered[0];
        return this.descriptor.customBlocks[(selector as any).index];
    }
  }

  private getSelectorForBlock(block: SFCBlock): BlockSelector {
    switch (block.type) {
      case SCRIPT:
        return { type: SCRIPT };
      case TEMPLATE:
        return { type: TEMPLATE };
      case STYLE:
        return {
          type: STYLE,
          index: this.descriptor.styles.indexOf(block as SFCStyleBlock),
        };
      default:
        return {
          type: block.type,
          index: this.descriptor.customBlocks.indexOf(block as SFCBlock),
        };
    }
  }

  private getId(selector: BlockSelector) {
    if ('index' in selector) return `${selector.type}__${selector.index}`;
    if ('render' in selector) return `render`;
    return selector.type;
  }

  private createBlockDocument(block: SFCBlock) {
    const uri = this.getBlockDocumentURI(this.getSelectorForBlock(block))!;
    const languageId = getLanguageIdFromExtension(uri.substr(uri.lastIndexOf('.') + 1));
    const selector = this.getSelectorForBlock(block);

    return VirtualTextDocument.create(this, uri, languageId, this.version, block.content, selector);
  }

  private createScriptDocument(block?: SFCScriptBlock) {
    const uri = this.getBlockDocumentURI(SCRIPT)!;
    const selector = this.getSelector(SCRIPT);
    if (!block) {
      const content = 'import { defineComponent } from "vue"\n' + 'export default defineComponent({})\n';
      return VirtualTextDocument.create(this, uri, this.mode, this.version, content, selector);
    }

    if (block.src) {
      const moduleId = block.src.replace(/\.(j|t)sx?$/, '');
      const importSource = JSON.stringify(moduleId);
      const content =
        `import component from ${importSource}\n` + `export * from ${importSource}\n` + `export default component`;

      return VirtualTextDocument.create(this, uri, this.mode, this.version, content, selector);
    }

    const languageId = block.lang === 'ts' ? 'typescript' : 'javascript';

    return VirtualTextDocument.create(this, uri, languageId, this.version, block.content, selector);
  }

  private getMode() {
    this.parse();

    if (this.descriptor.script?.lang === 'ts') {
      return 'typescript';
    }

    return this.mode;
  }

  private createRenderFunctionDocument(block: SFCTemplateBlock) {
    const uri = this.getBlockDocumentURI(RENDER_FN)!;
    const selector = this.getSelector(RENDER_FN);

    if (block.content) {
      return RenderFunctionDocument.create(this, uri, this.getMode(), this.version, '', selector);
    }

    return null;
  }

  private parse() {
    if (!this.isDirty) return;
    this.isDirty = false;

    const source = this.getText();
    const { descriptor } = parse(source, {
      sourceMap: false,
      pad: 'space',
      filename: this.fsPath,
      shouldPadTemplate: true,
    });

    this._descriptor = descriptor;
    this._blocks = [descriptor.script, descriptor.template].filter(isNotNull);
    this._blocks = this._blocks.concat(descriptor.styles).concat(descriptor.customBlocks);

    return this;
  }

  private getExtension(block: SFCBlock): string {
    if (block.lang) return block.lang;
    if (block.src) return block.src.substr(block.src.lastIndexOf('.') + 1);
    if (block.type === SCRIPT) return 'js';
    if (block.type === STYLE) return 'css';
    if (block.type === TEMPLATE) return 'vue-html';
    return block.type;
  }

  static create(uri: string, languageId: string, version: number, content: string, mode: LanguageMode = 'javascript') {
    if (!isVueFile(uri)) throw new Error(`Not a .vue file: ${uri}`);

    return new VueTextDocument(TextDocument.create(uri, languageId, version, content), mode);
  }

  static update(document: VueTextDocument, changes: TextDocumentContentChangeEvent[], version: number) {
    document.internal = TextDocument.update(document.internal, changes, version);
    document.isDirty = true;

    return document.parse();
  }
}

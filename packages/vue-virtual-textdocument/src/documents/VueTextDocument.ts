import { ComponentsOptionAnalyzer, createAnalyzer, ScriptBlockAnalyzer } from '@vuedx/analyze';
import { parse, SFCBlock, SFCParseOptions, SFCStyleBlock } from '@vuedx/compiler-sfc';
import { CodegenResult, compile, ComponentImport } from '@vuedx/compiler-tsx';
import { Position, TextDocument, TextDocumentContentChangeEvent } from 'vscode-languageserver-textdocument';
import {
  BlockSelector,
  INTERNAL_MODULE_SELECTOR,
  MODULE_SELECTOR,
  RENDER_SELECTOR,
  SCRIPT_BLOCK_SELECTOR,
  SCRIPT_SETUP_BLOCK_SELECTOR,
  Selector,
  SelectorLike,
  TEMPLATE_BLOCK_SELECTOR,
} from '../types';
import {
  asUri,
  binarySearch,
  getBlockLanguage,
  getLanguageExtension,
  isNotNull,
  isNumber,
  isOffsetInBlock,
  isString,
  parseVirtualFileName,
  relativeVirtualImportPath,
  VIRTUAL_FILENAME_SEPARATOR,
} from '../utils';
import { ProxyTextDocument } from './ProxyTextDocument';

const analyzer = createAnalyzer([ScriptBlockAnalyzer, ComponentsOptionAnalyzer]);
const replaceRE = /./g;
const parseSFC: typeof parse = /*#__PURE__*/ (source, options) => {
  const result = parse(source, options);

  // @vue/compiler-sfc does not pads template.
  if (result.descriptor.template?.content) {
    const { template } = result.descriptor;
    // @ts-ignore - parse reuses
    if (!template.__padded__) {
      // @ts-ignore
      template.__padded__ = true;
      template.content = source.substr(0, template.loc.start.offset).replace(replaceRE, ' ') + template.content;
    }
  }

  return result;
};

interface CreateVirtualTextDocumentOptions<T extends Selector = Selector> {
  container: VueTextDocument;
  selector: T;
  uri: string;
  languageId: string;
  version: number;
  content: string;
}

export class VirtualTextDocument extends ProxyTextDocument {
  public readonly container: VueTextDocument;
  public readonly selector: Selector;
  protected isDirty = true;

  public markDirty() {
    this.isDirty = true;
  }

  protected constructor(container: VueTextDocument, selector: Selector, doc: TextDocument) {
    super(doc);

    this.container = container;
    this.selector = selector;
  }

  protected refresh() {
    if (this.isDirty || this.doc.version !== this.container.version) {
      this.isDirty = false;
      const block = this.container.getBlock(this.selector as BlockSelector);
      this.doc = TextDocument.update(this.doc, [{ text: block ? block.content : '' }], this.container.version);
    }
  }

  public static create(options: CreateVirtualTextDocumentOptions) {
    return new VirtualTextDocument(
      options.container,
      options.selector,
      TextDocument.create(options.uri, options.languageId, options.version, options.content)
    );
  }
}

class VueModuleTextDocument extends VirtualTextDocument {
  protected refresh() {
    if (this.isDirty || this.doc.version !== this.container.version) {
      this.isDirty = false;
      const scriptFile = this.container.getDocumentFileName(SCRIPT_BLOCK_SELECTOR);
      const scriptSetupFile = this.container.descriptor.script?.setup
        ? this.container.getDocumentFileName(SCRIPT_SETUP_BLOCK_SELECTOR)
        : null;
      const renderFile = this.container.getDocumentFileName(RENDER_SELECTOR);

      const lines: string[] = [];

      if (scriptSetupFile) {
        const path = relativeVirtualImportPath(scriptSetupFile);
        lines.push(`import * as options from '${path}'`);
      } else {
        lines.push(`const options = {}`);
      }

      if (scriptFile) {
        const path = relativeVirtualImportPath(scriptFile);
        lines.push(`export * from '${path}'`);
        lines.push(`import component from '${path}'`);
      } else {
        lines.push(`import { defineComponent } from 'vue'`);
        lines.push(`const component = defineComponent(options)`);
      }

      if (renderFile) {
        const path = relativeVirtualImportPath(renderFile);
        lines.push(`import { render } from '${path}'`);
        lines.push(`component.render = render`);
      }

      lines.push(`export default component`);

      this.doc = TextDocument.update(this.doc, [{ text: lines.join('\n') }], this.container.version);
    }
  }

  public static create(options: CreateVirtualTextDocumentOptions<{ type: typeof MODULE_SELECTOR }>) {
    return new VueModuleTextDocument(
      options.container,
      options.selector,
      TextDocument.create(options.uri, options.languageId, -1, options.content)
    );
  }
}

class InternalModuleTextDocument extends VirtualTextDocument {
  protected refresh() {
    if (this.isDirty || this.doc.version !== this.container.version) {
      this.isDirty = false;
      const scriptFile = this.container.getDocumentFileName(SCRIPT_BLOCK_SELECTOR);
      const scriptSetupFile = this.container.descriptor.script?.setup
        ? this.container.getDocumentFileName(SCRIPT_SETUP_BLOCK_SELECTOR)
        : null;

      const lines: string[] = [];

      if (scriptSetupFile) {
        const path = relativeVirtualImportPath(scriptSetupFile);
        lines.push(`import { defineComponent } from 'vue'`);
        lines.push(`import * as options from '${path}'`);
        lines.push(`const component = defineComponent(() => options)`);
      } else if (scriptFile) {
        const path = relativeVirtualImportPath(scriptFile);
        lines.push(`import { defineComponent } from 'vue'`);
        lines.push(`import script from '${path}'`);
        lines.push(`const component = defineComponent(script)`);
      } else {
        lines.push(`import { defineComponent } from 'vue'`);
        lines.push(`const component = defineComponent({})`);
      }

      lines.push(`export default component`);

      this.doc = TextDocument.update(this.doc, [{ text: lines.join('\n') }], this.container.version);
    }
  }

  public static create(options: CreateVirtualTextDocumentOptions<{ type: typeof INTERNAL_MODULE_SELECTOR }>) {
    return new InternalModuleTextDocument(
      options.container,
      options.selector,
      TextDocument.create(options.uri, options.languageId, -1, options.content)
    );
  }
}

export class RenderFunctionTextDocument extends VirtualTextDocument {
  private result!: CodegenResult;
  private originalRange: [number, number] = [0, 0];
  private originalMappings: CodegenResult['mappings'] = [];
  private generatedRange: [number, number] = [0, 0];
  private generatedMappings: CodegenResult['mappings'] = [];
  private expressionsMap: Record<string, [number, number]> = {};

  public get ast(): CodegenResult['ast'] | undefined {
    if (this.result) return this.result.ast;
  }

  public getOriginalOffsetAt(offset: number) {
    this.refresh();
    const [start, end] = this.generatedRange;

    if (start <= offset && offset <= end) {
      const mapping = binarySearch(this.generatedMappings, ([start, length]) => {
        if (start <= offset && offset <= start + length) return 0;
        return start - offset;
      });

      if (mapping) {
        const offsetInSource = offset - mapping[0];

        return {
          offset: mapping[2] + offsetInSource,
          length: Math.max(1, mapping[3] - offsetInSource),
        };
      }
    }
  }

  public findExpression(offset: number, length: number) {
    const text = this.getText().substr(offset, length);
    const expression = this.expressionsMap[text.trim()];

    if (expression) return { offset: expression[0], length: expression[1] };
  }

  public getGeneratedOffsetAt(offset: number) {
    this.refresh();
    const [start, end] = this.originalRange;

    if (start <= offset && offset <= end) {
      const mapping = binarySearch(this.originalMappings, ([, , start, length]) => {
        if (start <= offset && offset <= start + length) return 0;
        return start - offset;
      });

      if (mapping) {
        const offsetInGenerated = offset - mapping[2];

        return {
          offset: mapping[0] + offsetInGenerated,
          length: Math.max(1, mapping[1] - offsetInGenerated),
        };
      }
    }
  }

  public getAllGeneratedOffsetsAt(offset: number) {
    this.refresh();
    const [start, end] = this.originalRange;

    if (start <= offset && offset <= end) {
      const mappings = this.generatedMappings.filter(([, , start, length]) => {
        return start <= offset && offset <= start + length;
      });

      return mappings.map((mapping) => {
        const offsetInGenerated = mapping[2] <= offset && offset <= mapping[2] + mapping[3] ? offset - mapping[2] : 0;
        return {
          offset: mapping[0] + offsetInGenerated,
          length: Math.max(1, mapping[1] - offsetInGenerated),
        };
      });
    }

    return [];
  }

  protected refresh() {
    if (this.isDirty || this.doc.version !== this.container.version) {
      this.isDirty = false;
      try {
        this.doc = TextDocument.update(this.doc, [{ text: this.generate() }], this.container.version);
      } catch (error) {
        // This is very unlikely to happen as compiler is very error tolerant.
        this.doc = TextDocument.update(
          this.doc,
          [{ text: `\n/* ${error.message} ${error.stack} */ \n` }],
          this.container.version
        );
        this.originalRange = [0, 0];
        this.originalMappings = [];
        this.generatedRange = [0, 0];
        this.generatedMappings = [];
      }
    }
  }

  protected generate() {
    const { template } = this.container.descriptor;

    if (!template) {
      return '';
    } else {
      this.result = compile(template.content, {
        filename: this.container.fsPath,
        components: this.getLocalComponents(),
      });

      this.originalRange = [template.loc.start.offset, template.loc.end.offset];
      this.originalMappings = this.result.mappings.slice();
      this.generatedRange = [this.result.code.indexOf('/*@@vue:start*/'), this.result.code.indexOf('/*@@vue:end*/')];
      this.generatedMappings = this.result.mappings.filter(
        (m) => this.generatedRange[0] <= m[0] && m[1] <= this.generatedRange[1]
      );

      this.originalMappings.sort((a, b) => a[2] - b[2]);
      this.generatedMappings.sort((a, b) => a[0] - b[0]);

      this.expressionsMap = {};
      const code = this.result.code;

      this.generatedMappings.forEach((p) => {
        this.expressionsMap[code.substr(p[0], p[1])] = [p[2], p[3]];
      });

      if (__DEV__) {
        return this.result.code + `\n// Version ${this.container.version}\n`;
      }

      return this.result.code;
    }
  }

  protected getLocalComponents(): Record<string, ComponentImport> | undefined {
    const { script } = this.container.descriptor;

    if (script && script.content) {
      // TODO: Cache this.
      const result = analyzer.analyzeScript(script.content, 'component.ts');
      const map: Record<string, ComponentImport> = {};
      result.components.forEach((component) => {
        const result = {
          path: component.source.moduleName,
          named: !!component.source.exportName,
          name: component.source.exportName,
        };

        component.aliases.forEach((name) => {
          map[name] = result;
        });
      });

      return map;
    }
  }

  public static create(options: CreateVirtualTextDocumentOptions<{ type: typeof RENDER_SELECTOR }>) {
    return new RenderFunctionTextDocument(
      options.container,
      options.selector,
      TextDocument.create(options.uri, options.languageId, options.version, options.content)
    );
  }
}

export class VueTextDocument extends ProxyTextDocument {
  private isDirty = true;
  private sfc!: ReturnType<typeof parse>;
  private options: SFCParseOptions;
  private documents = new Map<string, VirtualTextDocument | undefined>();

  constructor(doc: TextDocument, options?: SFCParseOptions) {
    super(doc);

    this.options = {
      ...options,
      filename: this.fsPath,
      sourceMap: false,
      pad: 'space',
    };
  }

  public get descriptor() {
    this.parse();
    return this.sfc.descriptor;
  }

  public all() {
    return Array.from(this.documents.values()).filter(isNotNull);
  }

  public getBlock(selector: BlockSelector) {
    switch (selector.type) {
      case SCRIPT_BLOCK_SELECTOR:
        return this.descriptor.script;
      case SCRIPT_SETUP_BLOCK_SELECTOR:
        return this.descriptor.scriptSetup;
      case TEMPLATE_BLOCK_SELECTOR:
        return this.descriptor.template;
      default:
        if ('index' in selector) {
          const blocks = selector.type === 'style' ? this.descriptor.styles : this.descriptor.customBlocks;
          return blocks[selector.index];
        }
    }
  }

  public blockAt(position: Position | number) {
    const offset = isNumber(position) ? position : this.offsetAt(position);
    const descriptor = this.descriptor;

    if (isOffsetInBlock(offset, descriptor.template)) return descriptor.template;
    if (isOffsetInBlock(offset, descriptor.script)) return descriptor.script;
    if (isOffsetInBlock(offset, descriptor.scriptSetup)) return descriptor.scriptSetup;

    return (
      descriptor.styles.find(isOffsetInBlock.bind(null, offset)) ||
      descriptor.customBlocks.find(isOffsetInBlock.bind(null, offset))
    );
  }

  public documentAt(position: Position | number) {
    const block = this.blockAt(position);

    if (block) {
      return this.getDocument(this.getBlockSelector(block)!);
    }
  }

  public getBlockSelector(block: SFCBlock): BlockSelector | undefined {
    switch (block.type) {
      case 'script':
        if ('setup' in block) {
          return { type: SCRIPT_SETUP_BLOCK_SELECTOR };
        } else {
          return { type: SCRIPT_BLOCK_SELECTOR };
        }
      case 'template':
        return { type: TEMPLATE_BLOCK_SELECTOR };
      case 'style': {
        const index = this.descriptor.styles.indexOf(block as SFCStyleBlock);
        if (index >= 0) return { type: 'style', index };
        break;
      }
      default: {
        const index = this.descriptor.customBlocks.indexOf(block as SFCStyleBlock);
        if (index >= 0) return { type: 'customBlocks', index };
        break;
      }
    }
  }

  public getDocumentFileName(selectorLike: SelectorLike) {
    const selector: Selector = isString(selectorLike) ? { type: selectorLike } : selectorLike;
    const id = this.getDocumentId(selector);
    const ext = getLanguageExtension(this.getDocumentLanguage(selector));

    if (!ext) return;

    return this.fsPath + VIRTUAL_FILENAME_SEPARATOR + id + '.' + ext;
  }

  public getDocument(selector: typeof RENDER_SELECTOR): RenderFunctionTextDocument;
  public getDocument(selector: SelectorLike): VirtualTextDocument;
  public getDocument(selector: string): VirtualTextDocument;
  public getDocument(selector: SelectorLike | string) {
    this.parse();

    if (isString(selector)) {
      if (selector.includes('/') || selector.includes('\\')) {
        const result = parseVirtualFileName(selector);
        if (!result) return;
        selector = result.selector;
      } else {
        selector = { type: selector } as Selector;
      }
    }

    const id = this.getDocumentId(selector);

    if (!this.documents.has(id)) {
      switch (selector.type) {
        case INTERNAL_MODULE_SELECTOR:
          this.documents.set(id, this.createInternalModuleDocument());
          break;
        case MODULE_SELECTOR:
          this.documents.set(id, this.createModuleDocument());
          break;
        case RENDER_SELECTOR:
          this.documents.set(id, this.createRenderDocument());
          break;
        default:
          this.documents.set(id, this.createBlockDocument(selector));
          break;
      }
    }

    return this.documents.get(id);
  }

  protected createBlockDocument(selector: BlockSelector) {
    const block = this.getBlock(selector);
    if (!block) return;

    // TODO: handle src for <script>

    return VirtualTextDocument.create({
      container: this,
      selector,
      uri: asUri(this.getDocumentFileName(selector)!),
      languageId: this.getDocumentLanguage(selector),
      version: this.version,
      content: block.content,
    });
  }

  protected createInternalModuleDocument() {
    return InternalModuleTextDocument.create({
      container: this,
      selector: { type: INTERNAL_MODULE_SELECTOR },
      uri: asUri(this.getDocumentFileName(INTERNAL_MODULE_SELECTOR)!),
      languageId: this.getDocumentLanguage({ type: INTERNAL_MODULE_SELECTOR }),
      version: this.version,
      content: '',
    });
  }

  protected createModuleDocument() {
    return VueModuleTextDocument.create({
      container: this,
      selector: { type: MODULE_SELECTOR },
      uri: asUri(this.getDocumentFileName(MODULE_SELECTOR)!),
      languageId: this.getDocumentLanguage({ type: MODULE_SELECTOR }),
      version: this.version,
      content: '',
    });
  }

  protected createRenderDocument() {
    return RenderFunctionTextDocument.create({
      container: this,
      selector: { type: RENDER_SELECTOR },
      uri: asUri(this.getDocumentFileName(RENDER_SELECTOR)!),
      languageId: this.getDocumentLanguage({ type: RENDER_SELECTOR }),
      version: this.version,
      content: '',
    });
  }

  protected getDocumentLanguage(selector: Selector) {
    switch (selector.type) {
      case INTERNAL_MODULE_SELECTOR:
      case MODULE_SELECTOR:
        return 'typescript';
      case RENDER_SELECTOR:
        return 'typescriptreact';
      default:
        return getBlockLanguage(this.getBlock(selector));
    }
  }

  protected getDocumentId(selector: Selector) {
    if (isString(selector)) return selector;
    if ('index' in selector) return selector.type + '__' + selector.index;
    return selector.type;
  }

  protected parse() {
    if (!this.isDirty) return;
    this.isDirty = false;
    const source = this.getText();
    try {
      this.sfc = parseSFC(source, this.options);
    } catch {
      // -- skip invalid state.
      // TODO: Catch errors.
    }
  }

  public static create(uri: string, languageId: string, version: number, content: string, options?: SFCParseOptions) {
    return new VueTextDocument(TextDocument.create(uri, languageId, version, content), options);
  }

  public static update(document: VueTextDocument, changes: TextDocumentContentChangeEvent[], version: number) {
    document.doc = TextDocument.update(document.doc, changes, version);
    document.isDirty = true;
    document.documents.forEach((document) => {
      if (document) document.markDirty();
    });

    return document;
  }
}

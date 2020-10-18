import { VueTextDocument, VirtualTextDocument } from '../src/documents/VueTextDocument';
import { parseVirtualFileName } from '../src/utils';

describe('VueTextDocument', () => {
  const doc = VueTextDocument.create(
    'file:///component.vue',
    'vue',
    0,
    ['<script>', 'export default {}', '</script>', '', '<template>', '  <div />', '</template>'].join('\n')
  );
  test('get script virtual document', () => {
    const script = doc.getDocument('script')!;
    expect(script).toBeInstanceOf(VirtualTextDocument);
    expect(doc.getDocument(doc.descriptor.script!)).toBe(script);
    expect(doc.getDocument({ type: 'script' })).toBe(script);
    expect(script.uri).toBe('vue:///component.vue________script.js');
    expect(script.fsPath).toBe('/component.vue________script.js');
  });
  test('get template virtual document', () => {
    const template = doc.getDocument('template')!;
    expect(template).toBeInstanceOf(VirtualTextDocument);
    expect(doc.getDocument(doc.descriptor.template!)).toBe(template);
    expect(doc.getDocument({ type: 'template' })).toBe(template);
    expect(template.uri).toBe('vue:///component.vue________template.vue-html');
    expect(template.fsPath).toBe('/component.vue________template.vue-html');
  });
  test('encodes correct virtual document uri', () => {
    const template = doc.getDocument('template')!;
    expect(template).toBeInstanceOf(VirtualTextDocument);
    expect(doc.getDocument(parseVirtualFileName(template.uri)!.selector)).toBe(template);
  });
});

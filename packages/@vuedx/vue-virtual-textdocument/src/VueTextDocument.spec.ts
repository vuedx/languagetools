import { VueTextDocument } from './VueTextDocument';
import { VirtualTextDocument } from './VirtualTextDocument';
import { parseVirtualFileName } from './helpers';

describe('VueTextDocument', () => {
  const doc = VueTextDocument.create(
    'file:///component.vue',
    'vue',
    0,
    ['<script>', 'export default {}', '</script>', '', '<template>', '  <div />', '</template>'].join('\n')
  );
  test('parse script and template and lazy load', () => {
    expect(doc.all()).toHaveLength(0);
  });
  test('get script virtual document', () => {
    const script = doc.getBlockDocument('script')!;
    expect(script).toBeInstanceOf(VirtualTextDocument);
    expect(doc.getBlockDocument(doc.descriptor.script!)).toBe(script);
    expect(doc.getBlockDocument({ type: 'script' })).toBe(script);
    expect(script.uri).toBe('vue:///component.vue____script.js');
    expect(script.fsPath).toBe('/component.vue____script.js');
  });
  test('get template virtual document', () => {
    const template = doc.getBlockDocument('template')!;
    expect(template).toBeInstanceOf(VirtualTextDocument);
    expect(doc.getBlockDocument(doc.descriptor.template!)).toBe(template);
    expect(doc.getBlockDocument({ type: 'template' })).toBe(template);
    expect(template.uri).toBe('vue:///component.vue____template.vue-html');
    expect(template.fsPath).toBe('/component.vue____template.vue-html');
  });
  test('encodes correct virtual document uri', () => {
    const template = doc.getBlockDocument('template')!;
    expect(template).toBeInstanceOf(VirtualTextDocument);
    expect(doc.getBlockDocument(parseVirtualFileName(template.uri)!.selector)).toBe(template);
  });
});

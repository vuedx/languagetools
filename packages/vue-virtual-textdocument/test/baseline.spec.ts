import { sync as glob } from 'fast-glob';
import Path from 'path';
import FS from 'fs';
import { VueTextDocument } from '../src/documents/vue';

expect.addSnapshotSerializer({
  test: (value) => typeof value === 'string',
  print: (value) => `${value}`,
});

describe('VueVirtualDocument/baseline', () => {
  const dir = Path.resolve(__dirname, '../../typescript-plugin-vue/tests/e2e/project/src');
  const fileNames = glob('**/*.vue', {
    cwd: dir,
    absolute: false,
  });

  test.each(fileNames)('%s', async (name) => {
    const fileName = Path.resolve(dir, name);
    const content = await FS.promises.readFile(fileName, { encoding: 'utf-8' });
    const document = VueTextDocument.create(`file://${fileName}`, 'vue', 0, content);

    expect(document.getDocument('_render')?.getText()).toMatchSnapshot();
  });
});

// @ts-nocheck
import Path from 'path';
import Proto from 'typescript/lib/protocol';
import { createLanguageServerForTest, TestVueServer } from '../../server';
import { getTextRanges } from '../helpers';

const baseDir = Path.resolve(__dirname, '../../projects/rename-component-tag/src');

describe('rename/component-tag', () => {
  let server!: TestVueServer;

  // Setup
  beforeEach(() => {
    server = createLanguageServerForTest();
  });
  afterEach(() => server.close());

  // Helper functions
  async function rename(fileName: string, line: number, column: number) {
    fileName = Path.resolve(baseDir, fileName);
    server.openFile(fileName);
    server.sendCommand(Proto.CommandTypes.Rename, <Proto.RenameRequestArgs>{
      file: server.canonicalFileName(fileName),
      line: line,
      offset: column,
    });

    await server.close();

    return fileName;
  }

  function expectFailure(fileName: string) {
    // Have response.
    expect(server.responses).toHaveLength(1);

    const response = server.responses[0] as Proto.RenameResponse;
    expect(response.body).toBeTruthy();

    const { info, locs } = response.body!;
    expect(info.canRename).toBe(false);
    expect(locs).toHaveLength(0);

    return info.localizedErrorMessage;
  }

  function expectSuccess(fileName: string) {
    // Have response.
    expect(server.responses).toHaveLength(1);

    const response = server.responses[0] as Proto.RenameResponse;
    expect(response.body).toBeTruthy();

    const { info, locs } = response.body!;
    expect(info.canRename).toBe(true);
    expect(locs).toHaveLength(1);

    const loc = locs[0];
    expect(loc.file).toBe(fileName);

    return loc.locs;
  }

  function getRenameInfo(): Proto.RenameInfoSuccess {
    return (server.responses[0] as Proto.RenameResponse).body!.info!;
  }

  // Tests
  describe('global component (unknown source)', () => {
    test('<▊GlobalComponent1>...</GlobalComponent1>', async () => {
      const fileName = await rename('template.vue', 3, 6);
      expect(expectFailure(fileName)).toBe('Global component (with unknown source file) cannot be renamed.');
    });

    test('<GlobalComponent1>...</Global▊Component1>', async () => {
      const fileName = await rename('template.vue', 6, 13);
      expect(expectFailure(fileName)).toBe('Global component (with unknown source file) cannot be renamed.');
    });

    test('<Global▊Component2 />', async () => {
      const fileName = await rename('template.vue', 5, 14);
      expect(expectFailure(fileName)).toBe('Global component (with unknown source file) cannot be renamed.');
    });
  });

  describe('local component (imported from .vue file, with different name)', () => {
    test('<▊Foo>...</Foo> in script-template', async () => {
      const fileName = await rename('script-template.vue', 3, 6);

      const locs = expectSuccess(fileName);
      expect(locs).toHaveLength(5); // 3 in template, 2 in script.

      const changes = await getTextRanges(fileName, locs);
      const expected = Array(5);
      expected.fill('Foo', 0, 5);

      expect(changes.map((change) => change.text)).toEqual(expected);
      expect(changes).toEqual(
        expect.arrayContaining([{ prefixText: 'import ', text: 'Foo', suffixText: ` from './template.vue';` }])
      );

      const info = getRenameInfo();
      expect(info.displayName).toBe('Foo');
      expect(info.fullDisplayName).toBe('Foo');
      expect(info.fileToRename).toBe(void 0);
    });

    test('<Fo▊o /> in script-template', async () => {
      const fileName = await rename('script-template.vue', 9, 16);

      const locs = expectSuccess(fileName);
      expect(locs).toHaveLength(5); // 3 in template, 2 in script.

      const changes = await getTextRanges(fileName, locs);
      const expected = Array(5);
      expected.fill('Foo', 0, 5);

      expect(changes.map((change) => change.text)).toEqual(expected);
      expect(changes).toEqual(
        expect.arrayContaining([{ prefixText: 'import ', text: 'Foo', suffixText: ` from './template.vue';` }])
      );

      const info = getRenameInfo();
      expect(info.displayName).toBe('Foo');
      expect(info.fullDisplayName).toBe('Foo');
      expect(info.fileToRename).toBe(void 0);
    });

    test('<▊Foo>...</Foo> in template-script', async () => {
      const fileName = await rename('template-script.vue', 18, 6);

      const locs = expectSuccess(fileName);
      expect(locs).toHaveLength(5); // 3 in template, 2 in script.

      const changes = await getTextRanges(fileName, locs);
      const expected = Array(5);
      expected.fill('Foo', 0, 5);

      expect(changes.map((change) => change.text)).toEqual(expected);
      expect(changes).toEqual(
        expect.arrayContaining([{ prefixText: 'import ', text: 'Foo', suffixText: ` from './template.vue';` }])
      );

      const info = getRenameInfo();
      expect(info.displayName).toBe('Foo');
      expect(info.fullDisplayName).toBe('Foo');
      expect(info.fileToRename).toBe(void 0);
    });

    test('<Fo▊o /> in template-script', async () => {
      const fileName = await rename('template-script.vue', 24, 16);

      const locs = expectSuccess(fileName);
      expect(locs).toHaveLength(5); // 3 in template, 2 in script.

      const changes = await getTextRanges(fileName, locs);
      const expected = Array(5);
      expected.fill('Foo', 0, 5);

      expect(changes.map((change) => change.text)).toEqual(expected);
      expect(changes).toEqual(
        expect.arrayContaining([{ prefixText: 'import ', text: 'Foo', suffixText: ` from './template.vue';` }])
      );

      const info = getRenameInfo();
      expect(info.displayName).toBe('Foo');
      expect(info.fullDisplayName).toBe('Foo');
      expect(info.fileToRename).toBe(void 0);
    });
  });

  describe('local component (imported from .vue file, with same name)', () => {
    test('<▊FooBar>...</FooBar> in script-template', async () => {
      const fileName = await rename('script-template.vue', 2, 4);

      const locs = expectSuccess(fileName);
      expect(locs).toHaveLength(1); // only file should be renamed.

      const changes = await getTextRanges(fileName, locs);

      expect(changes.map((change) => change.text)).toEqual(['./FooBar.vue']);

      const target = Path.resolve(baseDir, 'FooBar.vue');
      const info = getRenameInfo();
      expect(info.displayName).toBe(target);
      expect(info.fullDisplayName).toBe(target);
      expect(info.fileToRename).toBe(target);
      expect(info.triggerSpan).toEqual({
        start: { line: 2, offset: 4 },
        end: { line: 2, offset: 10 },
      });
    });

    test('<Foo▊Bar /> in script-template', async () => {
      const fileName = await rename('script-template.vue', 7, 17);

      const locs = expectSuccess(fileName);
      expect(locs).toHaveLength(1); // only file should be renamed.

      const changes = await getTextRanges(fileName, locs);

      expect(changes.map((change) => change.text)).toEqual(['./FooBar.vue']);

      const target = Path.resolve(baseDir, 'FooBar.vue');
      const info = getRenameInfo();
      expect(info.displayName).toBe(target);
      expect(info.fullDisplayName).toBe(target);
      expect(info.fileToRename).toBe(target);
      expect(info.triggerSpan).toEqual({
        start: { line: 7, offset: 14 },
        end: { line: 7, offset: 20 },
      });
    });

    test('<▊FooBar>...</FooBar> in template-script', async () => {
      const fileName = await rename('template-script.vue', 17, 4);

      const locs = expectSuccess(fileName);
      expect(locs).toHaveLength(1); // only file should be renamed.

      const changes = await getTextRanges(fileName, locs);

      expect(changes.map((change) => change.text)).toEqual(['./FooBar.vue']);

      const target = Path.resolve(baseDir, 'FooBar.vue');
      const info = getRenameInfo();
      expect(info.displayName).toBe(target);
      expect(info.fullDisplayName).toBe(target);
      expect(info.fileToRename).toBe(target);
      expect(info.triggerSpan).toEqual({
        start: { line: 17, offset: 4 },
        end: { line: 17, offset: 10 },
      });
    });

    test('<Foo▊Bar /> in template-script', async () => {
      const fileName = await rename('template-script.vue', 22, 17);

      const locs = expectSuccess(fileName);
      expect(locs).toHaveLength(1); // only file should be renamed.

      const changes = await getTextRanges(fileName, locs);

      expect(changes.map((change) => change.text)).toEqual(['./FooBar.vue']);

      const target = Path.resolve(baseDir, 'FooBar.vue');
      const info = getRenameInfo();
      expect(info.displayName).toBe(target);
      expect(info.fullDisplayName).toBe(target);
      expect(info.fileToRename).toBe(target);
      expect(info.triggerSpan).toEqual({
        start: { line: 22, offset: 14 },
        end: { line: 22, offset: 20 },
      });
    });
  });

  describe('local component (imported from external module)', () => {
    test('<▊Bar>...</Bar> in script-template', async () => {
      const fileName = await rename('script-template.vue', 4, 8);

      const locs = expectSuccess(fileName);
      expect(locs).toHaveLength(5); // 3 in template, 2 in script.

      const changes = await getTextRanges(fileName, locs);
      const expected = Array(5);
      expected.fill('Bar', 0, 5);

      expect(changes.map((change) => change.text)).toEqual(expected);
      expect(changes).toEqual(
        expect.arrayContaining([
          {
            prefixText: 'import { Transition as ',
            text: 'Bar',
            suffixText: `, Fragment } from 'vue';`,
          },
        ])
      );

      const info = getRenameInfo();
      expect(info.displayName).toBe('Bar');
      expect(info.fullDisplayName).toBe('Bar');
      expect(info.fileToRename).toBe(void 0);
    });

    test('<B▊ar /> in script-template', async () => {
      const fileName = await rename('script-template.vue', 10, 15);

      const locs = expectSuccess(fileName);
      expect(locs).toHaveLength(5); // 3 in template, 2 in script.

      const changes = await getTextRanges(fileName, locs);
      const expected = Array(5);
      expected.fill('Bar', 0, 5);

      expect(changes.map((change) => change.text)).toEqual(expected);
      expect(changes).toEqual(
        expect.arrayContaining([
          {
            prefixText: 'import { Transition as ',
            text: 'Bar',
            suffixText: `, Fragment } from 'vue';`,
          },
        ])
      );

      const info = getRenameInfo();
      expect(info.displayName).toBe('Bar');
      expect(info.fullDisplayName).toBe('Bar');
      expect(info.fileToRename).toBe(void 0);
    });

    test('<Bar>...</▊Bar> in template-script', async () => {
      const fileName = await rename('template-script.vue', 29, 9);

      const locs = expectSuccess(fileName);
      expect(locs).toHaveLength(5); // 3 in template, 2 in script.

      const changes = await getTextRanges(fileName, locs);
      const expected = Array(5);
      expected.fill('Bar', 0, 5);

      expect(changes.map((change) => change.text)).toEqual(expected);
      expect(changes).toEqual(
        expect.arrayContaining([
          {
            prefixText: 'import { Transition as ',
            text: 'Bar',
            suffixText: `, Fragment } from 'vue';`,
          },
        ])
      );

      const info = getRenameInfo();
      expect(info.displayName).toBe('Bar');
      expect(info.fullDisplayName).toBe('Bar');
      expect(info.fileToRename).toBe(void 0);
    });

    test('<B▊ar /> in template-script', async () => {
      const fileName = await rename('template-script.vue', 25, 15);

      const locs = expectSuccess(fileName);
      expect(locs).toHaveLength(5); // 3 in template, 2 in script.

      const changes = await getTextRanges(fileName, locs);
      const expected = Array(5);
      expected.fill('Bar', 0, 5);

      expect(changes.map((change) => change.text)).toEqual(expected);
      expect(changes).toEqual(
        expect.arrayContaining([
          {
            prefixText: 'import { Transition as ',
            text: 'Bar',
            suffixText: `, Fragment } from 'vue';`,
          },
        ])
      );

      const info = getRenameInfo();
      expect(info.displayName).toBe('Bar');
      expect(info.fullDisplayName).toBe('Bar');
      expect(info.fileToRename).toBe(void 0);
    });
  });

  describe('local component (imported from external module and registered with different name)', () => {
    test('<▊Baz>...</Baz> in script-template', async () => {
      const fileName = await rename('script-template.vue', 5, 10);

      const locs = expectSuccess(fileName);
      expect(locs).toHaveLength(4); // 3 in template, 1 in script.

      const changes = await getTextRanges(fileName, locs);
      const expected = Array(4);
      expected.fill('Baz', 0, 4);

      expect(changes.map((change) => change.text)).toEqual(expected);

      const info = getRenameInfo();
      expect(info.displayName).toBe('Baz');
      expect(info.fullDisplayName).toBe('Baz');
      expect(info.fileToRename).toBe(void 0);
    });

    test('<B▊az /> in script-template', async () => {
      const fileName = await rename('script-template.vue', 5, 11);

      const locs = expectSuccess(fileName);
      expect(locs).toHaveLength(4); // 3 in template, 1 in script.

      const changes = await getTextRanges(fileName, locs);
      const expected = Array(4);
      expected.fill('Baz', 0, 4);

      expect(changes.map((change) => change.text)).toEqual(expected);

      const info = getRenameInfo();
      expect(info.displayName).toBe('Baz');
      expect(info.fullDisplayName).toBe('Baz');
      expect(info.fileToRename).toBe(void 0);
    });

    test('<Baz>...</▊Baz> in template-script', async () => {
      const fileName = await rename('template-script.vue', 28, 11);

      const locs = expectSuccess(fileName);
      expect(locs).toHaveLength(4); // 3 in template, 1 in script.

      const changes = await getTextRanges(fileName, locs);
      const expected = Array(4);
      expected.fill('Baz', 0, 4);

      expect(changes.map((change) => change.text)).toEqual(expected);

      const info = getRenameInfo();
      expect(info.displayName).toBe('Baz');
      expect(info.fullDisplayName).toBe('Baz');
      expect(info.fileToRename).toBe(void 0);
    });

    test('<B▊az /> in template-script', async () => {
      const fileName = await rename('template-script.vue', 20, 11);

      const locs = expectSuccess(fileName);
      expect(locs).toHaveLength(4); // 3 in template, 1 in script.

      const changes = await getTextRanges(fileName, locs);
      const expected = Array(4);
      expected.fill('Baz', 0, 4);

      expect(changes.map((change) => change.text)).toEqual(expected);

      const info = getRenameInfo();
      expect(info.displayName).toBe('Baz');
      expect(info.fullDisplayName).toBe('Baz');
      expect(info.fileToRename).toBe(void 0);
    });
  });
});

// @ts-nocheck
import Proto from 'typescript/lib/protocol';
import { createLanguageServerForTest } from '../../server';
import Path from 'path';
import { getTextRanges } from '../helpers';

const baseDir = Path.resolve(__dirname, '../../project/src/rename/element-tag');

describe('rename/element-tag', () => {
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

  test('<▊section>...</section>', async () => {
    const fileName = await rename('fixture.vue', 4, 6);

    const locs = expectSuccess(fileName);
    expect(locs).toHaveLength(2);

    const changes = await getTextRanges(fileName, locs);
    const expected = ['section', 'section'];

    expect(changes.map((change) => change.text)).toEqual(expected);

    const info = getRenameInfo();
    expect(info.displayName).toBe('section');
    expect(info.fullDisplayName).toBe('section');
    expect(info.fileToRename).toBe(void 0);
  });

  test('<section>...</sect▊ion>', async () => {
    const fileName = await rename('fixture.vue', 7, 11);

    const locs = expectSuccess(fileName);
    expect(locs).toHaveLength(2);

    const changes = await getTextRanges(fileName, locs);
    const expected = ['section', 'section'];

    expect(changes.map((change) => change.text)).toEqual(expected);

    const info = getRenameInfo();
    expect(info.displayName).toBe('section');
    expect(info.fullDisplayName).toBe('section');
    expect(info.fileToRename).toBe(void 0);
  });

  test('<▊input .../>', async () => {
    const fileName = await rename('fixture.vue', 6, 8);

    const locs = expectSuccess(fileName);
    expect(locs).toHaveLength(1);

    const changes = await getTextRanges(fileName, locs);
    const expected = ['input'];

    expect(changes.map((change) => change.text)).toEqual(expected);

    const info = getRenameInfo();
    expect(info.displayName).toBe('input');
    expect(info.fullDisplayName).toBe('input');
    expect(info.fileToRename).toBe(void 0);
  });
});

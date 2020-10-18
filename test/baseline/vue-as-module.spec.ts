import Path from 'path';
import { TestServer } from '../support/TestServer';

const projects = ['javascript', 'typescript', 'javascript-with-config', 'typescript-with-config'];

describe.each(projects)('baseline (project: %s)', (project) => {
  const projectPath = Path.resolve(__dirname, '../../samples/', project);
  const ext = project.includes('javascript') ? 'js' : 'ts';

  function abs(fileName: string) {
    return Path.resolve(projectPath, fileName);
  }

  let server: TestServer;
  beforeAll(async () => {
    server = new TestServer();

    await server.sendCommand('configure', { preferences: {}, watchOptions: {} });
    await server.sendCommand('compilerOptionsForInferredProjects', {
      options: { allowJs: true, checkJs: true, allowNonTsExtensions: true, jsx: 'preserve' as any },
    });
  });

  it('should resolve .vue import in .{js,ts} file', async () => {
    const fileName = abs(`src/main.${ext}`);

    await server.sendCommand('updateOpen', {
      openFiles: [{ projectRootPath: projectPath, file: fileName }],
    });
    await server.sendCommand('geterr', { files: [fileName], delay: 0 });

    const { body: semanticDiag } = await server.waitForEvent('semanticDiag');
    expect(semanticDiag?.file).toBe(fileName);
    expect(semanticDiag?.diagnostics).toHaveLength(0);

    const { body: definitionAndBoundSpan } = await server.sendCommand('definitionAndBoundSpan', {
      // Position of .vue import source.
      file: fileName,
      line: 2,
      offset: 20,
    });

    expect(definitionAndBoundSpan.definitions).toHaveLength(1);
    expect(definitionAndBoundSpan.definitions[0].file).toBe(abs(`src/App.vue`));

    await server.sendCommand('updateOpen', { closedFiles: [fileName] });
  });

  it('should resolve .vue import in .vue file', async () => {
    const fileName = abs(`src/App.vue`);

    await server.sendCommand('updateOpen', {
      openFiles: [{ projectRootPath: projectPath, file: fileName }],
    });
    await server.sendCommand('geterr', { files: [fileName], delay: 0 });

    const { body: semanticDiag } = await server.waitForEvent('semanticDiag');
    expect(semanticDiag?.file).toBe(fileName);
    expect(semanticDiag?.diagnostics).toHaveLength(0);

    const { body: definitionAndBoundSpan } = await server.sendCommand('definitionAndBoundSpan', {
      // Position of .vue import source.
      file: fileName,
      line: 3,
      offset: 27,
    });

    expect(definitionAndBoundSpan.definitions).toHaveLength(1);
    expect(definitionAndBoundSpan.definitions[0].file).toBe(abs(`src/components/HelloWorld.vue`));

    await server.sendCommand('updateOpen', { closedFiles: [fileName] });
  });

  afterAll(async () => await server.close());
});

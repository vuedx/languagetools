import Proto from 'typescript/lib/protocol';
import { createLanguageServerForTest } from '../server';

describe('resolveModules', () => {
  test('should resolve aliased paths in vue files', async () => {
    const server = createLanguageServerForTest();
    server.openFile('resolve-module.vue');
    server.sendCommand(Proto.CommandTypes.SemanticDiagnosticsSync, <Proto.SemanticDiagnosticsSyncRequestArgs>{
      file: server.canonicalFileName('resolve-module.vue'),
    });
    await server.close();
    expect(server.responses).toHaveLength(1);
    const response: Proto.SemanticDiagnosticsSyncResponse = server.responses[0];
    expect(response.command).toBe(Proto.CommandTypes.SemanticDiagnosticsSync);
    expect(response.body).toHaveLength(1);
  });
});

import Proto from 'typescript/lib/protocol';
import { createLanguageServerForTest } from '../server';
describe('getSemanticDiagnostics', () => {
  test('should report semantic issues in a vue file', async () => {
    const server = createLanguageServerForTest();
    server.openFile('fixture-semantic-diagnostics.vue');
    server.sendCommand(Proto.CommandTypes.SemanticDiagnosticsSync, <Proto.SemanticDiagnosticsSyncRequestArgs>{
      file: server.canonicalFileName('fixture-semantic-diagnostics.vue'),
    });
    await server.close();
    expect(server.responses).toHaveLength(1);
    const response: Proto.SemanticDiagnosticsSyncResponse = server.responses[0];
    expect(response.command).toBe(Proto.CommandTypes.SemanticDiagnosticsSync);
    expect(response.body).toHaveLength(1);
    expect((response.body as Proto.Diagnostic[]).map(item => [item.text, item.start])).toMatchSnapshot();
  });
  
  test.only('in template expression', async () => {
    const server = createLanguageServerForTest();
    server.openFile('template/semantic-diagnostics.vue');
    server.sendCommand(Proto.CommandTypes.SemanticDiagnosticsSync, <Proto.SemanticDiagnosticsSyncRequestArgs>{
      file: server.canonicalFileName('template/semantic-diagnostics.vue'),
    });
    await server.close();
    expect(server.responses).toHaveLength(1);
    const response: Proto.SemanticDiagnosticsSyncResponse = server.responses[0];
    expect(response.command).toBe(Proto.CommandTypes.SemanticDiagnosticsSync);
    expect(response.body).toHaveLength(1);
    expect((response.body as Proto.Diagnostic[]).map(item => [item.text, item.start])).toMatchSnapshot();
  });
});

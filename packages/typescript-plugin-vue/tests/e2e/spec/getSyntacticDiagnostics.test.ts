import Proto from 'typescript/lib/protocol'
import { createLanguageServerForTest } from '../server'

describe('getSyntacticDiagnostics', () => {
  test('should report syntax issues in a vue file', async () => {
    const server = createLanguageServerForTest()
    server.openFile('fixture-syntactic-diagnostics.vue')
    server.sendCommand(Proto.CommandTypes.SyntacticDiagnosticsSync, <
      Proto.SyntacticDiagnosticsSyncRequestArgs
    >{
      file: server.canonicalFileName('fixture-syntactic-diagnostics.vue'),
    })
    await server.close()
    expect(server.responses).toHaveLength(1)
    const response: Proto.SyntacticDiagnosticsSyncResponse = server.responses[0]
    expect(response.command).toBe(Proto.CommandTypes.SyntacticDiagnosticsSync)
    expect(response.body).toHaveLength(2)
    expect(
      (response.body as Proto.Diagnostic[]).map((item) => [
        item.text,
        item.start,
      ])
    ).toMatchSnapshot()
  })
})

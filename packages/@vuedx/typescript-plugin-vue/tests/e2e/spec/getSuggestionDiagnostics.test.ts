import Proto from 'typescript/lib/protocol'
import { createLanguageServerForTest } from '../server'

describe('getSuggestionDiagnostics', () => {
  test('should report suggestions in a vue file', async () => {
    const server = createLanguageServerForTest()
    server.openFile('fixture-suggestion-diagnostics.vue')
    server.sendCommand(Proto.CommandTypes.SuggestionDiagnosticsSync, <
      Proto.SuggestionDiagnosticsSyncRequestArgs
    >{
      file: server.canonicalFileName('fixture-suggestion-diagnostics.vue'),
    })

    await server.close()

    expect(server.responses).toHaveLength(1)
    const response: Proto.SuggestionDiagnosticsSyncResponse =
      server.responses[0]
    expect(response.command).toBe(Proto.CommandTypes.SuggestionDiagnosticsSync)
    expect(response.body).toHaveLength(1)
    expect(
      (response.body as Proto.Diagnostic[]).map(item => [item.text, item.start])
    ).toMatchSnapshot()
  })
})

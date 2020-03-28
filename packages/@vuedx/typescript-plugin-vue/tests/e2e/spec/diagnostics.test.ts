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
      (response.body as Proto.Diagnostic[]).map(item => [item.text, item.start])
    ).toMatchSnapshot()
  })
})

describe('getSemanticDiagnostics', () => {
  test('should report semantic issues in a vue file', async () => {
    const server = createLanguageServerForTest()
    server.openFile('fixture-semantic-diagnostics.vue')
    server.sendCommand(Proto.CommandTypes.SemanticDiagnosticsSync, <
      Proto.SemanticDiagnosticsSyncRequestArgs
    >{
      file: server.canonicalFileName('fixture-semantic-diagnostics.vue'),
    })

    await server.close()

    expect(server.responses).toHaveLength(1)
    const response: Proto.SemanticDiagnosticsSyncResponse = server.responses[0]
    expect(response.command).toBe(Proto.CommandTypes.SemanticDiagnosticsSync)
    expect(response.body).toHaveLength(1)
    expect(
      (response.body as Proto.Diagnostic[]).map(item => [item.text, item.start])
    ).toMatchSnapshot()
  })
})

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

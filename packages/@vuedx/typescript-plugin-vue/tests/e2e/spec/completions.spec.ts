import Proto from 'typescript/lib/protocol'
import { createLanguageServerForTest } from '../server'

describe('getCompletionsAtPosition', () => {
  test('should complete object properties', async () => {
    const server = createLanguageServerForTest()
    server.openFile('fixture-completions-import.vue')
    server.sendCommand(Proto.CommandTypes.Completions, <Proto.CompletionsRequestArgs>{
      file: server.canonicalFileName('fixture-completions-import.vue'),
      line: 2,
      offset: 27,
    })

    await server.close()

    expect(server.responses).toHaveLength(1)
    const response: Proto.CompletionsResponse = server.responses[0]
    expect(response.command).toBe(Proto.CommandTypes.Completions)
    expect(response.body).not.toHaveLength(0)
    const names = response.body!.map(item => item.name)
    expect(names).toContain('ref')
    expect(names).toContain('computed')
    // already imported.
    expect(names).not.toContain('defineComponent')
  })
  test('should report suggestions in a vue file', async () => {
    const server = createLanguageServerForTest()
    server.openFile('fixture-completion-at-position.vue')
    server.sendCommand(Proto.CommandTypes.Completions, <Proto.CompletionsRequestArgs>{
      file: server.canonicalFileName('fixture-completion-at-position.vue'),
      line: 10,
      offset: 18,
      triggerCharacter: '.',
    })

    await server.close()

    expect(server.responses).toHaveLength(1)
    const response: Proto.CompletionsResponse = server.responses[0]
    expect(response.command).toBe(Proto.CommandTypes.Completions)
    expect(response.body).toHaveLength(1)
    expect(response.body!.map(item => [item.name])).toMatchSnapshot()
  })
})

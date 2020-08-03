import Proto from 'typescript/lib/protocol'
import { createLanguageServerForTest } from '../server'

describe('getDefinitionAndBoundSpan', () => {
  test('should provide definition for import from .ts file', async () => {
    const server = createLanguageServerForTest()
    server.openFile('fixture-definition.vue')
    server.sendCommand(Proto.CommandTypes.DefinitionAndBoundSpan, <
      Proto.DefinitionRequest['arguments']
    >{
      file: server.canonicalFileName('fixture-definition.vue'),
      line: 9,
      offset: 15,
    })

    await server.close()

    expect(server.responses).toHaveLength(1)
    const response = server.responses[0] as Proto.DefinitionAndBoundSpanResponse
    expect(response.command).toBe(Proto.CommandTypes.DefinitionAndBoundSpan)
    expect(response.body).toBeTruthy()
  })
})

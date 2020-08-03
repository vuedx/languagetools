import Proto from 'typescript/lib/protocol'
import { createLanguageServerForTest } from '../server'

describe('getDefinitionAtPosition', () => {
  test('should provide definition for import from .ts file', async () => {
    const server = createLanguageServerForTest()
    server.openFile('fixture-definition.vue')
    server.sendCommand(Proto.CommandTypes.Definition, <
      Proto.DefinitionRequest['arguments']
    >{
      file: server.canonicalFileName('fixture-definition.vue'),
      line: 9,
      offset: 15,
    })

    await server.close()

    expect(server.responses).toHaveLength(1)
    const response: Proto.DefinitionResponse = server.responses[0]
    expect(response.command).toBe(Proto.CommandTypes.Definition)
    expect(response.body).toBeTruthy()
  })
})

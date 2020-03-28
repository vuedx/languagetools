import Proto from 'typescript/lib/protocol'
import { createLanguageServerForTest } from '../server'

describe('getQuickInfo', () => {
  test('should display module name for .vue imports', async () => {
    const server = createLanguageServerForTest()
    server.openFile('fixture-quick-info.vue')
    server.sendCommand(Proto.CommandTypes.Quickinfo, <Proto.QuickInfoRequest['arguments']>{
      file: server.canonicalFileName('fixture-quick-info.vue'),
      line: 3,
      offset: 39,
    })

    await server.close()

    expect(server.responses).toHaveLength(1)
    const response: Proto.QuickInfoResponse = server.responses[0]
    expect(response.command).toBe(Proto.CommandTypes.Quickinfo)
    expect(response.body).toBeTruthy()
    expect(response.body!.displayString).toContain('fixture-completions-import.vue')
    expect(response.body!.displayString).toMatch(/\.vue"$/)
  })
  test('should show info about imports from .vue files', async () => {
    const server = createLanguageServerForTest()
    server.openFile('fixture-quick-info.vue')
    server.sendCommand(Proto.CommandTypes.Quickinfo, <Proto.QuickInfoRequest['arguments']>{
      file: server.canonicalFileName('fixture-quick-info.vue'),
      line: 3,
      offset: 23,
    })

    await server.close()

    expect(server.responses).toHaveLength(1)
    const response: Proto.QuickInfoResponse = server.responses[0]
    expect(response.command).toBe(Proto.CommandTypes.Quickinfo)
    expect(response.body).toBeTruthy()
    expect(response.body!.displayString).toContain('const Name: "foo"')
  })
})

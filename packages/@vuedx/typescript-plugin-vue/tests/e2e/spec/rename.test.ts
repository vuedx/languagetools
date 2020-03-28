// @ts-nocheck
import Proto from 'typescript/lib/protocol'
import { createLanguageServerForTest } from '../server'

describe('findRenameLocations', () => {
  test('should return rename locations', async () => {
    const server = createLanguageServerForTest()
    server.openFile('fixture-rename.vue')
    server.sendCommand(Proto.CommandTypes.Rename, <Proto.RenameRequestArgs>{
      file: server.canonicalFileName('fixture-rename.vue'),
      line: 4,
      offset: 8,
    })

    await server.close()

    expect(server.responses).toHaveLength(1)
    const response: Proto.RenameResponse = server.responses[0]
    expect(response.command).toBe(Proto.CommandTypes.Rename)
    expect(response.body).toBeTruthy()
    expect(response.body!.info.displayName).toBe('foo')
    expect(response.body!.locs).toHaveLength(1)
    const loc = response.body!.locs[0]
    // TODO: Figureout case insensitivity.
    expect(loc.file.toLowerCase()).toBe(
      server.canonicalFileName('fixture-rename.vue').toLowerCase()
    )
    expect(loc.locs).toHaveLength(4)
  })

  test('should return rename locations for prop name', async () => {
    const server = createLanguageServerForTest()
    server.openFile('fixture-rename.vue')
    server.sendCommand(Proto.CommandTypes.Rename, <Proto.RenameRequestArgs>{
      file: server.canonicalFileName('fixture-rename.vue'),
      line: 8,
      offset: 6,
    })

    await server.close()

    expect(server.responses).toHaveLength(1)
    const response: Proto.RenameResponse = server.responses[0]
    expect(response.command).toBe(Proto.CommandTypes.Rename)
    expect(response.body).toBeTruthy()
    expect(response.body!.info.displayName).toBe('foo')
    expect(response.body!.locs).toHaveLength(1)
    const loc = response.body!.locs[0]
    // TODO: Figure case sensitivity issue.
    expect(loc.file.toLowerCase()).toBe(server.canonicalFileName('fixture-rename.vue').toLowerCase())
    // TODO: Should get rename locations from dependent components
    //       and setup function.
    expect(loc.locs).toHaveLength(1)
  })
})

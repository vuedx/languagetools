import { VueTextDocument } from '@vuedx/vue-languageservice'
import { invariant } from '@vuedx/shared'
import {
  createConnection,
  InitializeResult,
  ProposedFeatures,
  TextDocumentIdentifier,
  TextDocuments,
  TextDocumentSyncKind,
} from 'vscode-languageserver/node'
import { createFilesystemHost, createFileSystemProvider } from './fs.node'
import { createVueLanguageService } from './service'

const connection = createConnection(ProposedFeatures.all)
const documents = new TextDocuments(VueTextDocument)

console.log = connection.console.log.bind(connection.console)
console.error = connection.console.error.bind(connection.console)
console.warn = connection.console.warn.bind(connection.console)
console.info = connection.console.info.bind(connection.console)

connection.onInitialize((client) => {
  const server: InitializeResult = {
    capabilities: { textDocumentSync: TextDocumentSyncKind.Incremental },
    serverInfo: { name: 'vue-language-server', version: '0.0.1' },
  }

  const service = createVueLanguageService(
    documents,
    createFilesystemHost(),
    createFileSystemProvider(),
    client.capabilities.general?.markdown != null,
  )

  // Feature: Completion
  server.capabilities.completionProvider = {}
  connection.onCompletion(async ({ textDocument, position }) => {
    return await service.complete(getDocument(textDocument), position)
  })

  // Feature: Hover
  server.capabilities.hoverProvider = true
  connection.onHover(async ({ textDocument, position }) => {
    return await service.hover(getDocument(textDocument), position)
  })

  return server

  function getDocument(textDocument: TextDocumentIdentifier): VueTextDocument {
    const document = documents.get(textDocument.uri)
    invariant(document != null)
    return document
  }
})

documents.listen(connection)
connection.listen()

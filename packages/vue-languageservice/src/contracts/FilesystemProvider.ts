import type { TextDocumentContentChangeEvent } from '@vuedx/vue-virtual-textdocument';

export interface FilesystemProvider {
  exists(fileName: string): boolean;
  read(fileName: string): string;
  watch(
    fileName: string,
    onChange: (
      changes: TextDocumentContentChangeEvent[],
      version: number
    ) => void
  ): () => void;
}

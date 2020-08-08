// @ts-nocheck
import FS from 'fs';
import Proto from 'typescript/lib/protocol';
import { TextDocument } from 'vscode-languageserver-textdocument';

export async function getTextRanges(fileName: string, ranges: Proto.RenameTextSpan[]) {
  const content = await FS.promises.readFile(fileName, { encoding: 'utf-8' });
  const document = TextDocument.create(fileName, 'vue', 0, content);

  return ranges.map(({ start, end, prefixText, suffixText }) => {
    let text = document.getText({
      start: { line: start.line - 1, character: start.offset - 1 },
      end: { line: end.line - 1, character: end.offset - 1 },
    });

    if (prefixText) text = text.substr(prefixText.length);
    if (suffixText) text = text.substr(0, text.length - suffixText.length);

    return { prefixText, text, suffixText };
  });
}
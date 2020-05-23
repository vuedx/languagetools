export function generateCodeFrame(
  source: string,
  start = 0,
  end = source.length,
  underline = (str: string) => str,
  gutter = (str: string) => str,
  range: number = 2
): string {
  const lines = source.split(/\r?\n/);
  let count = 0;
  const res: string[] = [];
  const width = String(lines.length).length;
  const getLine = (line: number | string) => String(line).padStart(width) + ' | ';
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) continue;
        const line = j + 1;
        res.push(`${gutter(getLine(line))}${lines[j]}`);
        const lineLength = lines[j].length;
        if (j === i) {
          // push underline
          const pad = start - (count - lineLength) + 1;
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(gutter(getLine('')) + ' '.repeat(pad) + underline('^'.repeat(length)));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(gutter(getLine('')) + underline('^'.repeat(length)));
          }
          count += lineLength + 1;
        }
      }
      break;
    }
  }
  return res.join('\n');
}

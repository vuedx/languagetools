const Path = require('path');
const FS = require('fs/promises');
const { parse } = require('..');

async function main() {
  const files = await FS.readdir(Path.resolve(__dirname, 'fixtures')).then((files) =>
    files.filter((file) => file.endsWith('.vue')).map((file) => Path.resolve(__dirname, 'fixtures', file))
  );

  await Promise.all(
    files.map(async (file) =>
      FS.writeFile(
        file + '.json',
        JSON.stringify(parse(await FS.readFile(file, { encoding: 'utf-8' })).descriptor, null, 2)
      )
    )
  );
}

main();

import { sync as glob } from 'glob';
import { ServerPlugin } from 'vite';
import * as Path from 'path';

export const StoriesPlugin = createStoriesPlugin({ ui: '@vuedx/stories-ui' });

export function createStoriesPlugin(options: { ui: string }): ServerPlugin {
  return function StoriesPlugin({ root, app, watcher }) {
    const files = new Set(glob('**/*.stories.{js,ts,jsx,tsx}', { root, absolute: false }));

    const RE = /\.stories\.(j|t)sx?$/;

    watcher.on('add', (path: string) => {
      const fileName = Path.relative(root, path);
      if (!files.has(fileName) && RE.test(fileName)) {
        files.add(fileName);
      }
    });

    watcher.on('unlink', (path: string) => {
      const fileName = Path.relative(root, path);
      if (files.has(fileName) && RE.test(fileName)) {
        files.delete(Path.relative(root, path));
      }
    });

    app.use(async (ctx, next) => {
      if (ctx.path === '/') {
        ctx.body = `<!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Stories</title>
        </head>
        
        <body>
          <div id="app"></div>
          <script type="module" src="/@__stories"></script>
        </body>
        
        </html>`;
        ctx.type = 'text/html';
      }

      if (ctx.path === '/@__stories') {
        ctx.body = `
          import { createStoriesApp } from '${options.ui}'
          import { registerStoryModule } from '@vuedx/stories'
          
          createStoriesApp()
  
          ${Array.from(files)
            .map((file) => `import('./${file}').then(registerStoryModule)`)
            .join('\n')}
        `;
        ctx.type = 'application/javascript';
      }

      return next();
    });
  };
}

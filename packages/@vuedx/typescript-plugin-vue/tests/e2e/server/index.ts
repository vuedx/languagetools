import { ChildProcess, fork } from 'child_process';
import Fs from 'fs';
import Path from 'path';
import Readline from 'readline';
import Proto from 'typescript/lib/protocol';

const needsBreakpoints = process.env.CI === 'vscode-jest-tests';

export interface TestVueServerOptions {
  logFile: string;
  serverPath: string;
}

const rootDir = Path.resolve(__dirname, '../../..');

export class TestVueServer {
  private seq = 0;
  private isClosed = false;
  private _responses: any[] = [];
  private pendingResponses = 0;
  private server: ChildProcess;
  private onExit: Promise<number>;

  public get responses(): readonly Proto.Response[] {
    return this._responses;
  }

  constructor(private readonly projectDir: string, options: Partial<TestVueServerOptions>) {
    const config: TestVueServerOptions = {
      logFile: Path.resolve(__dirname, 'tsserver.log'),
      serverPath: Path.resolve(rootDir, 'node_modules/typescript/lib/tsserver.js'),
      ...options,
    };

    this.server = fork(
      config.serverPath,
      [
        '--logVerbosity',
        'verbose',
        '--logFile',
        config.logFile,
        '--globalPlugins',
        Path.resolve(rootDir, 'dist/typescript-plugin-vue.js'),
        '--pluginProbeLocations',
        rootDir,
        '--allowLocalPluginLoads',
      ],
      {
        cwd: projectDir,
        stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
        execArgv: needsBreakpoints ? ['--inspect-brk=9229'] : ['--inspect'],
      }
    );

    this.onExit = new Promise((resolve, reject) => {
      this.server.on('exit', (code) => resolve(code || 0));
      this.server.on('error', (error) => reject(error));
    });

    const pid = this.server.pid;
    this.onExit.finally(() => {
      const logFiles = [Path.resolve(__dirname, `ti-${pid}.log`)];

      if (config.logFile.endsWith(`.PID.log`)) {
        logFiles.push(config.logFile.replace('PID', String(pid)));
      }

      logFiles.forEach((logFile) => Fs.existsSync(logFile) && Fs.unlinkSync(logFile));
    });

    this.server.stdout!.setEncoding('utf-8');

    Readline.createInterface({ input: this.server.stdout! }).on('line', (line) => {
      if (line[0] !== '{') return;

      try {
        const result = JSON.parse(line);
        if (result.type === 'response') {
          this._responses.push(result);

          --this.pendingResponses;

          if (this.pendingResponses <= 0 && this.isClosed) {
            this.shutdown();
          }
        }
      } catch {
        // parse next line.
      }
    });
  }

  private send(request: Omit<Proto.Request, 'seq' | 'type'>, expectsReponse: boolean) {
    if (this.isClosed) {
      throw new Error('Server is closed.');
    }

    if (expectsReponse) ++this.pendingResponses;
    const seq = this.seq++;
    const content = JSON.stringify({ seq, type: 'request', ...request }) + '\n';

    this.server.stdin!.write(content);

    return seq;
  }

  public sendCommand(command: string, args: any) {
    return this.send({ command, arguments: args }, true);
  }

  public canonicalFileName(file: string) {
    return Path.resolve(this.projectDir, file);
  }

  public openFile(file: string, fileContent?: string, scriptKindName?: Proto.OpenRequestArgs['scriptKindName']) {
    file = this.canonicalFileName(file);
    if (fileContent == undefined) {
      fileContent = Fs.readFileSync(file, {
        encoding: 'utf8',
      });
    }

    if (scriptKindName == undefined) {
      const ext = file.substr(file.lastIndexOf('.') + 1).toUpperCase();

      if (/^(ts|js)x?$/i.test(ext)) {
        // @ts-ignore
        scriptKindName = ext;
      }
    }

    return this.send(
      <Proto.OpenRequest>{
        command: 'open',
        arguments: {
          file,
          fileContent,
          scriptKindName,
          projectRootPath: this.projectDir,
        },
      },
      false
    );
  }

  public close() {
    if (!this.isClosed) {
      this.isClosed = true;
      if (this.pendingResponses <= 0) {
        this.shutdown();
      }
    }

    return this.onExit;
  }

  private shutdown() {
    this.server.stdin!.end();
  }
}

export function createLanguageServerForTest(projectDir?: string) {
  projectDir = projectDir
    ? Path.isAbsolute(projectDir)
      ? projectDir
      : Path.resolve(rootDir, projectDir)
    : Path.resolve(__dirname, '../project/');

  const logFile = Path.resolve(
    __dirname,
    'tsserver.' + Path.basename(projectDir) + (process.env.TEST_ENV === 'jest' ? '.PID' : '') + '.log'
  );

  return new TestVueServer(projectDir, { logFile });
}

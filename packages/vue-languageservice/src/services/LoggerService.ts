import * as util from 'util'

interface Writer {
  info(line: string): void
  error(line: string): void
  debug(line: string): void
}

export class LoggerService {
  private readonly id: string

  constructor(private readonly context: string) {
    this.id = LoggerService.currentId ?? 'unknown'
  }

  public info(message: string, ...args: any[]): void {
    LoggerService.writer.info(
      `[VueDX] P(${this.id}) (${this.context}) ${util.formatWithOptions(
        { breakLength: Infinity, colors: false },
        message,
        ...args,
      )}`,
    )
  }

  public debug(message: string, ...args: any[]): void {
    LoggerService.writer.debug(
      `[VueDX] P(${this.id}) (${this.context}) ${util.formatWithOptions(
        { breakLength: Infinity, colors: false },
        message,
        ...args,
      )}`,
    )
  }

  public error(message: string | Error, ...args: any[]): void {
    LoggerService.writer.error(
      `[VueDX] P(${this.id}) (${this.context}) ${util.formatWithOptions(
        { breakLength: Infinity, colors: false },
        '',
        message,
        ...args,
      )}`,
    )
  }

  public static currentId: string | null = null

  private static writer: Writer = {
    info: (line) => process.stderr.write(line + '\n'),
    error: (line) => process.stderr.write(line + '\n'),
    debug: (line) => process.stderr.write(line + '\n'),
  }

  public static setWriter(writer: Writer): void {
    this.writer = writer
  }

  public static getLogger(name: string): LoggerService {
    return new LoggerService(name)
  }
}

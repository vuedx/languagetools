import * as util from 'util'

interface Writer {
  info(line: string): void
  error(line: string): void
  debug(line: string): void
}

export const enum LogLevel {
  DEBUG,
  INFO,
  ERROR,
  SILENT,
}

export class LoggerService {
  private readonly id: string
  private readonly context: string
  private level: LogLevel

  constructor(context: string, level: LogLevel = LogLevel.INFO) {
    this.id = LoggerService.currentId ?? 'unknown'
    this.context = context
    this.level = level
  }

  public setLevel(level: LogLevel): void {
    this.level = level
  }

  public debug(message: string, ...args: any[]): void {
    if (this.level > LogLevel.DEBUG) return
    LoggerService.writer.debug(
      `D [VueDX] P(${this.id}) (${this.context}) ${util.formatWithOptions(
        { breakLength: Infinity, colors: false },
        message,
        ...args,
      )}`,
    )
  }

  public info(message: string, ...args: any[]): void {
    if (this.level > LogLevel.INFO) return
    LoggerService.writer.info(
      `I [VueDX] P(${this.id}) (${this.context}) ${util.formatWithOptions(
        { breakLength: Infinity, colors: false },
        message,
        ...args,
      )}`,
    )
  }

  public error(message: string | Error, ...args: any[]): void {
    if (this.level > LogLevel.ERROR) return
    LoggerService.writer.error(
      `E [VueDX] P(${this.id}) (${this.context}) ${util.formatWithOptions(
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

  public static getLogger(name: string, level?: LogLevel): LoggerService {
    return new LoggerService(name, level)
  }
}

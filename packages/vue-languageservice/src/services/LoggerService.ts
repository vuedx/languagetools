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
  readonly #id: string
  readonly #context: string
  #level: LogLevel

  constructor(context: string, level: LogLevel = LogLevel.DEBUG) {
    this.#id = LoggerService.currentId ?? ''
    this.#context = context
    this.#level = level
  }

  public setLevel(level: LogLevel): void {
    this.#level = level
  }

  public debug(message: string, ...args: any[]): void {
    if (this.#level > LogLevel.DEBUG) return
    this.#write('debug', message, ...args)
  }

  public info(message: string, ...args: any[]): void {
    if (this.#level > LogLevel.INFO) return
    this.#write('info', message, ...args)
  }

  public error(message: string | Error, ...args: any[]): void {
    if (this.#level > LogLevel.ERROR) return
    if (typeof message === 'string') {
      this.#write('error', message, ...args)
    } else {
      this.#write('error', '', message, ...args)
    }
  }

  #getPrefix(level: string): string {
    return `${level.toUpperCase()} "VueDX/${this.#context}/P${this.#id}"`
  }

  #write(level: keyof Writer, message: string, ...args: any[]): void {
    LoggerService.#writer[level](
      `${this.#getPrefix(level)} ${util.formatWithOptions(
        { colors: false },
        message,
        ...args,
      )}`,
    )
  }

  public static currentId: string | null = null

  static #writer: Writer = {
    info: (line) => process.stderr.write(line + '\n'),
    error: (line) => process.stderr.write(line + '\n'),
    debug: (line) => process.stderr.write(line + '\n'),
  }

  public static setWriter(writer: Writer): void {
    this.#writer = writer
  }

  public static getLogger(name: string, level?: LogLevel): LoggerService {
    return new LoggerService(name, level)
  }
}

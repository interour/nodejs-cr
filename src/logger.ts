/* eslint-disable no-console */
// Simple and extensible logger class. To be migrated to a real logger later

/**
 * Log Level for this logger. Order of levels is as such:
 * Error > Warn > Info > Debug
 */
export enum LogLevel {
  Error = 4,
  Warn = 3,
  Info = 2,
  Debug = 1,
}

function fmt(msg: string): string {
  return `${new Date().toISOString()} - ${msg}`;
}

class Logger {
  private level: LogLevel;

  constructor() {
    this.level = LogLevel.Info;
  }

  /**
   * Sets the given {@link LogLevel} for this Logger. Current loglevel must be less than or equal to the level to print
   * @param level Desired LogLevel
   */
  setLogLevel(level: LogLevel): void {
    this.level = level;
  }

  /**
   * Internal logger wrapper for {@link console.debug}, decorating each line with [DEBUG]
   */
  debug(msg: string, ...args: unknown[]): void {
    if (this.level >= LogLevel.Debug) {
      console.debug(fmt(`[DEBUG] ${msg}`), ...args);
    }
  }

  /**
   * Internal logger wrapper for {@link console.error}, decorating each line with [ERROR]
   */
  error(msg: string, ...args: unknown[]): void {
    if (this.level >= LogLevel.Error) {
      console.error(fmt(`[ERROR] ${msg}`), ...args);
    }
  }

  /**
   * Internal logger wrapper for {@link console.info}, decorating each line with [INFO]
   */
  info(msg: string, ...args: unknown[]): void {
    if (this.level >= LogLevel.Info) {
      console.info(fmt(`[INFO] ${msg}`), ...args);
    }
  }

  /**
   * Internal logger wrapper for {@link console.log} with no decoration. This method always prints regardless of level
   */
  log(msg: string, ...args: unknown[]): void {
    console.log(fmt(msg), ...args);
  }

  /**
   * Internal logger wrapper for {@link console.warn}, decorating each line with [WARN]
   */
  warn(msg: string, ...args: unknown[]): void {
    if (this.level >= LogLevel.Warn) {
      console.warn(fmt(`[WARN] ${msg}`), ...args);
    }
  }

}

export default new Logger();

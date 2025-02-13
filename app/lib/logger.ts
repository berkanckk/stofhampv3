type LogLevel = 'info' | 'warn' | 'error'

interface LogEntry {
  timestamp: string
  level: LogLevel
  message: string
  error?: any
  context?: Record<string, any>
}

class Logger {
  private static instance: Logger
  private logs: LogEntry[] = []
  private readonly MAX_LOGS = 1000

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }

  private addLog(level: LogLevel, message: string, error?: any, context?: Record<string, any>) {
    const logEntry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      ...(error && { error: this.formatError(error) }),
      ...(context && { context })
    }

    this.logs.unshift(logEntry)

    // Keep only the last MAX_LOGS entries
    if (this.logs.length > this.MAX_LOGS) {
      this.logs = this.logs.slice(0, this.MAX_LOGS)
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console[level](logEntry)
    }
  }

  private formatError(error: any): any {
    if (error instanceof Error) {
      return {
        name: error.name,
        message: error.message,
        stack: error.stack
      }
    }
    return error
  }

  public info(message: string, context?: Record<string, any>) {
    this.addLog('info', message, undefined, context)
  }

  public warn(message: string, context?: Record<string, any>) {
    this.addLog('warn', message, undefined, context)
  }

  public error(message: string, error?: any, context?: Record<string, any>) {
    this.addLog('error', message, error, context)
  }

  public getLogs(level?: LogLevel, limit = 100): LogEntry[] {
    let filteredLogs = this.logs
    if (level) {
      filteredLogs = filteredLogs.filter(log => log.level === level)
    }
    return filteredLogs.slice(0, limit)
  }

  public clearLogs() {
    this.logs = []
  }
}

export const logger = Logger.getInstance() 
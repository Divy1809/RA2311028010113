type LogLevel = "INFO" | "ERROR" | "DEBUG";

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  data?: any;
}

const formatLog = (entry: LogEntry) => {
  return {
    ...entry,
    timestamp: new Date().toISOString(),
  };
};

export const logger = {
  info: (message: string, data?: any) => {
    const log = formatLog({ level: "INFO", message, timestamp: "", data });
    console.info(log);
  },

  error: (message: string, data?: any) => {
    const log = formatLog({ level: "ERROR", message, timestamp: "", data });
    console.error(log);
  },

  debug: (message: string, data?: any) => {
    const log = formatLog({ level: "DEBUG", message, timestamp: "", data });
    console.debug(log);
  },
};  
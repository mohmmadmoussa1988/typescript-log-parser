export enum LogLevelEnum {
  ERROR = "error",
  INFO = "info",
  DEBUG = "debug",
  WARN = "warn",
}

export function LogLevelEnumFromString(value: string): LogLevelEnum {
  switch (value) {
    case "error":
      return LogLevelEnum.ERROR;
    case "info":
      return LogLevelEnum.INFO;
    case "debug":
      return LogLevelEnum.DEBUG;
    case "warn":
      return LogLevelEnum.WARN;
  }

  throw Error(`${value} is not a valid LogLevelEnum value`);
}

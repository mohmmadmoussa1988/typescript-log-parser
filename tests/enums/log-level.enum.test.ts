import {
  LogLevelEnum,
  LogLevelEnumFromString,
} from "../../src/enums/log-level.enum";

describe("LogLevelEnumFromString", () => {
  test("Should return LogLevelEnum.ERROR for 'error'", () => {
    const result = LogLevelEnumFromString("error");
    expect(result).toBe(LogLevelEnum.ERROR);
  });

  test("Should return LogLevelEnum.INFO for 'info'", () => {
    const result = LogLevelEnumFromString("info");
    expect(result).toBe(LogLevelEnum.INFO);
  });

  test("Should return LogLevelEnum.DEBUG for 'debug'", () => {
    const result = LogLevelEnumFromString("debug");
    expect(result).toBe(LogLevelEnum.DEBUG);
  });

  test("Should return LogLevelEnum.WARN for 'warn'", () => {
    const result = LogLevelEnumFromString("warn");
    expect(result).toBe(LogLevelEnum.WARN);
  });

  test("Should throw an error for an invalid value", () => {
    expect(() => {
      LogLevelEnumFromString("invalid");
    }).toThrowError("invalid is not a valid LogLevelEnum value");
  });
});

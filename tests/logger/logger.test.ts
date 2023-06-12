import logger from "../../src/logger/logger";

describe("Logger", () => {
  test("Should have level set to 'info'", () => {
    expect(logger.level).toBe("info");
  });
});

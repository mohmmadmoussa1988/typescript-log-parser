import * as fs from "node:fs";
import { WritePermission } from "../../src/validation/write-permission";
import mock from "mock-fs";

describe("WritePermission", () => {
  let validator: WritePermission;
  const outputFilePath = "./errors.json";

  beforeEach(() => {
    validator = new WritePermission();
    // Mock the file system before each test
    mock({
      "/": mock.directory({
        mode: parseInt("0755", 8),
      }),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
    mock.restore();
  });

  test("isValid should return true if output folder is writable", () => {
    //Act
    const isValid = validator.isValid(outputFilePath);

    // Assert
    expect(isValid).toBe(true);
  });
});

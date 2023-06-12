import { FileExistsValidator } from "../../src/validation/file-exist-validator";

describe("FileExistsValidator", () => {
  let validator: FileExistsValidator;
  const inputFilePath = "./tests/mocks/app.log";
  const outputFilePath = "./errors.json";

  beforeEach(() => {
    validator = new FileExistsValidator();
  });

  test("isValid should return true if file exists", () => {
    // Act
    const isValid = validator.isValid(inputFilePath);

    // Assert
    expect(isValid).toBe(true);
  });

  test("isValid should return false if file does not exist", () => {
    // Act
    const isValid = validator.isValid(outputFilePath);
    // Assert
    expect(isValid).toBe(false);
  });
});

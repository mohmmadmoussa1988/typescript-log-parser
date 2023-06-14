import { FileNotExistsValidator } from "../../src/validations/file-not-exist-validator";

describe("FileNotExistsValidator", () => {
  let validator: FileNotExistsValidator;
  const inputFilePath = "./tests/mocks/app.log";
  const outputFilePath = "./errors.json";

  beforeEach(() => {
    validator = new FileNotExistsValidator();
  });

  test("isValid should return true if file dosenot exists", () => {
    // Act
    const isValid = validator.isValid(inputFilePath);

    // Assert
    expect(isValid).toBe(false);
  });

  test("isValid should return false if file does exist", () => {
    // Act
    const isValid = validator.isValid(outputFilePath);
    // Assert
    expect(isValid).toBe(true);
  });
});

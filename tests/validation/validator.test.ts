import { ValidatorInterface } from "../../src/validations/validation.interface";
import { Validator } from "../../src/validations/validator";

class MockValidator<T> implements ValidatorInterface<T> {
  isValid(input: T): boolean {
    // Custom implementation for testing
    return input !== undefined;
  }
}

describe("Validator", () => {
  let validator: Validator<any>;

  beforeEach(() => {
    validator = new Validator();
  });

  test("validate should return an empty array if all rules pass", () => {
    // Arrange
    const rules = [
      {
        validator: new MockValidator<number>(),
        input: 10,
        errorMessage: "Input must be a number",
      },
      {
        validator: new MockValidator<string>(),
        input: "Hello",
        errorMessage: "Input must be a string",
      },
    ];

    // Act
    const errorMessages = validator.validate(rules);

    // Assert
    expect(errorMessages).toEqual([]);
  });

  test("validate should return an array of error messages for failed rules", () => {
    // Arrange
    const rules = [
      {
        validator: new MockValidator<number>(),
        input: undefined,
        errorMessage: "Input must be a number",
      },
      {
        validator: new MockValidator<string>(),
        input: undefined,
        errorMessage: "Input must be a string",
      },
    ];

    // Act
    const errorMessages = validator.validate(rules);

    // Assert
    expect(errorMessages).toEqual([
      "Input must be a number",
      "Input must be a string",
    ]);
  });
});

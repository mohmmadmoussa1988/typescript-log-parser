import { ValidatorInterface } from "./validation.interface";

export class Validator<T> {
  public validate(
    rules: {
      validator: ValidatorInterface<T>;
      input: T;
      errorMessage: string;
    }[]
  ): string[] {
    const errorMessages = [];

    for (let rule of rules) {
      if (!rule.validator.isValid(rule.input)) {
        errorMessages.push(rule.errorMessage + "\n");
      }
    }

    return errorMessages;
  }
}

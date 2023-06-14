export interface ValidatorInterface <T> {
  isValid(input: T): boolean;
}

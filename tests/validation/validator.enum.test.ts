import { validatorEnum } from "../../src/validation/validator.enum";

describe("validatorEnum", () => {
  test("EXIST should have a value of 'exist'", () => {
    expect(validatorEnum.EXIST).toBe("exist");
  });

  test("NOTEXIST should have a value of 'notExist'", () => {
    expect(validatorEnum.NOTEXIST).toBe("notExist");
  });

  test("WRITABLE should have a value of 'writable'", () => {
    expect(validatorEnum.WRITABLE).toBe("writable");
  });

  test("All enum values should be unique", () => {
    const enumValues = Object.values(validatorEnum);
    const uniqueValues = new Set(enumValues);

    expect(enumValues.length).toBe(uniqueValues.size);
  });
});

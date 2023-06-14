import { ErrorTypeFormatter } from "../../src/formatters/error-type-formatter";
import { IFormatter } from "../../src/formatters/format.interface";

describe("ErrorTypeFormatter", () => {
  let formater: IFormatter;

  beforeEach(() => {
    formater = new ErrorTypeFormatter();
  });

  test("format method should return FormattedlogRecordInterface array", () => {
    // Act
    const record = [
      {
        date: "2021-08-09T02:12:51.259Z",
        logLevel: "error",
        json: {
          transactionId: "9abc55b2-807b-4361-9dbe-aa88b1b2e978",
          details: "Cannot find user orders list",
          code: 404,
          err: "Not found",
        },
      },
    ];

    const formattedResults = formater.format(record);

    // Assert
    expect(formattedResults).toEqual([
      {
        timestamp: 1628475171,
        loglevel: "error",
        transactionId: "9abc55b2-807b-4361-9dbe-aa88b1b2e978",
        err: "Not found",
      },
    ]);
  });
});

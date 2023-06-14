import { LogLevelEnum } from "../../src/enums/log-level.enum";
import { IFilter } from "../../src/filters/filter.interface";
import { LogLevelFilter } from "../../src/filters/log-level-type-filter";

describe("LogLevelFilter", () => {
  let filter: IFilter;

  beforeEach(() => {
    filter = new LogLevelFilter();
  });

  test("filter method should return error log level only", () => {
    // Act
    const records = [
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
      {
        date: "2021-08-09T02:12:51.259Z",
        logLevel: "warn",
        json: {
          transactionId: "9abc55b2-807b-4361-9dbe-aa88b1b2e978",
          details: "Cannot find user orders list",
          code: 404,
          err: "Not found",
        },
      },
    ];

    const formattedResults = filter.logLevelFilter(LogLevelEnum.ERROR, records);

    // Assert
    expect(formattedResults).toEqual([
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
    ]);
  });
});

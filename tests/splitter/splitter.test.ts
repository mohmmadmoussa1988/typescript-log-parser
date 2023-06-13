import { Splitter } from "../../src/splitters/splitter";
import { ISplitter } from "../../src/splitters/splitter.interface";
import { DefaultlogRecordInterface } from "../../src/interfaces/default-log-record.interface";
import * as defaults from "../../src/splitters/defaults";

describe("Splitter", () => {
  let splitter: ISplitter;

  beforeEach(() => {
    splitter = new Splitter();
  });

  test("split should return an empty array when lines array is empty", () => {
    const lines: string[] = [];
    const format = defaults.default.splitterDefaultFormat;
    const result = splitter.split(lines, format);
    expect(result).toEqual([]);
  });

  test("split should return an array of parsed log records for valid lines", () => {
    const lines: string[] = [
      '2044-08-09T02:12:51.253Z - info - {"transactionId":"1","details":"a"}',
      '2044-08-09T02:12:51.253Z - error - {"transactionId":"2","details":"b"}',
    ];
    const format = defaults.default.splitterDefaultFormat;
    const result = splitter.split(lines, format);

    const expectedResults: DefaultlogRecordInterface[] = [
      {
        date: "2044-08-09T02:12:51.253Z",
        logLevel: "info",
        json: { transactionId: "1", details: "a" },
      },
      {
        date: "2044-08-09T02:12:51.253Z",
        logLevel: "error",
        json: { transactionId: "2", details: "b" },
      },
    ];

    expect(result).toEqual(expectedResults);
  });

  test("split should throw an error for lines that do not match the format", () => {
    const lines: string[] = [
      '2044-08-09T02:12:51.253Z - {"transactionId":"1","details":"a"}',
    ];
    const format = defaults.default.splitterDefaultFormat;
    expect(() => {
      splitter.split(lines, format);
    }).toThrowError("Line does not match the expected format.");
  });
});

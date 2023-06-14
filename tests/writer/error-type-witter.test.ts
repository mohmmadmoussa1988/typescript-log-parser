import { JsonArrayWriter } from "../../src/writers/error-type-witter";
import * as fs from "node:fs";
import winston from "winston";

jest.mock("node:fs");
jest.mock("winston", () => ({
  format: {
    timestamp: jest.fn(),
    simple: jest.fn(),
    combine: jest.fn(),
  },
  transports: {
    Console: jest.fn(),
  },
  createLogger: jest.fn().mockReturnValue({
    info: jest.fn(),
  }),
}));

describe("createOutputFile", () => {
  it("should create the output file", () => {
    const outputFile = "./output.txt";

    const writer = new JsonArrayWriter();
    writer.createOutputFile(outputFile);

    expect(fs.writeFileSync).toHaveBeenCalled();
    expect(fs.writeFileSync).toHaveBeenCalledWith(outputFile, "[");
  });
});

describe("append", () => {
  it("should append records to createdFile", () => {
    const outputFile = "/output.txt";
    const record = {
      timestamp: 1628475171,
      loglevel: "error",
      transactionId: "9abc55b2-807b-4361-9dbe-aa88b1b2e978",
      err: "Not found",
    };
    const writer = new JsonArrayWriter();
    writer["outputFile"] = outputFile;
    writer.append([record]);

    expect(fs.appendFileSync).toHaveBeenCalled();
    expect(fs.appendFileSync).toHaveBeenCalledWith(
      outputFile,
      JSON.stringify(record)
    );
  });

  describe("closingCreatedFile", () => {
    it("should close the output file", () => {
      const outputFile = "./output.txt";

      const writer = new JsonArrayWriter();
      writer["outputFile"] = outputFile;
      writer.closingCreatedFile();

      expect(fs.appendFileSync).toHaveBeenCalled();
      expect(fs.appendFileSync).toHaveBeenCalledWith(outputFile, "]");
    });
  });
});

import { FileReader } from "../../src/reader/file-reader";
import defaults from "../../src/splitters/defaults";
import { Splitter } from "../../src/splitters/splitter";
import { LogLevelFilter } from "../../src/filters/log-level-type-filter";
import { FormatFactory } from "../../src/formaters/format.factory";
import { WritterFactory } from "../../src/writers/writter.factory";
import { LogLevelEnum } from "../../src/enums/log-level.enum";
import { IWriter } from "../../src/writers/writter.interface";

// Create a mock implementation of the IWriter interface
class MockWriter implements IWriter {
  createOutputFile = jest.fn();
  closingCreatedFile = jest.fn();
  append = jest.fn();
}

// Define mock processing and finish functions
const processFunction = jest.fn();
const finishFunction = jest.fn();

test("File reading and batch processing", async () => {
  // Arrange
  const filePath = "./tests/mocks/app.log";
  const batchSize = 10;
  const format = defaults.splitterDefaultFormat;
  const logLevel = LogLevelEnum.ERROR;
  const splitter = new Splitter();
  const filter = new LogLevelFilter();
  const formater = FormatFactory.create(logLevel);
  //const writer = mockWritterFactory.create(logLevel);

  const reader = new FileReader(splitter, filter, formater, new MockWriter());

  // Act
  const result = await reader.readFileInBatches(
    filePath,
    batchSize,
    logLevel,
    format
  );

  // Assert
  expect(result).toEqual("done");
});

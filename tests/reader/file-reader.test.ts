import { FileReader } from "../../src/reader/file-reader";
import defaults from "../../src/splitters/defaults";
import { Splitter } from "../../src/splitters/splitter";

// Define mock processing and finish functions
const processFunction = jest.fn();
const finishFunction = jest.fn();

test("File reading and batch processing", async () => {
  // Arrange
  const filePath = "./tests/mocks/app.log";
  const batchSize = 10;
  const format = defaults.splitterDefaultFormat;
  const splitter = new Splitter();
  const reader = new FileReader(splitter);

  // Act
  const result = await reader.readFileInBatches(filePath, batchSize);

  // Assert
  expect(result).toEqual("done");
});

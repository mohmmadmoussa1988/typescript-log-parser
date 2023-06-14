import { FileReader } from "./reader/file-reader";
import { Validator } from "./validations/validator";
import { ISplitter } from "./splitters/splitter.interface";
import { FileNotExistsValidator } from "./validations/file-not-exist-validator";
import { WritePermission } from "./validations/write-permission";
import { FileExistsValidator } from "./validations/file-exist-validator";
import { OptionsInterface } from "./interfaces/command-options.interface";
import { IWriter } from "./writers/writter.interface";
import { IFilter } from "./filters/filter.interface";
import { IFormatter } from "./formatters/format.interface";

export default class Application {
  private readonly splitter: ISplitter;
  private readonly reader: FileReader;
  private readonly formater: IFormatter;
  private readonly writer: IWriter;
  private readonly filter: IFilter;

  constructor(
    splitter: ISplitter,
    reader: FileReader,
    filter: IFilter,
    formater: IFormatter,
    writer: IWriter
  ) {
    this.splitter = splitter;
    this.reader = reader;
    this.formater = formater;
    this.writer = writer;
    this.filter = filter;
  }

  async run(options: OptionsInterface): Promise<void> {
    this.validate(options);
    await this.exec(options);
  }

  private async exec(options: OptionsInterface): Promise<void> {
    this.writer.createOutputFile(options.outputFilePath);

    await this.reader.readFileInBatches(
      options.inputFilePath,
      options.batchNumber,
      options.logLevel,
      options.logFormat
    );

    this.writer.closingCreatedFile();
  }

  private validate(options: OptionsInterface) {
    const validator = new Validator();
    const errors = validator.validate([
      {
        input: options.inputFilePath,
        validator: new FileExistsValidator(),
        errorMessage: `${options.inputFilePath} does not exist`,
      },
      {
        input: options.outputFilePath,
        validator: new FileNotExistsValidator(),
        errorMessage: `${options.outputFilePath} already exists, please delete it first`,
      },
      {
        input: options.outputFilePath,
        validator: new WritePermission(),
        errorMessage: "Output directory is not writable",
      },
    ]);

    if (errors.length > 0) {
      console.error(...errors);
      process.exit(1);
    }
  }
}

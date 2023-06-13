import { FileReader } from "./reader/file-reader";
import { Validator } from "./validation/validator";
import { ISplitter } from "./splitters/splitter.interface";
import { FileNotExistsValidator } from "./validation/file-not-exist-validator";
import { WritePermission } from "./validation/write-permission";
import { FileExistsValidator } from "./validation/file-exist-validator";
import { OptionsInterface } from "./interfaces/command-options.interface";

export default class Application {
  private readonly splitter: ISplitter;
  private readonly reader: FileReader;

  constructor(splitter: ISplitter, reader: FileReader) {
    this.splitter = splitter;
    this.reader = reader;
  }

  run(options: OptionsInterface): void {
    this.validate(options);
    this.exec(options);
  }

  private async exec(options: OptionsInterface): Promise<void> {
    const result = await this.reader.readFileInBatches(
      options.inputFilePath,
      2
    );
    console.log(result);
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

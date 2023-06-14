import { LogLevelEnum, LogLevelEnumFromString } from "./enums/log-level.enum";
import { program } from "commander";
import defaults from "./splitters/defaults";
import { OptionsInterface } from "./interfaces/command-options.interface";

export class Command {
  getOptions(): OptionsInterface {
    program
      .requiredOption(
        "-i, --input <inputFilePath>",
        "Specify the input file path"
      )
      .requiredOption(
        "-o, --output <outputFilePath>",
        "Specify the output file path"
      )
      .option(
        "-l, --log-format <string regex>",
        "Specify the log line regular expresion format",
        defaults.splitterDefaultFormat
      )
      .option(
        "-t, --log-level <string type of log level>",
        "Specify the log level type required ex. error, warn, info or debug",
        defaults.logLevel
      )
      .option(
        "-b, --batch-number <number of reading batch size>",
        "specify the batch size/lines for every reading loop, default is 1000",
        "1000"
      )

      .parse(process.argv);

    const options = program.opts();
    return {
      inputFilePath: options.input,
      outputFilePath: options.output,
      logFormat: options.logFormat,
      logLevel: LogLevelEnumFromString(options.logLevel),
      batchNumber: parseInt(options.batchNumber),
    };
  }
}

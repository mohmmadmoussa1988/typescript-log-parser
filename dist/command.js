"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const log_level_enum_1 = require("./enums/log-level.enum");
const commander_1 = require("commander");
const defaults_1 = __importDefault(require("./splitters/defaults"));
class Command {
    getOptions() {
        commander_1.program
            .requiredOption("-i, --input <inputFilePath>", "Specify the input file path")
            .requiredOption("-o, --output <outputFilePath>", "Specify the output file path")
            .option("-l, --log-format <string regex>", "Specify the log line regular expresion format", defaults_1.default.splitterDefaultFormat)
            .option("-t, --log-level <string type of log level>", "Specify the log level type required ex. error, warn, info or debug", defaults_1.default.logLevel)
            .option("-s, --splitter <regex used for record parsing>", "Specify the regex that should be used to split log records/lines, default regex provided", defaults_1.default.splitterDefaultFormat)
            .option("-b, --batch-number <number of reading batch size>", "specify the batch size/lines for every reading loop, default is 1000", "1000")
            .parse(process.argv);
        const options = commander_1.program.opts();
        return {
            inputFilePath: options.input,
            outputFilePath: options.output,
            logFormat: options.logFormat,
            logLevel: (0, log_level_enum_1.LogLevelEnumFromString)(options.logLevel),
            splitter: options.Splitter,
            batchNumber: parseInt(options.batchNumber),
        };
    }
}
exports.Command = Command;

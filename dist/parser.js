"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const splitter_1 = require("./splitters/splitter");
const file_reader_1 = require("./reader/file-reader");
const app_1 = __importDefault(require("./app"));
const command_1 = require("./command");
const writter_factory_1 = require("./writers/writter.factory");
const log_level_type_filter_1 = require("./filters/log-level-type-filter");
const format_factory_1 = require("./formatters/format.factory");
const command = new command_1.Command();
const options = command.getOptions();
const splitter = new splitter_1.Splitter();
const filter = new log_level_type_filter_1.LogLevelFilter();
const formater = format_factory_1.FormatFactory.create(options.logLevel);
const writer = writter_factory_1.WritterFactory.create(options.logLevel);
const reader = new file_reader_1.FileReader(splitter, filter, formater, writer);
const app = new app_1.default(splitter, reader, filter, formater, writer);
app.run(options);

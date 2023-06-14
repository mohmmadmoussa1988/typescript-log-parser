import { Splitter } from "./splitters/splitter";
import { FileReader } from "./reader/file-reader";
import Application from "./app";
import { Command } from "./command";
import { WritterFactory } from "./writers/writter.factory";
import { LogLevelFilter } from "./filters/log-level-type-filter";
import { FormatFactory } from "./formatters/format.factory";

const command = new Command();
const options = command.getOptions();

const splitter = new Splitter();
const filter = new LogLevelFilter();
const formater = FormatFactory.create(options.logLevel);
const writer = WritterFactory.create(options.logLevel);
const reader = new FileReader(splitter, filter, formater, writer);

const app = new Application(splitter, reader, filter, formater, writer);

app.run(options);

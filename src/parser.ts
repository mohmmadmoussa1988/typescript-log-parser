import { Splitter } from "./splitters/splitter";
import { FileReader } from "./reader/file-reader";
import Application from "./Application";
import { Command } from "./command";

const command = new Command();
const options = command.getOptions();

const splitter = new Splitter();
const reader = new FileReader(splitter);

const app = new Application(splitter, reader);

app.run(options);

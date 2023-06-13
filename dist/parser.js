"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const splitter_1 = require("./splitters/splitter");
const file_reader_1 = require("./reader/file-reader");
const Application_1 = __importDefault(require("./Application"));
const command_1 = require("./command");
const command = new command_1.Command();
const options = command.getOptions();
const splitter = new splitter_1.Splitter();
const reader = new file_reader_1.FileReader(splitter);
const app = new Application_1.default(splitter, reader);
app.run(options);

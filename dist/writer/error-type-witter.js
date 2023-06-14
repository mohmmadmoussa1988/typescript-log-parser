"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonArrayWriter = void 0;
const fs_1 = __importDefault(require("fs"));
const logger_1 = __importDefault(require("../logger/logger"));
class JsonArrayWriter {
    constructor() {
        this.outputFile = null;
        this.firstLineWritten = false;
    }
    append(records) {
        let result = records.map((obj) => JSON.stringify(obj)).join(",");
        if (this.firstLineWritten && result !== '') {
            result = "," + result;
        }
        this.validateOutputFileCreated();
        try {
            if (this.outputFile !== null) {
                fs_1.default.appendFileSync(this.outputFile, result);
                logger_1.default.info("Content appended to the file successfully!");
                this.firstLineWritten = true;
            }
        }
        catch (err) {
            throw new Error(`Something went wrong during output file writing! ${err}`);
        }
    }
    createOutputFile(outputFile) {
        try {
            this.outputFile = outputFile;
            fs_1.default.writeFileSync(outputFile, "[");
        }
        catch (err) {
            throw new Error(`Something went wrong during output file creation! ${err}`);
        }
    }
    closingCreatedFile() {
        this.validateOutputFileCreated();
        try {
            fs_1.default.appendFileSync(this.outputFile, "]");
        }
        catch (err) {
            throw new Error(`Something went wrong during output file closing! ${err}`);
        }
    }
    isFileCreated() {
        return this.outputFile !== null;
    }
    validateOutputFileCreated() {
        if (!this.isFileCreated()) {
            throw new Error(`Output file was not created!`);
        }
    }
}
exports.JsonArrayWriter = JsonArrayWriter;

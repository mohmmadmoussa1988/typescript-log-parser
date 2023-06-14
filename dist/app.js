"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = require("./validations/validator");
const file_not_exist_validator_1 = require("./validations/file-not-exist-validator");
const write_permission_1 = require("./validations/write-permission");
const file_exist_validator_1 = require("./validations/file-exist-validator");
class Application {
    constructor(splitter, reader, filter, formater, writer) {
        this.splitter = splitter;
        this.reader = reader;
        this.formater = formater;
        this.writer = writer;
        this.filter = filter;
    }
    run(options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validate(options);
            yield this.exec(options);
        });
    }
    exec(options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.writer.createOutputFile(options.outputFilePath);
            yield this.reader.readFileInBatches(options.inputFilePath, options.batchNumber, options.logLevel, options.logFormat);
            this.writer.closingCreatedFile();
        });
    }
    validate(options) {
        const validator = new validator_1.Validator();
        const errors = validator.validate([
            {
                input: options.inputFilePath,
                validator: new file_exist_validator_1.FileExistsValidator(),
                errorMessage: `${options.inputFilePath} does not exist`,
            },
            {
                input: options.outputFilePath,
                validator: new file_not_exist_validator_1.FileNotExistsValidator(),
                errorMessage: `${options.outputFilePath} already exists, please delete it first`,
            },
            {
                input: options.outputFilePath,
                validator: new write_permission_1.WritePermission(),
                errorMessage: "Output directory is not writable",
            },
        ]);
        if (errors.length > 0) {
            console.error(...errors);
            process.exit(1);
        }
    }
}
exports.default = Application;

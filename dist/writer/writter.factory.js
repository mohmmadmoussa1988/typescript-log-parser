"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WritterFactory = void 0;
const log_level_enum_1 = require("../enums/log-level.enum");
const error_type_witter_1 = require("./error-type-witter");
class WritterFactory {
    static create(logLevel) {
        switch (logLevel) {
            case log_level_enum_1.LogLevelEnum.ERROR:
                return new error_type_witter_1.JsonArrayWriter();
            default:
                throw new Error("Invalid formater type");
        }
    }
}
exports.WritterFactory = WritterFactory;

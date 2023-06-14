"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatFactory = void 0;
const error_type_formater_1 = require("./error-type-formater");
const log_level_enum_1 = require("../enums/log-level.enum");
class FormatFactory {
    static create(logLevel) {
        switch (logLevel) {
            case log_level_enum_1.LogLevelEnum.ERROR:
                return new error_type_formater_1.ErrorTypeformater();
            default:
                throw new Error("Invalid formater type");
        }
    }
}
exports.FormatFactory = FormatFactory;

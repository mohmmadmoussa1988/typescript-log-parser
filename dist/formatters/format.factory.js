"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatFactory = void 0;
const log_level_enum_1 = require("../enums/log-level.enum");
const error_type_formatter_1 = require("./error-type-formatter");
const general_type_formatter_1 = require("./general-type-formatter");
class FormatFactory {
    static create(logLevel) {
        switch (logLevel) {
            case log_level_enum_1.LogLevelEnum.ERROR:
                return new error_type_formatter_1.ErrorTypeFormatter();
                break;
            default:
                return new general_type_formatter_1.GeneralTypeFormatter();
        }
    }
}
exports.FormatFactory = FormatFactory;

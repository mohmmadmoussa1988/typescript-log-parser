"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatFactory = void 0;
const log_level_enum_1 = require("../enums/log-level.enum");
const error_type_formater_1 = require("./error-type-formater");
const general_type_formater_1 = require("./general-type-formater");
class FormatFactory {
    static create(logLevel) {
        switch (logLevel) {
            case log_level_enum_1.LogLevelEnum.ERROR:
                return new error_type_formater_1.ErrorTypeFormatter();
                break;
            default:
                return new general_type_formater_1.GeneralTypeFormatter();
        }
    }
}
exports.FormatFactory = FormatFactory;

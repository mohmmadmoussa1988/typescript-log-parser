"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevelFilter = void 0;
const log_level_enum_1 = require("../enums/log-level.enum");
class LogLevelFilter {
    logLevelFilter(logLevel, records) {
        return records.filter((record) => record.logLevel === log_level_enum_1.LogLevelEnum.ERROR);
    }
}
exports.LogLevelFilter = LogLevelFilter;

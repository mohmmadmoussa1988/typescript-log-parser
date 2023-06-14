"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevelFilter = void 0;
class LogLevelFilter {
    logLevelFilter(logLevel, records) {
        const filteredResults = records.filter((record) => record.logLevel === logLevel);
        return filteredResults;
    }
}
exports.LogLevelFilter = LogLevelFilter;

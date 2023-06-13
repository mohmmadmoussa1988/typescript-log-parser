"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevelEnumFromString = exports.LogLevelEnum = void 0;
var LogLevelEnum;
(function (LogLevelEnum) {
    LogLevelEnum["ERROR"] = "error";
    LogLevelEnum["iNFO"] = "info";
    LogLevelEnum["DEBUG"] = "debug";
    LogLevelEnum["WARN"] = "warn";
})(LogLevelEnum || (exports.LogLevelEnum = LogLevelEnum = {}));
function LogLevelEnumFromString(value) {
    switch (value) {
        case "error":
            return LogLevelEnum.ERROR;
        case "info":
            return LogLevelEnum.iNFO;
        case "debug":
            return LogLevelEnum.DEBUG;
        case "warn":
            return LogLevelEnum.WARN;
    }
    throw Error(`${value} is not a valid LogLevelEnum value`);
}
exports.LogLevelEnumFromString = LogLevelEnumFromString;

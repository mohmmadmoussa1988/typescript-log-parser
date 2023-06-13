"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_level_enum_1 = require("../enums/log-level.enum");
exports.default = {
    splitterDefaultFormat: "^(.+) - (\\w+) - (.+)$",
    logLevel: log_level_enum_1.LogLevelEnum.ERROR,
};

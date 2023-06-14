"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WritterFactory = void 0;
const json_type_witter_1 = require("./json-type-witter");
class WritterFactory {
    static create(logLevel) {
        switch (logLevel) {
            default:
                return new json_type_witter_1.JsonArrayWriter();
        }
    }
}
exports.WritterFactory = WritterFactory;

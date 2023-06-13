"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Splitter = void 0;
class Splitter {
    split(lines, format) {
        const parsedResults = [];
        lines.map((line) => {
            const regex = new RegExp(format);
            const match = regex.exec(line);
            if (match) {
                const date = match[1];
                const logLevel = match[2];
                const json = JSON.parse(match[3]);
                const splittedLine = {
                    date,
                    logLevel,
                    json,
                };
                parsedResults.push(splittedLine);
            }
            else {
                throw new Error("Line does not match the expected format.");
            }
        });
        return parsedResults;
    }
}
exports.Splitter = Splitter;

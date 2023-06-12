import { ISplitter } from "./splitter.interface";
import logger from "../logger/logger";
import { DefaultlogRecordInterface } from "../interfaces/default-log-record.interface";

export class Splitter implements ISplitter {
  public split(lines: string[], format: string): DefaultlogRecordInterface[] {
    const parsedResults: DefaultlogRecordInterface[] = [];
    lines.map((line) => {
      const regex = new RegExp(format);
      const match = regex.exec(line);
      if (match) {
        const date = match[1];
        const logLevel = match[2];
        const json = JSON.parse(match[3]);

        const splittedLine: DefaultlogRecordInterface = {
          date,
          logLevel,
          json,
        };
        parsedResults.push(splittedLine);
      } else {
        throw new Error("Line does not match the expected format.");
      }
    });
    return parsedResults;
  }
}

import { DefaultlogRecordInterface } from "../interfaces/default-log-record.interface";
import { FormattedlogRecordInterface } from "../interfaces/formatted-record.interface";
import { IWriter } from "./writter.interface";
import { LogLevelEnum } from "../enums/log-level.enum";
import { JsonArrayWriter } from "./json-type-witter";

export class WritterFactory {
  public static create(logLevel: LogLevelEnum): IWriter {
    switch (logLevel) {
      default:
        return new JsonArrayWriter();
    }
  }
}

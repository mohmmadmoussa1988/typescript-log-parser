import { DefaultlogRecordInterface } from "../interfaces/default-log-record.interface";
import { LogLevelEnum } from "../enums/log-level.enum";
import { IFormater } from "./format.interface";
import { ErrorTypeFormatter } from "./error-type-formater";

export class FormatFactory {
  public static create(logLevel: LogLevelEnum): IFormater {
    switch (logLevel) {
      case LogLevelEnum.ERROR:
        return new ErrorTypeFormatter();
      default:
        throw new Error("Invalid formater type");
    }
  }
}

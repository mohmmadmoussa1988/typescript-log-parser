import { DefaultlogRecordInterface } from "../interfaces/default-log-record.interface";
import { LogLevelEnum } from "../enums/log-level.enum";
import { IFormatter } from "./format.interface";
import { ErrorTypeFormatter } from "./error-type-formatter";

import { GeneralTypeFormatter } from "./general-type-formatter";

export class FormatFactory {
  public static create(logLevel: LogLevelEnum): IFormatter {
    switch (logLevel) {
      case LogLevelEnum.ERROR:
        return new ErrorTypeFormatter();
        break;
      default:
        return new GeneralTypeFormatter();
    }
  }
}

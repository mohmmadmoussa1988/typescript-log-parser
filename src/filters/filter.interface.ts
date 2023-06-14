import { DefaultlogRecordInterface } from "../interfaces/default-log-record.interface";
import { LogLevelEnum } from "../enums/log-level.enum";

export interface IFilter {
  logLevelFilter(
    logLevel: LogLevelEnum,
    records: DefaultlogRecordInterface[]
  ): DefaultlogRecordInterface[];
}

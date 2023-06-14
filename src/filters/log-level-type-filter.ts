import { DefaultlogRecordInterface } from "../interfaces/default-log-record.interface";
import { IFilter } from "./filter.interface";
import { LogLevelEnum } from "../enums/log-level.enum";

export class LogLevelFilter implements IFilter {
  public logLevelFilter(
    logLevel: LogLevelEnum,
    records: DefaultlogRecordInterface[]
  ): DefaultlogRecordInterface[] {
    return records.filter(
      (record: DefaultlogRecordInterface) =>
        record.logLevel === LogLevelEnum.ERROR
    );
  }
}

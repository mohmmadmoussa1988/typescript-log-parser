import { DefaultlogRecordInterface } from "../interfaces/default-log-record.interface";
import { FormattedlogRecordInterface } from "../interfaces/formatted-record.interface";

export interface IFormatter {
  format(records: DefaultlogRecordInterface[]): FormattedlogRecordInterface[];
}

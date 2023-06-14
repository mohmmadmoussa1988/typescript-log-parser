import { DefaultlogRecordInterface } from "../interfaces/default-log-record.interface";
import { FormattedlogRecordInterface } from "../interfaces/formatted-record.interface";

export interface IFormater {
  format(records: DefaultlogRecordInterface[]): FormattedlogRecordInterface[];
}

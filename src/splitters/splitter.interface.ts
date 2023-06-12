import { DefaultlogRecordInterface } from "../interfaces/default-log-record.interface";

export interface ISplitter {
  split(line: string[], format: string): DefaultlogRecordInterface[];
}

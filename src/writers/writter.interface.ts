import { FormattedlogRecordInterface } from "../interfaces/formatted-record.interface";

export interface IWriter {
  append(records: FormattedlogRecordInterface[]): void;
  createOutputFile(outputFile: string): void;
  closingCreatedFile(): void;
}

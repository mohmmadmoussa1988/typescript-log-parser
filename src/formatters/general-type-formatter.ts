import { DefaultlogRecordInterface } from "../interfaces/default-log-record.interface";
import { FormattedlogRecordInterface } from "../interfaces/formatted-record.interface";
import { IFormatter } from "./format.interface";

export class GeneralTypeFormatter implements IFormatter {
  public format(
    records: DefaultlogRecordInterface[]
  ): FormattedlogRecordInterface[] {
    return records.map((record) => {
      const errorRecord: FormattedlogRecordInterface = {
        timestamp: this.dateFormatter(record.date),
        loglevel: record.logLevel,
        transactionId: record.json.transactionId,
      };
      return errorRecord;
    });
  }

  private dateFormatter(recordDate: string): number {
    const date = new Date(recordDate);

    const epochTimestamp = Math.floor(date.getTime() / 1000);
    return epochTimestamp;
  }
}

import * as fs from "node:fs";

import { FormattedlogRecordInterface } from "../interfaces/formatted-record.interface";
import { IWriter } from "./writter.interface";
import logger from "../logger/logger";

export class JsonArrayWriter implements IWriter {
  private outputFile: string | null = null;
  private firstLineWritten: boolean = false;

  public append(records: FormattedlogRecordInterface[]): void {
    let result = records.map((obj) => JSON.stringify(obj)).join(",");
    if (this.firstLineWritten && result !== "") {
      result = "," + result;
    }

    this.validateOutputFileCreated();

    try {
      if (this.outputFile !== null) {
        fs.appendFileSync(this.outputFile, result);
        logger.info(`Batch appended to the file successfully!`);
        this.firstLineWritten = true;
      }
    } catch (err) {
      throw new Error(
        `Something went wrong during output file writing! ${err}`
      );
    }
  }

  public createOutputFile(outputFile: string): void {
    try {
      this.outputFile = outputFile;
      fs.writeFileSync(outputFile, "[");
    } catch (err) {
      throw new Error(
        `Something went wrong during output file creation! ${err}`
      );
    }
  }

  public closingCreatedFile(): void {
    this.validateOutputFileCreated();

    try {
      fs.appendFileSync(this.outputFile!, "]");
    } catch (err) {
      throw new Error(
        `Something went wrong during output file closing! ${err}`
      );
    }
  }

  private isFileCreated(): boolean {
    return this.outputFile !== null;
  }

  private validateOutputFileCreated(): void {
    if (!this.isFileCreated()) {
      throw new Error(`Output file was not created!`);
    }
  }
}

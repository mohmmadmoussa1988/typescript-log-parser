import * as fs from "node:fs";
import * as readline from "readline";
import { ISplitter } from "../splitters/splitter.interface";
import { DefaultlogRecordInterface } from "../interfaces/default-log-record.interface";
import { IWriter } from "../writers/writter.interface";
import { IFilter } from "../filters/filter.interface";
import { LogLevelEnum } from "../enums/log-level.enum";
import { FormattedlogRecordInterface } from "../interfaces/formatted-record.interface";
import { IFormatter } from "../formatters/format.interface";

export class FileReader {
  private splitter: ISplitter;
  private filter: IFilter;
  private formater: IFormatter;
  private writer: IWriter;

  constructor(
    splitter: ISplitter,
    filter: IFilter,
    formater: IFormatter,
    writer: IWriter
  ) {
    this.splitter = splitter;
    this.filter = filter;
    this.formater = formater;
    this.writer = writer;
  }

  public async readFileInBatches(
    filePath: string,
    batchSize: number,
    logLevel: LogLevelEnum,
    splitter: string
  ): Promise<string> {
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    let lines: string[] = [];
    const batches: string[][] = [];
    for await (const line of rl) {
      lines.push(line);

      if (lines.length === batchSize) {
        //preapre & append
        this.writeFormattedResults(logLevel, splitter, lines);
        lines = [];
      }
    }

    if (lines.length > 0) {
      //prepare & append
      this.writeFormattedResults(logLevel, splitter, lines);
    }
    return "done";
  }

  private writeFormattedResults(
    logLevel: LogLevelEnum,
    format: string,
    lines: string[]
  ): FormattedlogRecordInterface[] | [] {
    const formattedResults: FormattedlogRecordInterface[] | [] = [];
    //splitting
    const splittedLines = this.splitter.split(lines, format);
    //filter
    const filteredLines = this.filter.logLevelFilter(logLevel, splittedLines);
    //format
    if (filteredLines.length > 0) {
      const formattedResults = this.formater.format(filteredLines);
      this.writer.append(formattedResults);
    }
    return formattedResults;
  }
}

import * as fs from "node:fs";
import * as readline from "readline";
import { ISplitter } from "../splitters/splitter.interface";
import { DefaultlogRecordInterface } from "../interfaces/default-log-record.interface";

export class FileReader {
  private splitter: ISplitter;
  constructor(splitter: ISplitter) {
    this.splitter = splitter;
  }

  public async readFileInBatches(
    filePath: string,
    batchSize: number
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
        //format
        batches.push(lines);
        lines = [];
      }
    }

    if (lines.length > 0) {
      //format
      batches.push(lines);
    }
    return "done";
  }
}

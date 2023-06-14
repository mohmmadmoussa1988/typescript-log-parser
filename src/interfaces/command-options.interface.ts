import { LogLevelEnum } from "../enums/log-level.enum";

export interface OptionsInterface {
  inputFilePath: string;
  outputFilePath: string;
  logFormat: string;
  logLevel: LogLevelEnum;
  batchNumber: number;
}

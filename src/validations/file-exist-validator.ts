import { ValidatorInterface } from "./validation.interface";
import * as fs from "node:fs";

export class FileExistsValidator implements ValidatorInterface<string> {
  public isValid(filePath: string): boolean {
    return fs.existsSync(filePath);
  }
}

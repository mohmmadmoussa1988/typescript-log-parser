import { ValidatorInterface } from "./validation.interface";
import * as fs from "node:fs";
import * as path from "path";

export class WritePermission implements ValidatorInterface<string> {
  public isValid(filePath: string): boolean {
    try {
      const folderPath = path.dirname(filePath);
      fs.accessSync(folderPath, fs.constants.W_OK);
      return true;
    } catch (err) {
      return false;
    }
  }
}

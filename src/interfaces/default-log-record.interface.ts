interface JsonObject {
  transactionId: string;
  details: string;
  user?: {
    id: number;
    name: string;
  };
  userId?: number;
  code?: number;
  err?: string;
}

export interface DefaultlogRecordInterface {
  date: string;
  logLevel: string;
  json: JsonObject;
}

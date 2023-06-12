
export interface FormattedlogRecordInterface {
  timestamp: number;
  loglevel: string;
  transactionId: string;
  err?: string;
  details?: string;
  user?: {
    id: number;
    name: string;
  };
  userId?: number;
  code?: number;
}

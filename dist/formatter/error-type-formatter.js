"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorTypeformater = void 0;
class ErrorTypeformater {
    format(records) {
        return records.map((record) => {
            const errorRecord = {
                timestamp: this.dateformater(record.date),
                loglevel: record.logLevel,
                transactionId: record.json.transactionId,
                err: record.json.err,
            };
            return errorRecord;
        });
    }
    dateformater(recordDate) {
        const date = new Date(recordDate);
        const epochTimestamp = Math.floor(date.getTime() / 1000);
        return epochTimestamp;
    }
}
exports.ErrorTypeformater = ErrorTypeformater;

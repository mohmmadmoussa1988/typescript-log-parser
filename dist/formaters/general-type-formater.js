"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralTypeFormatter = void 0;
class GeneralTypeFormatter {
    format(records) {
        return records.map((record) => {
            const errorRecord = {
                timestamp: this.dateFormatter(record.date),
                loglevel: record.logLevel,
                transactionId: record.json.transactionId,
            };
            return errorRecord;
        });
    }
    dateFormatter(recordDate) {
        const date = new Date(recordDate);
        const epochTimestamp = Math.floor(date.getTime() / 1000);
        return epochTimestamp;
    }
}
exports.GeneralTypeFormatter = GeneralTypeFormatter;

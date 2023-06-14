"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
class Validator {
    validate(rules) {
        const errorMessages = [];
        for (let rule of rules) {
            if (!rule.validator.isValid(rule.input)) {
                errorMessages.push(rule.errorMessage + "\n");
            }
        }
        return errorMessages;
    }
}
exports.Validator = Validator;

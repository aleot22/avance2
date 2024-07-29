"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tasktitle = void 0;
class Tasktitle {
    constructor(value) {
        this.value = value;
        this.ensureisValid();
    }
    ensureisValid() {
        if (this.value.length < 15) {
            throw new Error("Tasktitlemust be at least 15 characters");
        }
    }
}
exports.Tasktitle = Tasktitle;

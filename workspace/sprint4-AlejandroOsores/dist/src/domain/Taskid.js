"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Taskid = void 0;
class Taskid {
    constructor(value) {
        this.value = value;
        this.ensureisValid();
    }
    ensureisValid() {
        if (this.value.length < 10) {
            throw new Error("Taskid must be at least 10 characters");
        }
    }
}
exports.Taskid = Taskid;

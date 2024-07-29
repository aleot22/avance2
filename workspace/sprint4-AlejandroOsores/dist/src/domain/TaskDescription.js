"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Taskdescription = void 0;
class Taskdescription {
    constructor(value) {
        this.value = value;
        this.ensureisValid();
    }
    ensureisValid() {
        if (this.value.length < 20) {
            throw new Error("Taskdescription be at least 20 characters");
        }
    }
}
exports.Taskdescription = Taskdescription;

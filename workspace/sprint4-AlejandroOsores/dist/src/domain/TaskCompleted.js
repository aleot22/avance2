"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCompleted = void 0;
class TaskCompleted {
    constructor(value) {
        this.value = value;
        this.ensureisValid();
    }
    ensureisValid() {
        if (typeof this.value !== "boolean") {
            throw new Error("TaskCompleted must be a boolean value");
        }
    }
}
exports.TaskCompleted = TaskCompleted;

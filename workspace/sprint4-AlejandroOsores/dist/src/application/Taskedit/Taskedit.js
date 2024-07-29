"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Taskedit = void 0;
const TaskDescription_1 = require("../../domain/TaskDescription");
const Taskid_1 = require("../../domain/Taskid");
const Tasktitle_1 = require("../../domain/Tasktitle");
const task_1 = require("../../domain/task");
const TaskCompleted_1 = require("../../domain/TaskCompleted");
class Taskedit {
    constructor(repository) {
        this.repository = repository;
    }
    run(id, title, description, completed) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = new task_1.Task(new Taskid_1.Taskid(id), new Tasktitle_1.Tasktitle(title), new TaskDescription_1.Taskdescription(description), new TaskCompleted_1.TaskCompleted(completed));
            return this.repository.edit(task);
        });
    }
}
exports.Taskedit = Taskedit;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceContainer = void 0;
const TaskGetAll_1 = require("../../src/application/TaskGetAll/TaskGetAll");
const TaskGetOneByid_1 = require("../../src/application/TaskGetOneByid/TaskGetOneByid");
const Taskcreate_1 = require("../../src/application/Taskcreate/Taskcreate");
const Taskdelete_1 = require("../../src/application/Taskdelete/Taskdelete");
const Taskedit_1 = require("../../src/application/Taskedit/Taskedit");
const InMemoryTaskRepository_1 = require("../../src/infrastructure/InMemoryTaskRepository");
const taskRepository = new InMemoryTaskRepository_1.InMemoryTaskRepository;
exports.ServiceContainer = {
    task: {
        getAll: new TaskGetAll_1.TaskGetAll(taskRepository),
        getOneById: new TaskGetOneByid_1.TaskGetOneByid(taskRepository),
        create: new Taskcreate_1.Taskcreate(taskRepository),
        edit: new Taskedit_1.Taskedit(taskRepository),
        delete: new Taskdelete_1.TaskDelete(taskRepository),
    }
};

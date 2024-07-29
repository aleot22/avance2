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
exports.TaskController = void 0;
const ServiceContainer_1 = require("../../ContServicio/Infrastructure/ServiceContainer");
const TaskNotFoundError_1 = require("../domain/TaskNotFoundError");
class TaskController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tasks = yield ServiceContainer_1.ServiceContainer.task.getAll.run();
                return res.status(200).json(tasks);
            }
            catch (error) {
                return res.status(500).json({ message: "Internal server error" });
            }
        });
    }
    getOneById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const task = yield ServiceContainer_1.ServiceContainer.task.getOneById.run(req.params.id);
                return res.status(200).json(task);
            }
            catch (error) {
                if (error instanceof TaskNotFoundError_1.TaskNotFoundError) {
                    return res.status(404).json({ message: error.message });
                }
                return res.status(500).json({ message: "Internal server error" });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, description, title, completed = false } = req.body;
            try {
                yield ServiceContainer_1.ServiceContainer.task.create.run(id, title, completed, description);
                return res.status(201).send();
            }
            catch (error) {
                return res.status(500).json({ message: "Internal server error" });
            }
        });
    }
    edit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, description, title, completed = false } = req.body;
            try {
                yield ServiceContainer_1.ServiceContainer.task.edit.run(id, title, description, completed);
                return res.status(204).send();
            }
            catch (error) {
                return res.status(500).json({ message: "Internal server error" });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield ServiceContainer_1.ServiceContainer.task.delete.run(req.params.id);
                return res.status(204).send();
            }
            catch (error) {
                return res.status(500).json({ message: "Internal server error" });
            }
        });
    }
}
exports.TaskController = TaskController;
